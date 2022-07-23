import Video from "@/components/VideoClase";
import { ImgContainer } from "./styles";

const data = {
    name: "fireship",
    className: "Video Clase",
    avatar: "https://images.unsplash.com/photo-1563306406-e66174fa3787?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    video: "https://www.youtube.com/embed/Jis9j5gtZgA"
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
