import styled from "styled-components";

interface StyledProps{
    background: string;
}

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    background: #162122;
    color: white;
    -webkit-text-stroke: .1px black;
    width: 95%;
    margin: 0 auto;
    position: fixed;
    top: 100%;
    height: 180px;
    margin-top: -174px;
    left: calc(-50vw + 50%); 
    right: calc(-50vw + 50%);
    border: #6C6648 solid 4px;
    img{
        width: 20px;
        margin-right: 5px;
    }

    .actions{
        width: 15%;
        display: flex;
        flex-direction: column;
        padding: 10px;
        justify-content: space-between;
        cursor: pointer;
        >div{
            border: #6C6648 solid 2px;
            width: 100%;
            height: 47%;
            padding: 5px 0px 5px 10px;

            span{
                display: flex;
                align-items: center;
                margin-top: 3px;
            }

            >div{
                display: flex;
                justify-content: flex-end;
                align-items: flex-start;
                margin: -2.5% 2% 0px 0px;
            }
            transition: all .5s;
        }
        .roll{
            background: linear-gradient(to right, #474330, #151910);
            :hover{
                filter: brightness(120%);
                background: #3E3A2B;
            }
        }
        .levelUp{
            background: linear-gradient(to right, #283442, #0B3348);
            :hover{
                filter: brightness(120%);
                background: #124351;
            }
        }
    }

    
`;
export const ChampionPool = styled.div<StyledProps>`
        margin: 0 3px;
        border: #141E24 solid 3px;
        width: 17%;
        height: 170px;
        background: url(${props=>props.background}) no-repeat;
        background-size: cover;
        background-position: center;
        transition: all .5s;
        font-size: 1.05rem;
        -webkit-text-stroke: .35px black;

        :hover{
            cursor: pointer;
            filter: brightness(120%);
        }
        >div{
            height: 78%;
            padding: 5px;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            h3{
                margin-bottom: 5px;
            }
        }
        >section{
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            background: #1D2B36;
            padding: 5px 10px;
            h3{
                display: flex;
                align-items: center;
            }
        }
`;