import styled from "styled-components";

const Container = styled.div`
  width: 700px;

  margin: 20px auto 0 auto;

  font-family: "Poppins";
`;

const Teacher = styled.div`
  color: #000;
  font-weight: 700;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-bottom: 10px;

  &:last-child {
    margin-bottom: 50px;
  }
`;

const TeacherName = styled.p`
  height: 50px;
  width: 100%;

  border-radius: 4px;
  border: 1px solid #000;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 10px;

  cursor: pointer;
`;

const Category = styled.div`
  width: calc(100% - 25px);

  /* display: ${(props) =>
    props.showDisciplines && props.isClicked ? "flex" : "none"}; */
  flex-direction: column;

  display: flex;
`;

const CategoryName = styled.p`
  height: 35px;
  width: 100%;

  font-weight: 700;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 10px;

  cursor: pointer;
`;

const TestsList = styled.div`
  width: calc(100% - 25px);

  padding-left: 16px;

  font-weight: 400;

  display: flex;
  flex-direction: column;
`;

const Test = styled.div`
  width: 100%;

  margin-top: 8px;

  //display: ${(props) => (props.showTests && props.isClicked ? "flex" : "none")};
  display: flex;

  flex-direction: column;
`;

export {
  Container,
  Teacher,
  TeacherName,
  Category,
  CategoryName,
  TestsList,
  Test,
};
