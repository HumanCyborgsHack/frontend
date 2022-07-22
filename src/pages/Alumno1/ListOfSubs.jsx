import Layout from "@/components/Layout";
import { Grid } from "@mui/material";

const data = [
    {
        id: 1,
        subject: "Matemáticas",
        in: "30 min",
        color: "#66d399",
        img: "https://thecatapi.com/api/images/get?format=src&type=gif"
    },
    {
        id: 1,
        subject: "Habla Inglesa",
        in: "30 min",
        color: "#66d399",
        img: "https://thecatapi.com/api/images/get?format=src&type=image"
    }
];

export default function ListOfSubs() {
    return (
        <Layout>
            <h2>Tus clases</h2>
            <Grid container xs={12} rowGap="20px">
                {data.map((item, index) => {
                    if (index === 0) {
                        return (
                            <Grid
                                container
                                item
                                sx={{
                                    borderRadius: "20px"
                                }}
                            >
                                <Grid item xs={4}>
                                    <img
                                        style={{
                                            borderRadius: "20px 0 0 20px",
                                            width: "100%",
                                            height: "100%",
                                            objectFit: "cover"
                                        }}
                                        src={item.img}
                                        alt=""
                                    />
                                </Grid>
                                <Grid
                                    item
                                    xs={8}
                                    sx={{
                                        padding: "1rem",
                                        textAlign: "right",
                                        height: "100px",
                                        backgroundColor: item.color
                                    }}
                                >
                                    <h3>{item.subject}</h3>
                                    <p>{item.in}</p>
                                </Grid>
                            </Grid>
                        );
                    } else {
                        return (
                            <Grid
                                container
                                item
                                direction="column"
                                xs={6}
                                sx={{
                                    borderRadius: "20px",
                                    backgroundColor: item.color
                                }}
                            >
                                <Grid item>
                                    <img
                                        style={{
                                            borderRadius: "20px 20px 0 0",
                                            width: "100%",
                                            height: "100%",
                                            objectFit: "cover"
                                        }}
                                        src={item.img}
                                        alt=""
                                    />
                                </Grid>
                                <Grid
                                    item
                                    sx={{
                                        padding: "1rem",
                                        textAlign: "center"
                                    }}
                                >
                                    <h3>{item.subject}</h3>
                                </Grid>
                            </Grid>
                        );
                    }
                })}
            </Grid>
        </Layout>
    );
}
