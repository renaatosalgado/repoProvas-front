import React, { useEffect, useState } from "react";
import {
  Container,
  Teacher,
  TeacherName,
  Category,
  CategoryName,
  TestsList,
  Test,
} from "./style";

export default function TeachersDisplay() {
  return (
    <>
      <Container>
        <Teacher>
          <TeacherName>Eli</TeacherName>
          <Category>
            <CategoryName>P1</CategoryName>
            <TestsList>
              <Test>Introdução 1 - (Introdução)</Test>
							<Test>Solos 1 - (Solos)</Test>
            </TestsList>
          </Category>
					<Category>
            <CategoryName>P2</CategoryName>
            <TestsList>
              <Test>Introdução 2 - (Introdução)</Test>
            </TestsList>
          </Category>
        </Teacher>

				<Teacher>
          <TeacherName>Bastiani</TeacherName>
          <Category>
            <CategoryName>P1</CategoryName>
            <TestsList>
              <Test>Culturas 1 - (Grandes Culturas)</Test>
							<Test>Espontênras 1 - (Plantas Espontênras)</Test>
            </TestsList>
          </Category>
					<Category>
            <CategoryName>P2</CategoryName>
            <TestsList>
						<Test>Culturas 2 - (Grandes Culturas)</Test>
							<Test>Espontênras 2 - (Plantas Espontênras)</Test>
            </TestsList>
          </Category>
        </Teacher>
      </Container>
    </>
  );
}
