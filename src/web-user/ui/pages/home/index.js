import React from 'react';
import * as axios from "axios";
import {Box, CircularProgress, makeStyles} from '@material-ui/core';
import Bg1 from "../../../assets/home/welcome.png"
import Bg2 from "../../../assets/home/like.svg"
import Bg3 from "../../../assets/home/graphics.svg"
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
    root: {
    color: "#FFF",
        fontFamily: 'Sansita Swashed'
    },
    pageImage: {
        height: 500,
        backgroundImage: `url(${Bg1})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: '400px 400px',
        backgroundPosition: "right"
    },
    pageImage2: {
        height: 500,
        backgroundImage: `url(${Bg2})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: '500px 500px',
        backgroundPosition: "left center",
    },
    pageImage3: {
        height: 500,
        backgroundImage: `url(${Bg3})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: '500px 500px',
        backgroundPosition: "right center",
    },
    pageText: {
        float: "right",
        margin: 100,
        textAlign: "center",
    }
}));

export async function getStaticProps() {
    const url = 'https://www.instagram.com/vinip_borges/?__a=1'
   const itens =  axios(url).then(resp => resp.data)

    return {
        props: {
            itens,
        },
    };
}

function Home(props) {
    const classes = useStyles();
    const { itens } = props;
    return (
        <>
            <div className={classes.root}>
                <Container>
                        <div className={classes.pageImage}>
                            <div className="float-left text-center m-24 md:m-48 text-black">
                            <h1 className="text-4xl mb-4">Gerenciador de redes sociais</h1>
                            <p className="text-xl mb-10">Um novo modo de ver suas redes sociais.</p>
                            <Button variant="contained" color="primary">
                                Saiba +
                            </Button>
                            </div>
                         </div>
                        <div className={classes.pageImage2}>
                            <div className="flex w-1/2 float-right py-32">
                                <div className="align-middle text-center text-black">
                                    <h1 className="text-4xl mb-4">Só aqui na Analytizz você sabe quantas curtidas você ganha e o tempo que leva.</h1>
                                </div>
                            </div>
                        </div>
                        <div className={classes.pageImage3}>
                            <div className="flex w-1/2 float-left py-40">
                                <div className="align-middle text-center text-black">
                                    <h1 className="text-4xl mb-4">Organizamos todos os graficos para você ficar tranquilo  e tirar o melhor proveito.</h1>
                                </div>
                            </div>
                        </div>
                </Container>
            </div>
        </>
    )
}

export default Home;
