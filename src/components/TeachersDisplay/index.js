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

import * as api from "../../services/api";
import useAuth from "../../hooks/useAuth";

export default function TeachersDisplay() {
  const [teachers, setTeachers] = useState([]);
  const [hasTeachers, setHasTeachers] = useState(false);

  const { auth } = useAuth();

  useEffect(() => {
    api.listTeachers(auth).then((res) => {
      setTeachers(res.data);
      setHasTeachers(true);
    });

    //eslint-disable-next-line
  }, []);

  return (
    <>
      <Container>
        {hasTeachers
          ? teachers.map((teacher) => (
              <Teacher>
                <TeacherName>{teacher.name}</TeacherName>
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
            ))
          : "Nada cadastrado no sistema."}
      </Container>
    </>
  );
}
