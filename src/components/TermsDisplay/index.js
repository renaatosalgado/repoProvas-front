import React, { useEffect, useState } from "react";
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
} from "./style";

import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import * as api from "../../services/api";
import useAuth from "../../hooks/useAuth";

export default function TermsDisplay() {
  const [terms, setTerms] = useState([]);
  const [hasTerms, setHasTerms] = useState(false);
  const [showDisciplines, setShowDisciplines] = useState(false);
  const [disciplines, setDiscplines] = useState([]);

  const { auth } = useAuth();
  useEffect(() => {
    api.listTerms(auth).then((res) => {
      setTerms(res.data);
      setHasTerms(true);
    });

    //eslint-disable-next-line
  }, []);

  async function listDisciplines(termId) {
    if (disciplines.length === 0) {
      api.listDisciplines(auth, termId).then((res) => {
        setDiscplines(res.data);
        setShowDisciplines(true);
      });
    } else {
      setDiscplines([]);
      setShowDisciplines(false);
    }
  }

  async function listTests(disciplineId) {}

  return (
    <Container>
      {hasTerms
        ? terms.map((term) => (
            <Term key={term.id}>
              <TermNumber onClick={() => listDisciplines(term.id)}>
                <p>{term.number}º Período</p>
                <p>
                  {showDisciplines ? (
                    <IoIosArrowDown size="20px" />
                  ) : (
                    <IoIosArrowUp size="20px" />
                  )}
                </p>
              </TermNumber>
              {showDisciplines
                ? disciplines.map((discipline) => (
                    <Discipline
                      showDisciplines={showDisciplines}
                      isClicked={term.id === discipline.termId}
                      key={discipline.id}
                    >
                      <DisciplineName>
                        <p>{discipline.name}</p>
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
                  ))
                : ""}
            </Term>
          ))
        : "Ainda não há nada cadastrado no sistema."}
    </Container>
  );
}
