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
  const [showTests, setShowTests] = useState(false);
  const [tests, setTests] = useState([]);

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
        setShowDisciplines(!showDisciplines);
        setShowTests(false);
      });
    } else {
      setDiscplines([]);
      setShowDisciplines(!showDisciplines);
    }
  }

  async function listTests(disciplineId) {
    if (tests.length === 0 && !showTests) {
      api.listTests(auth, disciplineId).then((res) => {
        setTests(res.data);
        setShowTests(true);
      });
    } else {
      setTests([]);
      setShowTests(false);
    }
  }

  return (
    <Container>
      {hasTerms
        ? terms.map((term) => (
            <Term key={term.id}>
              <TermNumber onClick={() => listDisciplines(term.id)}>
                <p>{term.number}º Período</p>
                <p>
                  {showDisciplines ? (
                    <IoIosArrowUp size="20px" color="blue" />
                  ) : (
                    <IoIosArrowDown size="20px" color="blue" />
                  )}
                </p>
              </TermNumber>
              {showDisciplines
                ? disciplines.map((discipline) => (
                    <Discipline
                      onClick={() => {
                        listTests(discipline.id);
                      }}
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
                        {showTests
                          ? tests.map((test) => (
                              <Test
                                key={test.id}
                                isClicked={
                                  discipline.id ===
                                  test.teachersDisciplines.disciplineId
                                }
                                showTests={showTests}
                              >
                                <TestCategory>
                                  {test.categories.name}
                                </TestCategory>
                                <a
                                  href={test.pfdUrl}
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  <TestName>
                                    {test.name} - (
                                    {test.teachersDisciplines.teachers.name})
                                  </TestName>
                                </a>
                              </Test>
                            ))
                          : ""}
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
