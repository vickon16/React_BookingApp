import styled from "styled-components";
import propertyData from "../data/propertyData.json";

const PropertyList = () => {
  return (
    <Container>
      {propertyData.map((item) => (
        <PropertyListItem key={item.id}>
          <img src={item.img} alt="property-img" />
          <div className="property-titles">
            <h4>{item.title}</h4>
            <p>{item.desc}</p>
          </div>
        </PropertyListItem>
      ))}
    </Container>
  );
};

export default PropertyList;

const Container = styled.div`
  width: 100%;
  gap: 10px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
`;

const PropertyListItem = styled.article`
  border-radius: 5px;
  overflow: hidden;
  cursor: pointer;
  border: 1px solid rgba(0, 0, 0, 0.1);

  img {
    height: 150px;
  }

  .property-titles {
    margin-top: 0.5rem;
    padding: .5rem;
    h4 {
      font-size: clamp(0.85rem, 1vw, 1rem);
    }
    p {
      font-size: clamp(0.75rem, 0.9vw, 0.9rem);
    }
  }
`;
