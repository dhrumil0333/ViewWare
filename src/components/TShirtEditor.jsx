import React, { useRef, useState, useEffect } from "react";
import { Stage, Layer, Image, Transformer } from "react-konva";
import useImage from "use-image";
import './TShirtEditor.css';

const TShirtEditor = ({ onUpdateTexture, onColorChange }) => {
    const [image, setImage] = useState(null);
    const [template] = useImage("/assets/Template.png");
    const [uploadedImage] = useImage(image);
    const stageRef = useRef(null);
    const imageRef = useRef(null);
    const transformerRef = useRef(null);
    const [color, setColor] = useState("#ffffff");
    const [selected, setSelected] = useState(false);
    const [imagePosition, setImagePosition] = useState({ x: 125, y: 175 });

    // 🔹 UseEffect to Adjust Transformer Dynamically
    useEffect(() => {
        if (selected && transformerRef.current && imageRef.current) {
            const transformer = transformerRef.current;
            const imageNode = imageRef.current;

            transformer.nodes([imageNode]);
            transformer.getLayer().batchDraw();

            // 🔹 Keep Transformer Interactive After First Resize
            const updateTransformer = () => {
                transformer.forceUpdate();
                transformer.getLayer().batchDraw();
            };

            imageNode.on("transform", updateTransformer);
            imageNode.on("dragmove", updateTransformer);

            return () => {
                imageNode.off("transform", updateTransformer);
                imageNode.off("dragmove", updateTransformer);
            };
        }
    }, [selected, uploadedImage]);

    const handleColorChange = (e) => {
        const newColor = e.target.value;
        setColor(newColor);
        onColorChange(newColor);
    };

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => setImage(reader.result);
            reader.readAsDataURL(file);
        }
    };

    const handleExport = () => {
        if (!stageRef.current) return;
        const stage = stageRef.current;
        const templateNode = stage.findOne("Image");
        const transformer = transformerRef.current;

        // Hide Transformer before exporting
        if (transformer) {
            transformer.nodes([]);
            transformer.getLayer().batchDraw();
        }

        if (templateNode) {
            templateNode.visible(false);
        }

        const uri = stage.toDataURL();
        const newImage = new window.Image();
        newImage.src = uri;
        newImage.onload = () => {
            const canvas = document.createElement("canvas");
            const ctx = canvas.getContext("2d");
            canvas.width = newImage.width;
            canvas.height = newImage.height;

            ctx.translate(0, canvas.height);
            ctx.scale(1, -1);
            ctx.drawImage(newImage, 0, 0, canvas.width, canvas.height);

            const flippedDataUrl = canvas.toDataURL();
            localStorage.setItem("tshirtDesign", flippedDataUrl);
            onUpdateTexture(flippedDataUrl);
        };

        if (templateNode) {
            templateNode.visible(true);
        }
    };

    const handleSelect = (e) => {
        e.cancelBubble = true;
        setSelected(true);
    };

    const handleDeselect = (e) => {
        if (e.target === e.currentTarget) {
            setSelected(false);
        }
    };

    const handleDragMove = (e) => {
        const { x, y } = e.target.position();
        setImagePosition({ x, y });
    };

    return (
        <div className="tshirt-editor">
        <div className="editor-container">
            <input type="color" value={color} onChange={handleColorChange} />
            <input type="file" onChange={handleImageUpload} />
            <button className="editor-button" onClick={handleExport}>Apply to T-Shirt</button>

            <Stage
                width={500}
                height={500}
                ref={stageRef}
                className="canvas-stage"
                onMouseDown={handleDeselect} 
                onTouchStart={handleDeselect}
            >
                <Layer>
                    <Image image={template} width={500} height={500} />
                    {uploadedImage && (
                        <>
                            <Image
                                ref={imageRef}
                                image={uploadedImage}
                                width={150}
                                height={150}
                                x={imagePosition.x}
                                y={imagePosition.y}
                                draggable
                                onClick={handleSelect}  
                                onMouseDown={handleSelect} 
                                onTap={handleSelect}
                                onDragMove={handleDragMove} 
                            />
                            {selected && (
                                <Transformer
                                    ref={transformerRef}
                                    keepRatio={true} // Keeps aspect ratio while resizing
                                    enabledAnchors={[
                                        "top-left", "top-right", "bottom-left", "bottom-right",
                                        "top-center", "bottom-center", "middle-left", "middle-right"
                                    ]}
                                    rotateEnabled={true}
                                    boundBoxFunc={(oldBox, newBox) => {
                                        if (newBox.width < 50 || newBox.height < 50) {
                                            return oldBox;
                                        }
                                        return newBox;
                                    }}
                                />
                            )}
                        </>
                    )}
                </Layer>
            </Stage>
        </div>
        </div>
    );
};

export default TShirtEditor;

