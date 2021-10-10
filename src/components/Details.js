import React from 'react'
import styled from 'styled-components'

function Details() {
    return (
        <div>
            <Container>
                <Background>
                    <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4F39B7E16726ECF419DD7C49E011DD95099AA20A962B0B10AA1881A70661CE45/scale?width=1440&aspectRatio=1.78&format=jpeg" alt="" />
                </Background>
                <ImageTitle>
                    <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D7AEE1F05D10FC37C873176AAA26F777FC1B71E7A6563F36C6B1B497CAB1CEC2/scale?width=1440&aspectRatio=1.78" alt="" />
                </ImageTitle>
                <Controls>
                    <PlayBtn>
                        <img src="/images/play-icon-black.png" alt="" />
                        <span>PLAY</span>
                    </PlayBtn>
                    <TrailerBtn>
                        <img src="/images/play-icon-white.png" alt="" />
                        <span>TRAILER</span>
                    </TrailerBtn>
                    <AddBtn>
                        <span>+</span>
                    </AddBtn>
                    <GrpWatchBtn>
                        <img src="/images/group-icon.png" alt="" />
                    </GrpWatchBtn>
                </Controls>
            </Container>
        </div>
    )
}

export default Details


const Container = styled.div`
     position: relative;
     min-height: calc(100vh - 70px);
     padding: 0 calc(3.5vw + 5px);
 `
const Background = styled.div`
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: -1;
      opacity: 0.7;

      img{
          width: 100%;
          hight: 100%
      }
`

const ImageTitle = styled.div`
      padding-top: 45px;
      height: 30vh;
      min-height: 170px;
      width: 20vw;
      min-width: 200px;

      img{
          width: 100%;
          height: 100%;
          object-fit: contain;
      }
`

const Controls = styled.div`
      margin-top: 40px;
      display: flex;
      align-items: center;
`

const PlayBtn = styled.button`
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0 24px;
      margin-right: 22px;
      border-radius: 4px;
      font-size: 15px;
      height: 56px;
      background: rgb(249, 249, 249);
      border: none;
      letter-spacing: 1.8px;
      cursor: pointer;

      &:hover{
          background: rgb(198, 198, 198);
      }
`

const TrailerBtn = styled(PlayBtn)`
      background: rgba(0,0 ,0 , 0.3);
      color: rgb(249, 249, 249);
      border: 1px solid rgb(249, 249, 249);
`

const AddBtn = styled.button`
      cursor: pointer;
      margin-right: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(0,0 ,0 , 0.3);
      color: rgb(249, 249, 249);
      border: 1px solid rgb(249, 249, 249);
      width: 44px;
      height: 44px;
      border-radius: 50%;
      span{
          font-size: 30px;
          color: white;
      } 
`

const GrpWatchBtn = styled(AddBtn)`
      background: rgb(0,0,0);
`

