import { Add, Remove } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";


const Container = styled.div`

`;
const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    flex: 1;
`;
const ImgContainer = styled.div`
    flex: 1;
`;
const InfoContainer = styled.div`
    padding: 0px 50px;
    flex: 1;

`;
const Image = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: cover;
`;
const Title = styled.h1`
    font-weight: 200;

`;

const Desc= styled.p`
    margin: 20px 0px;
`;

const Price = styled.span`
    font-weight: 100;
    font-size: 40px;
`;

const FilterContainer = styled.div `
    width: 40%;
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
`;
const Filter = styled.div `
display: flex;
align-items: center;

`;
const FilterTitle = styled.div `
font-size: 20px;
font-weight: 200;
`;
const FilterColor = styled.div `
width: 20px;
height: 20px;
border-radius: 50%;
background-color: ${props=>props.color};
margin: 0 5px;
cursor: pointer;
`;
const FilterSize = styled.select `
    margin-left: 10px;
    padding: 5px;
`;
const FilterSizeOption = styled.option ``;

const AddContainer = styled.div `
    display: flex;
    align-items: center;
    width: 40%;
    justify-content: space-between;
`;
const AmountContainer = styled.div `
    display: flex;
    align-items: center;
    font-weight: 700;
`;
const Amount = styled.span `
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 5px;
`;
const Button = styled.button `
    padding: 15px;
    border: 2px solid teal;
    background-color: white;
    font-weight: 500px;
    cursor: pointer;

    &:hover{
      background-color: #f8f4f4;
    }
`;



const Product = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImgContainer>
            <Image src="https://www.prada.com/content/dam/pradanux_products/U/UCS/UCS319/1YOTF010O/UCS319_1YOT_F010O_S_182_SLF.png"/>
        </ImgContainer>
        <InfoContainer>
            <Title>
                Denim hat
            </Title>
            <Desc>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex animi facere odio molestiae maiores similique reprehenderit magni, impedit hic id temporibus, tempora quas obcaecati officiis quod perspiciatis. Eum, id numquam.
            </Desc>
            <Price>
                $ 20
            </Price>
            <FilterContainer>
                <Filter>
                    <FilterTitle>Color</FilterTitle>
                    <FilterColor color="black"/>
                    <FilterColor color="red"/>
                    <FilterColor color="blue"/>
                </Filter>
                <Filter>
                    <FilterTitle>
                        Size
                    </FilterTitle>
                    <FilterSize>
                        <FilterSizeOption>XS</FilterSizeOption>
                        <FilterSizeOption>S</FilterSizeOption>
                        <FilterSizeOption>M</FilterSizeOption>
                        <FilterSizeOption>L</FilterSizeOption>
                        <FilterSizeOption>XL</FilterSizeOption>
                    </FilterSize>
                </Filter>
            </FilterContainer>
            <AddContainer>
                <AmountContainer>
                    <Remove />
                    <Amount>1</Amount>
                    <Add />
                </AmountContainer>

                <Button>ADD TO CART</Button>
            </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  )
}

export default Product
