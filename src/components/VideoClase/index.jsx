import GoBackArrow from "../GoBackArrow";
import { Details, Video } from "./styles";
export default function VideoClase({ name, className, avatar, video }) {
    return (
        <>
            <Details>
                <GoBackArrow />
                <img src={avatar} alt="" />
                <main>
                    <h3>{className}</h3>
                    <h4>Por: {name}</h4>
                </main>
            </Details>
            <Video
                src={video}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write;
                encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
            ></Video>
        </>
    );
}
