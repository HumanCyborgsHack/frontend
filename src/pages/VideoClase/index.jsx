import Video from "@/components/VideoClase";
import { ImgContainer } from "./styles";

const data = {
    name: "Eduardo Sáenz de Cabezón",
    className: "¿Para qué sirven las matemáticas?",
    avatar: "/images/derivando.jpg",
    video: "https://www.youtube.com/embed/RlUZv0MoVWk"
};

export default function VideoClase() {
    return (
        <>
            <Video {...data} />
            <ImgContainer>
                <img
                    src="https://media.giphy.com/media/5nbbxRphKVoRow6PYD/giphy.gif"
                    alt=""
                />
            </ImgContainer>
        </>
    );
}
