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
  const [categories, setCategories] = useState([]);
  const [hasCategories, setHasCategories] = useState(false);

  const { auth } = useAuth();

  useEffect(() => {
    api.listTeachers(auth).then((res) => {
      setTeachers(res.data);
      setHasTeachers(true);
    });

    //eslint-disable-next-line
  }, []);

  async function listTeacherTestsCategories(teacherId) {
    if (categories.length === 0) {
      const { data } = await api.listTeacherTestsCategories(auth, teacherId);

      const rawCategories = [];

      for (let i = 0; i < data.length; i++) {
        rawCategories.push(data[i].categories.name);
      }

      const testsCategories = [...new Set(rawCategories)].sort();
      setCategories(testsCategories);
      setHasCategories(true);
    } else {
      setCategories([]);
      setHasCategories(false);
    }
  }

  return (
    <>
      <Container>
        {hasTeachers
          ? teachers.map((teacher) => (
              <Teacher>
                <TeacherName
                  onClick={() => listTeacherTestsCategories(teacher.id)}
                >
                  {teacher.name}
                </TeacherName>
                {hasCategories
                  ? categories.map((category) => (
                      <Category key={category}>
                        <CategoryName>{category}</CategoryName>
                        <TestsList>
                          <Test>Introdução 1 - (Introdução)</Test>
                          <Test>Solos 1 - (Solos)</Test>
                        </TestsList>
                      </Category>
                    ))
                  : ""}
              </Teacher>
            ))
          : "Nada cadastrado no sistema."}
      </Container>
    </>
  );
}
