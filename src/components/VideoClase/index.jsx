import GoBackArrow from "../GoBackArrow";
import { Details, Video } from "./styles";
export default function VideoClase({ name, className, avatar, video }) {
    return (
        <>
            <Details>
                <GoBackArrow />
                <img src={avatar} alt="" />
                <main>
                    <h4>{className}</h4>
                    <h5>Por: {name}</h5>
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
