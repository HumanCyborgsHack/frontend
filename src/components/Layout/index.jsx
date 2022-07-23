import Main from "./Styles";

export default function Layout(props) {
    return (
        <div>
            <Main>{props.children}</Main>
        </div>
    );
}
