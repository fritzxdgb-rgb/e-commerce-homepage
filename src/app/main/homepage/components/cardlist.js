import React from "react";
import ImageCard from "../../../../components/ui/card";

export default function CardList(){
    return(
        <div style={containerStyle}>
            <ImageCard
            image = "https://tse4.mm.bing.net/th/id/OIP.Y1nld9VP__UncAfYiZFoGAHaM2?rs=1&pid=ImgDetMain&o=7&rm=3"
            title = "Mountain"
            description = "A beautiful Mountain View"

            />

             <ImageCard
            image = "https://tse4.mm.bing.net/th/id/OIP.Y1nld9VP__UncAfYiZFoGAHaM2?rs=1&pid=ImgDetMain&o=7&rm=3"
            title = "Mountain"
            description = "A beautiful Mountain View"

            />

             <ImageCard
            image = "https://tse4.mm.bing.net/th/id/OIP.Y1nld9VP__UncAfYiZFoGAHaM2?rs=1&pid=ImgDetMain&o=7&rm=3"
            title = "Mountain"
            description = "A beautiful Mountain View"

            />

        </div>
    );
}

const containerStyle = {
  display: "flex",
  gap: "20px",
  justifyContent: "center",
  flexWrap: "wrap",  
  padding: "px",
}