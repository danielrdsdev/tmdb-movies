# Consumo de API themoviedb.org (TMDB)

Este projeto é um desafio técnico sobre a utilização da API do **themoviedb.org (TMDB)** para listar filmes e séries populares, implementar filtros de pesquisa e exibir detalhes das produções em uma aplicação **React** utilizando **Next.js**, **TypeScript** e **Tailwind CSS**.

## 🔗 Projeto Online

[Clique para ver o projeto online](https://tmdb-movies-three.vercel.app/)

## 🖥 Imagens do projeto

![HomePage](https://github.com/danielrdsdev/pilar-challenge/assets/97995126/778960c9-e82d-40d0-92a8-a2a05f438456)
![MoviePage](https://github.com/danielrdsdev/pilar-challenge/assets/97995126/876f2802-6e7c-47bc-9895-f17bb88a4561)
![MoviesPage](https://github.com/danielrdsdev/pilar-challenge/assets/97995126/e310baca-a75f-4344-9063-8732b0ab8760)
![SearchDialog](https://github.com/danielrdsdev/pilar-challenge/assets/97995126/8696f261-8a80-4bf3-82a8-5548a53fa110)
![SarchPage](https://github.com/danielrdsdev/pilar-challenge/assets/97995126/161e175e-4588-4793-90ea-85dbd3def853)
![MoviePageSkeletonLoading](https://github.com/danielrdsdev/pilar-challenge/assets/97995126/f34a2e9f-71ee-4a43-a7e4-87a7cbf93f92)
![LightHouseScore](https://github.com/danielrdsdev/pilar-challenge/assets/97995126/25d5baac-55fa-47a5-8389-f8d03de1f3fb)

## 🚀 Tecnologias Utilizadas

- [React](https://reactjs.org/)
- [Next.js](https://nextjs.org/)
  - O *Next.js* foi escolhido por seu excelente suporte a renderização no lado do servidor (SSR - Server-Side Rendering) e geração estática (SSG - Static Site Generation). Estas funcionalidades são fundamentais para melhorar a performance e otimização para motores de busca (SEO), o que é um grande diferencial para aplicações que necessitam de um carregamento rápido e eficiente, além de uma excelente indexação em motores de busca. Ideal para projetos que exigem alta performance e um ótimo SEO.
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Shadcn/ui](https://ui.shadcn.com/)
- [Zod](https://zod.dev/)
- [React Hook Form](https://react-hook-form.com/)
- [Vitest](https://vitest.dev/)
- Suspense API do React para melhorar a experiência do usuário com estados de loading

## 💻 Sobre o Projeto

Este projeto fornece diversas funcionalidades, incluindo:

- Listagem de filmes em alta
- Listagem de filmes mais populares
- Filtro de pesquisa de produções específicas, salvando o resultado na URL
- Paginação na página de pesquisa e filmes (20 filmes por página) - salvando o resultado na URL
- Página de detalhes do filme, contendo informações detalhadas como:
  - Nome
  - Data de lançamento
  - Gêneros
  - Duração
  - Poster
  - Banner
  - Sinopse
  - Classificação geral
  - Diretor
  - Elenco
  - Título original
  - Idioma original
  - Orçamento
  - Bilheteria

O objetivo principal é demonstrar habilidades nas tecnologias mencionadas, focando na integração com APIs externas, implementação de filtros de pesquisa e exibição de detalhes das produções.

## 📽️ Video demonstrativo

[Clique para ver o video no YouTube](https://www.youtube.com/embed/cpBj1niG3Fs)

## 📚 Como Utilizar

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:

- [Node.js](https://nodejs.org/en/)
- [Npm](https://www.npmjs.com/)

### Instalação

```bash
# Clone este repositório
$ git clone https://github.com/danielrdsdev/pilar-challenge.git

# Acesse a pasta do projeto no terminal/cmd
$ cd pilar-challenge

# Instale as dependências
$ npm install

# Execute a aplicação em modo de desenvolvimento
$ npm run dev

# O servidor inciará na porta:3000 - acesse http://localhost:3000
```
