--
-- PostgreSQL database dump
--

-- Dumped from database version 12.8 (Ubuntu 12.8-0ubuntu0.20.04.1)
-- Dumped by pg_dump version 12.8 (Ubuntu 12.8-0ubuntu0.20.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: SequelizeMeta; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."SequelizeMeta" (
    name character varying(255) NOT NULL
);


ALTER TABLE public."SequelizeMeta" OWNER TO postgres;

--
-- Name: files; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.files (
    id uuid NOT NULL,
    user_id integer,
    path character varying(255) DEFAULT ''::character varying,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public.files OWNER TO postgres;

--
-- Name: surveys; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.surveys (
    id uuid NOT NULL,
    user_id uuid,
    gender character varying(255),
    english_level character varying(255),
    coding_learn character varying(255),
    education_level character varying(255),
    salary integer,
    bonus integer,
    currency character varying(255),
    title character varying(255),
    level character varying(255),
    total_xp double precision,
    at_company_xp double precision,
    company character varying(255),
    company_location character varying(255),
    company_bussines character varying(255),
    compensation character varying(255),
    email character varying(255),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public.surveys OWNER TO postgres;

--
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    id uuid NOT NULL,
    name character varying(255) DEFAULT ''::character varying,
    last_name character varying(255) DEFAULT ''::character varying,
    username character varying(255) NOT NULL,
    password character varying(255) NOT NULL,
    email character varying(255) NOT NULL
);


ALTER TABLE public.users OWNER TO postgres;

--
-- Data for Name: SequelizeMeta; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."SequelizeMeta" (name) FROM stdin;
20211020015749-create-users.js
20211025223132-create-files.js
20211027211233-create-survey.js
\.


--
-- Data for Name: files; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.files (id, user_id, path, "createdAt", "updatedAt") FROM stdin;
\.


--
-- Data for Name: surveys; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.surveys (id, user_id, gender, english_level, coding_learn, education_level, salary, bonus, currency, title, level, total_xp, at_company_xp, company, company_location, company_bussines, compensation, email, "createdAt", "updatedAt") FROM stdin;
b83f9bca-9979-4cb7-8cb5-dc36bf88e6ea	\N	Male	C1	\N	Bootcamp	4000	3000	USD	Data Scientist	L3	3	2	PANDEV	Colombia	\N	Additional vacations	\N	2021-10-29 10:32:05.156-05	2021-10-29 10:51:27.549-05
63e65b55-5040-4935-9324-0945f9260ea2	\N	Male	C1	\N	Bootcamp	2000	3000	USD	Software Engineer	L1	2	1	PANDEV	Colombia	\N	Additional vacations	\N	2021-10-29 10:32:41.757-05	2021-10-29 10:52:34.904-05
623d7080-763b-46de-8e79-1481a839b7d3	\N	Female	C2	\N	Bootcamp	20000000	15000000	COP	Software Engineer	L3	4	1	PANDEV	Colombia	\N	Additional vacations	\N	2021-10-29 10:33:10.738-05	2021-10-29 10:54:01.297-05
57b0f542-5613-4118-9ccb-1baff93ec8cb	\N	Female	C2	\N	University	5000000	2000000	COP	Software Engineer	L3	4	1	Mercado Libre	Colombia	\N	Personal Performance Bonus	\N	2021-10-29 10:33:53.767-05	2021-10-29 10:54:51.493-05
ad0eac2e-42d5-4fd9-8e2f-28ce4f6e68f5	\N	Male	C1	\N	University	1600	600	USD	Software Engineer	L0	1	1	Mercado Libre	Colombia	\N	Personal Performance Bonus	\N	2021-10-29 10:34:38.01-05	2021-10-29 10:55:44.225-05
603205d8-fc06-4394-a8d3-0a4172e7378a	\N	Male	B1	\N	University	1400	600	USD	Software Engineer	L0	1	0	Mercado Libre	Colombia	\N	Personal Performance Bonus	\N	2021-10-29 10:34:56.383-05	2021-10-29 10:55:55.049-05
1fb50ac0-a332-4bcf-9020-05dfef613a37	\N	Male	B1	\N	University	1400	600	USD	Software Engineer	L0	1	0	Analiza	Colombia	\N	Referral bonus	\N	2021-10-29 10:36:02.608-05	2021-10-29 10:56:05.599-05
f05db752-35a4-4d92-908c-a9f702a2552f	\N	Male	B2	\N	High School	1800	200	USD	FrontEnd Developerr	L1	2	0	Analiza	Colombia	\N	Referral bonus	\N	2021-10-29 10:36:45.743-05	2021-10-29 10:56:14.644-05
2a8f3337-326c-4181-a96f-e00d1bdd2e33	\N	Female	None	\N	High School	4800000	2000000	COP	FrontEnd Developerr	L1	2	0	Analiza	Colombia	\N	Referral bonus	\N	2021-10-29 10:37:08.722-05	2021-10-29 10:57:18.312-05
e8f930ce-c668-4279-a90a-b84ee40de34a	\N	Male	C1	\N	University	7700000	10000000	COP	Software Engineer	L2	3	1	Exito.com	Colombia	\N	Stores Discounts	\N	2021-10-29 15:44:17.505-05	2021-10-29 15:44:17.505-05
6e78c33b-ea92-4b73-b44b-73a5931b92de	\N	Male	B2	\N	University	12000000	11000000	COP	Software Engineer	L4	6	3	Exito.com	Colombia	\N	Stores Discounts	\N	2021-10-29 15:44:57.802-05	2021-10-29 15:44:57.802-05
40f15230-94f1-4b17-9737-bc04392c3a13	\N	Female	B2	\N	Bootcamp	10000000	8000000	COP	Software Engineer	L3	4	1	Exito.com	Colombia	\N	Stores Discounts	\N	2021-10-29 15:45:45.22-05	2021-10-29 15:45:45.22-05
0c7d43f1-1c67-4a75-84b9-bc57bbcfcc28	\N	Male	B2	\N	University	15000000	10000000	COP	Danta Scientist	L5	6	3	Exito.com	Colombia	\N	Stores Discounts	\N	2021-10-29 15:46:30.911-05	2021-10-29 15:46:30.911-05
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (id, name, last_name, username, password, email) FROM stdin;
\.


--
-- Name: SequelizeMeta SequelizeMeta_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."SequelizeMeta"
    ADD CONSTRAINT "SequelizeMeta_pkey" PRIMARY KEY (name);


--
-- Name: files files_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.files
    ADD CONSTRAINT files_pkey PRIMARY KEY (id);


--
-- Name: surveys surveys_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.surveys
    ADD CONSTRAINT surveys_pkey PRIMARY KEY (id);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

