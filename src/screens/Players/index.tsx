import { Header } from "@components/Header";
import { Container, Form } from "./styles";
import { Highlight } from "@components/Highlight";
import React from "react";
import { ButtonIcon } from "@components/ButtonIcon";
import { Input } from "@components/Input";
import { Filter } from "@components/Filter";

export function Players() {

    return (
        <Container>
            <Header showBackButton />

            <Highlight title="Nome da Turma" subtitle="Turma " />

            <Form>
                <Input placeholder="Nome da pessoa" autoCorrect={false} />
                <ButtonIcon icon="add" />
            </Form>
            <Filter title="time A" />
        </Container>
    )
}