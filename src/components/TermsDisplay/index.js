import React from "react";
import {
  Container,
  Term,
  TermNumber,
  Discipline,
  DisciplineName,
  TestsList,
  Test,
  TestCategory,
  TestName,
  TeacherName,
} from "./style";

import { IoIosArrowUp } from "react-icons/io";

export default function TermsDisplay() {
  return (
    <Container>
      <Term>
        <TermNumber>
          <p>1º Período</p>
          <p>
            <IoIosArrowUp size="20px" />
          </p>
        </TermNumber>
        <Discipline>
          <DisciplineName>
            <p>Express</p>
            <p>
              <IoIosArrowUp size="20px" />
            </p>
          </DisciplineName>
          <TestsList>
            <Test>
              <TestCategory>P1</TestCategory>
              <TestName>2022.01 - Client (Dina)</TestName>
            </Test>
            <Test>
              <TestCategory>P2</TestCategory>
              <TestName>2022.03 - Prisma (Dina)</TestName>
            </Test>
          </TestsList>
        </Discipline>

        <Discipline>
          <DisciplineName>
            <p>SQL</p>
            <p>
              <IoIosArrowUp size="20px" />
            </p>
          </DisciplineName>
          <TestsList>
            <Test>
              <TestCategory>P1</TestCategory>
              <TestName>2022.01 - Queries (Dina)</TestName>
            </Test>
            <Test>
              <TestCategory>P2</TestCategory>
              <TestName>2022.03 - Migrations (Dina)</TestName>
            </Test>
          </TestsList>
        </Discipline>        
      </Term>

      <Term>
        <TermNumber>
          <p>1º Período</p>
          <p>
            <IoIosArrowUp size="20px" />
          </p>
        </TermNumber>
        <Discipline>
          <DisciplineName>
            <p>Express</p>
            <p>
              <IoIosArrowUp size="20px" />
            </p>
          </DisciplineName>
          <TestsList>
            <Test>
              <TestCategory>P1</TestCategory>
              <TestName>2022.01 - Client (Dina)</TestName>
            </Test>
            <Test>
              <TestCategory>P2</TestCategory>
              <TestName>2022.03 - Prisma (Dina)</TestName>
            </Test>
          </TestsList>
        </Discipline>

        <Discipline>
          <DisciplineName>
            <p>SQL</p>
            <p>
              <IoIosArrowUp size="20px" />
            </p>
          </DisciplineName>
          <TestsList>
            <Test>
              <TestCategory>P1</TestCategory>
              <TestName>2022.01 - Queries (Dina)</TestName>
            </Test>
            <Test>
              <TestCategory>P2</TestCategory>
              <TestName>2022.03 - Migrations (Dina)</TestName>
            </Test>
          </TestsList>
        </Discipline>        
      </Term>
    </Container>
  );
}
