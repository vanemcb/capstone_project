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
-- Name: surveys; Type: TABLE; Schema: public; Owner: postgres
--
CREATE TABLE public.surveys (
    id integer NOT NULL,
    uuid uuid,
    gender character varying(64) NOT NULL,
    english_level character varying(64),
    coding_learn character varying(255),
    education_level character varying(255),
    salary integer NOT NULL,
    bonus integer NOT NULL,
    currency character varying(128) NOT NULL,
    title character varying(255) NOT NULL,
    level character varying(32) NOT NULL,
    total_xp double precision NOT NULL,
    at_company_xp double precision NOT NULL,
    company character varying(255) NOT NULL,
    company_location character varying(255) NOT NULL,
    company_bussines character varying(255),
    compensation character varying(1024),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
ALTER TABLE public.surveys OWNER TO postgres;
--
-- Name: surveys_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--
CREATE SEQUENCE public.surveys_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER TABLE public.surveys_id_seq OWNER TO postgres;
--
-- Name: surveys_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--
ALTER SEQUENCE public.surveys_id_seq OWNED BY public.surveys.id;
--
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--
CREATE TABLE public.users (
    id integer NOT NULL,
    uuid uuid,
    name character varying(255) DEFAULT ''::character varying,
    last_name character varying(255) DEFAULT ''::character varying,
    username character varying(255) NOT NULL,
    password character varying(255) NOT NULL,
    email character varying(255) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
ALTER TABLE public.users OWNER TO postgres;
--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--
CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER TABLE public.users_id_seq OWNER TO postgres;
--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--
ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;
--
-- Name: surveys id; Type: DEFAULT; Schema: public; Owner: postgres
--
ALTER TABLE ONLY public.surveys ALTER COLUMN id SET DEFAULT nextval('public.surveys_id_seq'::regclass);
--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: postgres
--
ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);
--
-- Data for Name: SequelizeMeta; Type: TABLE DATA; Schema: public; Owner: postgres
--
COPY public."SequelizeMeta" (name) FROM stdin;
20211020015518-create-survey.js
20211020015749-create-users.js
\.
--
-- Data for Name: surveys; Type: TABLE DATA; Schema: public; Owner: postgres
--
COPY public.surveys (id, uuid, gender, english_level, coding_learn, education_level, salary, bonus, currency, title, level, total_xp, at_company_xp, company, company_location, company_bussines, compensation, "createdAt", "updatedAt") FROM stdin;
4	d7adeaa5-4566-4a66-b3f4-a025fbe744c5	Female	C2	\N	University Degree	5000	2000	USD	Software Engineer	L3	4	1	Mercado Libre	Colombia	Colombia	\N	16:01.4	07:31.4
7	0386fde2-2fd3-429b-9c0b-27cac5c98faa	Male	B2	\N	University degree	3500	800	USD	Software Engineer	L1	2	1	PANDEV	Colombia	\N	Equity pay	49:15.1	49:15.1
8	7f403f84-e987-4451-b2ac-5959380d6588	Male	B2	\N	Bootcamp	3000	400	USD	Software Engineer	L1	2	1	PANDEV	Colombia	\N	OTHER:	49:49.7	49:49.7
9	bd42b856-2eb5-420f-9e25-a4337463dd34	Female	C1	\N	Bootcamp	3600	400	USD	Software Engineer	L1	2	1	PANDEV	Latin America (other than Colombia)	\N	\N	51:02.7	51:02.7
10	742a9d57-506b-4ec9-ac2a-3c4b40d1a57f	Female	C2	\N	Bootcamp	6600	1000	USD	Software Engineer	L4	5	1	PANDEV	Colombia	\N	Payed Education	51:46.1	51:46.1
11	c9f0882d-031d-407a-a30d-39d39dc69a3c	Male	C2	\N	University Degree	7000	1000	USD	Software Engineer	L4	6	2	PANDEV	Colombia	\N	\N	52:18.9	52:18.9
12	611785ef-1935-4d51-8797-3d2533778682	Male	C2	\N	University Degree	8000	3000	USD	Software Engineer	L5	8	4	PANDEV	Colombia	\N	Equity pay	53:24.9	53:24.9
13	0bb2b9b3-152f-4d55-a6ea-7c32a3542d46	Male	C2	\N	University Degree	10000	3000	USD	Software Engineer	L5	7	3	Mercado Libre	Canada	\N	Vehicle allowance	54:01.4	54:01.4
14	c031b4f0-bf14-4afa-8336-18877d2639ac	Male	C2	\N	Bootcamp	1500	500	USD	Software Engineer	L0	0	0	Mercado Libre	Colombia	\N	Payed Education	54:56.5	54:56.5
15	b0efc80d-f8b1-4489-a56d-1bc40411bda9	Female	C2	\N	Bootcamp	2200	1000	USD	Software Engineer	L1	2	1	Mercado Libre	Colombia	\N	\N	55:36.2	55:36.2
16	b8387890-a334-4a3b-be88-b63f6d2401ef	Female	B2	\N	Bootcamp	3200	1000	USD	Software Engineer	L2	4	1	Mercado Libre	Colombia	\N	Payed Education	56:04.4	56:04.4
17	28a24776-b170-437d-b20e-a5e8a012bafa	Male	B2	\N	Bootcamp	4200	1000	USD	Software Engineer	L3	4	1	Mercado Libre	Colombia	\N	\N	56:22.4	56:22.4
18	d282d6ba-3b8f-4c46-a2eb-bf131f6bc825	Female	C2	\N	University Degree	10500	4000	USD	Software Engineer	L5	10	1	Mercado Libre	Colombia	\N	\N	57:30.8	57:30.8
19	d02cd4e5-5223-402c-9951-94c9cac6c7f7	Female	C2	\N	University Degree	8500	2000	USD	Software Engineer	L5	8	3	Actualiza	Colombia	\N	OTHER:	58:22.8	58:22.8
20	1ef40c32-169b-4f95-b020-6f8961ba04cb	Male	C2	\N	University Degree	5500	2000	USD	Software Engineer	L4	6	2	Actualiza	Colombia	\N	Vehicle allowance	58:48.3	58:48.3
21	81956b10-d52c-4454-a79c-f1c3ce441331	Prefer not to say	C2	\N	University Degree	4500	2000	USD	Software Engineer	L3	5	2	Actualiza	Latin America (other than Colombia)	\N	Payed Education	59:02.4	59:02.4
22	738d4292-991a-49cc-81aa-acb179c83c55	Male	C1	\N	University Degree	4500	2000	USD	Software Engineer	L3	6	1	Actualiza	Colombia	\N	\N	59:14.6	59:14.6
23	f15150e7-8161-42af-ab50-b09a1000622e	Male	C1	\N	University Degree	800	800	USD	Software Engineer	L0	0	0	Actualiza	Colombia	\N	\N	59:39.2	59:39.2
24	7f509408-9572-40b8-8c2a-8fcbf1a8eac8	Female	C1	\N	Bootcamp	800	800	USD	Software Engineer	L0	0	0	Actualiza	Colombia	\N	Payed Education	59:54.3	59:54.3
25	65ed0602-cdfd-4f69-971d-36ddaef6671e	Female	C1	\N	Bootcamp	1800	1000	USD	Software Engineer	L1	2	0	Actualiza	Colombia	\N	\N	00:27.3	00:27.3
26	1bea8576-1673-41db-96e5-4d06f9ab4fb7	Male	C2	\N	Bootcamp	2000	1000	USD	Software Engineer	L1	2	1	Actualiza	Colombia	\N	Equity pay	00:45.6	00:45.6
27	54c5c131-f5c4-4379-8a4f-73be4bc3a7ca	Male	C2	\N	Bootcamp	8000	1000	USD	Data Scientist	L2	4	1	PANDEV	Canada	\N	\N	53:11.6	53:11.6
28	04e53941-904c-4fcc-8f33-ca496d47f8ca	Female	C2	\N	University Degree	8000	1000	USD	Data Scientist	L2	4	1	PANDEV	Colombia	\N	\N	02:25.5	02:25.5
29	e5208cda-3f78-4e93-baa3-281ece592d98	Female	C2	\N	University Degree	8000	1000	USD	Data Scientist	L2	4	1	PANDEV	Colombia	\N	\N	03:26.6	03:26.6
30	00ef6c32-849e-4fa6-b244-c001101424e8	Female	C2	\N	University Degree	8000	1000	USD	Data Scientist	L2	4	1	PANDEV	Colombia	\N	Additional Vacations	05:31.3	05:31.3
31	04b3021e-820c-4ef8-8d4b-9159fff723ba	Male	C2	\N	University Degree	5500	5000	USD	Software Engineer	L5	4	3	PANDEV	PANDEV	\N	Health insurance	16:37.6	16:37.6
32	d7adeaa5-4566-4a66-b3f4-a045fbe744c5	Female	C2	\N	University Degree	5000	5000	USD	DevOps	L3	4	1	Mercado Libre	Colombia	\N	Health insurance	16:01.4	07:31.4
33	0386fde2-2fd3-4h9b-9c0b-27cac5c98faa	Male	C2	\N	University degree	2000	2000	USD	Software Engineer	L1	2	1	Mercado Libre	Colombia	\N	Personal Performance bonus	49:15.1	49:15.1
34	7f403f84-e987-3451-b2ac-5959380d6588	Male	C2	\N	University Degree	2000	2000	USD	DevOps	L1	2	1	PANDEV	Colombia	\N	Additional vacation days	49:49.7	49:49.7
35	bd42b856-2eb5-420f-9e25-a4337763dd34	Other	C2	\N	Bootcamp	2200	2200	USD	Web Development	L1	2	1	Mercado Libre	Colombia	\N	Personal Performance bonus	51:02.7	51:02.7
36	742a9d57-506b-4et9-ac2a-3c4b40d1a57f	Male	C2	\N	Bootcamp	4200	4000	USD	Software Engineer	L4	5	1	PANDEV	Colombia	\N	Life Insurance	51:46.1	51:46.1
37	c9f0882d-031d-407a-a30d-39d31dc69a3c	Male	C2	\N	High Schoole	4600	4000	USD	Software Engineer	L4	6	2	Actualiza	Colombia	\N	Additional vacation days	52:18.9	52:18.9
38	611715ef-1935-4d51-8797-3d2533778682	Female	C2	\N	University Degree	7800	7000	USD	Software Engineer	L5	8	4	Mercado Libre	Colombia	\N	Vehicle allowance	53:24.9	53:24.9
39	0bb2b9b3-152f-4d15-a6ea-7c32a3542d46	Male	C2	\N	University Degree	9100	7000	USD	Web Development	L5	7	3	PANDEV	Colombia	\N	Life Insurance	54:01.4	54:01.4
40	c031b4f0-bf14-4afa-8336-18177d2639ac	Male	C2	\N	Bootcamp	1200	1000	USD	Software Engineer	L0	0	0	Mercado Libre	Colombia	\N	Payed Education	54:56.5	54:56.5
41	b0efc80d-f8b1-4489-a56d-1bc40111bda9	Non Binary	C2	\N	University Degree	2000	2000	USD	DevOps	L1	2	1	Actualiza	Colombia	\N	Personal Performance bonus	55:36.2	55:36.2
42	b8387890-a334-4a3b-be88-b61f6d2401ef	Female	C2	\N	Bootcamp	3300	2000	USD	Software Engineer	L2	4	1	PANDEV	Colombia	\N	Life Insurance	56:04.4	56:04.4
43	28a24776-b170-437d-b20e-a5e1a012bafa	Male	C2	\N	High School	5500	1000	USD	Web Development	L3	4	1	Mercado Libre	Colombia	\N	Health insurance	56:22.4	56:22.4
44	d282d6ba-3b8f-4c46-a2eb-bf131f6bc125	Female	C2	\N	University Degree	9900	7000	USD	Software Engineer	L5	10	1	Mercado Libre	Colombia	\N	Payed Education	57:30.8	57:30.8
45	d02cd4e5-5223-402c-9151-94c9cac6c7f7	Female	C2	\N	High School	9100	7000	USD	Software Engineer	L5	8	3	Actualiza	Colombia	\N	Personal Performance bonus	58:22.8	58:22.8
46	1ef40c32-169b-4f95-b010-6f8961ba04cb	Male	C2	\N	University Degree	5500	2000	USD	Software Engineer	L4	6	2	Actualiza	Colombia	\N	Payed Education	58:48.3	58:48.3
47	81956b10-d52c-4454-a19c-f1c3ce441331	Male	C2	\N	University Degree	4500	2000	USD	DevOps	L3	5	2	Mercado Libre	Colombia	\N	Payed Education	59:02.4	59:02.4
48	738d4292-991a-49cc-11aa-acb179c83c55	Female	C1	\N	High School	4500	2000	USD	Software Engineer	L3	6	1	Actualiza	Colombia	\N	Health insurance	59:14.6	59:14.6
49	f15150e7-8161-42af-ab50-b09a1000622e	Male	C1	\N	University Degree	800	800	USD	Web Development	L0	0	0	PANDEV	Latin America (other than Colombia)	\N	Equity pay	59:39.2	59:39.2
50	7f501408-9572-40b8-8c2a-8fcbf1a8eac8	Female	C1	\N	Bootcamp	800	800	USD	Software Engineer	L0	0	0	Actualiza	Colombia	\N	Additional vacation days	59:54.3	59:54.3
51	65ed0102-cdfd-4f69-971d-36ddaef6671e	Prefer not to say	C1	\N	University Degree	1800	1000	USD	Software Engineer	L1	2	0	PANDEV	Colombia	\N	Health insurance	00:27.3	00:27.3
52	1bea8516-1673-41db-96e5-4d06f9ab4fb7	Male	C1	\N	High School	2000	1000	USD	DevOps	L1	2	1	Mercado Libre	Canada	\N	Personal Performance bonus	00:45.6	00:45.6
53	54c5c131-f5c4-4379-8a4f-71be4bc3a7ca	Male	B2	\N	Self-Study	3800	1000	USD	Data Scientist	L2	4	1	PANDEV	Colombia	\N	Life Insurance	53:11.6	53:11.6
54	04e53941-904c-4fcc-8f13-ca496d47f8ca	Male	B2	\N	University Degree	4000	1000	USD	Web Development	L2	4	1	Mercado Libre	Colombia	\N	Personal Performance bonus	02:25.5	02:25.5
55	e5208cda-3f71-4e93-baa3-281ece592d98	Female	B2	\N	High School	3300	1000	USD	DevOps	L2	4	1	PANDEV	Colombia	\N	Health insurance	03:26.6	03:26.6
56	00ef6c32-819e-4fa6-b244-c001101424e8	Female	B2	\N	University Degree	3000	1000	USD	Data Scientist	L2	4	1	Actualiza	Colombia	\N	Additional Vacations	05:31.3	05:31.3
57	04b3021e-820c-4ef8-8d4b-9159fff723ba	Male	C2	\N	University Degree	5500	5000	USD	Software Engineer	L5	4	3	Mercado Libre	PANDEV	\N	Vehicle allowance	16:37.6	16:37.6
58	d7adeaa5-4566-4a66-b3f4-a045fbe744c5	Female	C2	\N	University Degree	5000	5000	USD	Data Scientist	L2	3	2	Mercado Libre	Colombia	\N	Health insurance	16:01.4	07:31.4
59	0386fde2-2fd3-4h9b-9c0b-23cac5c98faa	Male	C2	\N	University degree	2000	2000	USD	Software Engineer	L1	2	1	Mercado Libre	Colombia	\N	Personal Performance bonus	49:15.1	49:15.1
60	7f403f84-e987-3451-b2ac-5939380d6588	Male	C2	\N	University Degree	2000	2000	USD	DevOps	L1	2	1	PANDEV	Colombia	\N	Additional vacation days	49:49.7	49:49.7
61	bd42b856-2eb5-320f-9e25-a4337763dd34	Other	C2	\N	Bootcamp	2200	2200	USD	Web Development	L1	2	1	Mercado Libre	Latin America (other than Colombia)	\N	Relocation allowance	51:02.7	51:02.7
62	742a9d57-506b-3et9-ac2a-3c4b40d1a57f	Male	C2	\N	Bootcamp	4200	4000	USD	Software Engineer	L4	5	1	PANDEV	Colombia	\N	Life Insurance	51:46.1	51:46.1
63	c9f0882d-031d-307a-a30d-39d31dc69a3c	Male	C2	\N	High Schoole	4600	4000	USD	Full Stack	L4	6	2	Actualiza	Colombia	\N	Additional vacation days	52:18.9	52:18.9
64	611715ef-1935-3d51-8797-3d2533778682	Female	C1	\N	University Degree	7800	7000	USD	Software Engineer	L5	8	4	Mercado Libre	Colombia	\N	Health insurance	53:24.9	53:24.9
65	0bb2b9b3-152f-3d15-a6ea-7c32a3542d46	Male	C1	\N	University Degree	9100	7000	USD	Web Development	L5	7	3	PANDEV	Colombia	\N	Life Insurance	54:01.4	54:01.4
66	c031b4f0-bf14-3afa-8336-18177d2639ac	Male	B2	\N	Bootcamp	1200	1000	USD	Software Engineer	L0	0	0	Mercado Libre	Colombia	\N	Health insurance	54:56.5	54:56.5
67	b0efc80d-f8b1-3489-a56d-1bc40111bda9	Non Binary	C2	\N	University Degree	2000	2000	USD	DevOps	L1	2	1	Actualiza	Colombia	\N	Personal Performance bonus	55:36.2	55:36.2
68	b8387890-a334-3a3b-be88-b61f6d2401ef	Female	C2	\N	Bootcamp	3300	2000	USD	Software Engineer	L2	4	1	PANDEV	Colombia	\N	Life Insurance	56:04.4	56:04.4
69	28a24776-b170-337d-b20e-a5e1a012bafa	Male	C2	\N	High School	5500	1000	USD	Web Development	L3	4	1	Mercado Libre	Colombia	\N	Health insurance	56:22.4	56:22.4
70	d282d6ba-3b8f-3c46-a2eb-bf131f6bc125	Female	C2	\N	University Degree	9900	7000	USD	Software Engineer	L5	10	1	PANDEV	Colombia	\N	Payed Education	57:30.8	57:30.8
71	d02cd4e5-5223-302c-9151-94c9cac6c7f7	Female	C2	\N	High School	9100	7000	USD	Software Engineer	L5	8	3	Actualiza	Colombia	\N	Personal Performance bonus	58:22.8	58:22.8
72	1ef40c32-169b-3f95-b010-6f8961ba04cb	Male	C1	\N	University Degree	5500	2000	USD	Full Stack	L4	6	2	Mercado Libre	Colombia	\N	Payed Education	58:48.3	58:48.3
73	81956b10-d52c-3454-a19c-f1c3ce441331	Prefer not to say	C1	\N	University Degree	4500	2000	USD	DevOps	L3	5	2	PANDEV	Colombia	\N	Payed Education	59:02.4	59:02.4
74	738d4292-991a-39cc-11aa-acb179c83c55	Female	B2	\N	High School	4500	2000	USD	Software Engineer	L3	6	1	Actualiza	Colombia	\N	Health insurance	59:14.6	59:14.6
75	f15150e7-8161-32af-ab50-b09a1000622e	Male	None	\N	University Degree	800	800	USD	Web Development	L0	0	0	PANDEV	Colombia	\N	Personal Performance bonus	59:39.2	59:39.2
76	7f501408-9572-30b8-8c2a-8fcbf1a8eac8	Female	C1	\N	Bootcamp	800	800	USD	Software Engineer	L0	0	0	Actualiza	Colombia	\N	Additional vacation days	59:54.3	59:54.3
77	65ed0102-cdfd-3f69-971d-36ddaef6671e	Female	C1	\N	University Degree	1800	1000	USD	Full Stack	L1	2	0	PANDEV	Latin America (other than Colombia)	\N	Relocation allowance	00:27.3	00:27.3
78	1bea8516-1673-31db-96e5-4d06f9ab4fb7	Male	C1	\N	High School	2000	1000	USD	DevOps	L1	2	1	Mercado Libre	Colombia	\N	Equity pay	00:45.6	00:45.6
79	54c5c131-f5c4-3379-8a4f-71be4bc3a7ca	Male	B2	\N	Bootcamp	3800	1000	USD	Data Scientist	L2	4	1	Actualiza	Colombia	\N	Payed Education	53:11.6	53:11.6
80	04e53941-904c-3fcc-8f13-ca496d47f8ca	Male	B2	\N	University Degree	4000	1000	USD	Web Development	L2	4	1	PANDEV	Colombia	\N	Personal Performance bonus	02:25.5	02:25.5
81	e5208cda-3f71-3e93-baa3-281ece592d98	Female	B2	\N	High School	3300	1000	USD	DevOps	L2	4	1	Mercado Libre	Colombia	\N	Health insurance	03:26.6	03:26.6
82	04b3021e-820c-3ef8-8d4b-9159fff723ba	Male	C2	\N	Self-Study	5500	5000	USD	Software Engineer	L5	4	3	Mercado Libre	PANDEV	\N	Payed Education	16:37.6	16:37.6
83	d7adeaa5-4566-3a36-b3f4-a045fbe744c5	Female	C2	\N	University Degree	5000	5000	USD	Full Stack	L3	4	1	Actualiza	Colombia	\N	Health insurance	16:01.4	07:31.4
84	0386fde2-2fd3-3h3b-9c0b-27cac5c98faa	Male	C2	\N	University degree	2000	2000	USD	Software Engineer	L1	2	1	Actualiza	Colombia	\N	Club Membership	49:15.1	49:15.1
85	7f403f84-e987-3351-b2ac-5359380d6588	Male	C2	\N	University Degree	2000	2000	USD	DevOps	L1	2	1	PANDEV	Colombia	\N	Additional vacation days	49:49.7	49:49.7
86	bd42b856-2eb5-330f-9e25-a4337733dd34	Other	C2	\N	Bootcamp	2200	2200	USD	Web Development	L1	2	1	Mercado Libre	Colombia	\N	Payed Education	51:02.7	51:02.7
87	742a9d57-306b-4et9-ac2a-3c4b40d1a57f	Male	C1	\N	Bootcamp	4200	4000	USD	Full Stack	L4	5	1	Mercado Libre	Colombia	\N	Life Insurance	51:46.1	51:46.1
88	c9f0882d-331d-407a-a30d-39d31dc69a3c	Male	C1	\N	Self-Study	4600	4000	USD	Software Engineer	L4	6	2	PANDEV	Colombia	\N	Relocation allowance	52:18.9	52:18.9
89	611715ef-1335-4d51-8797-3d2533778682	Female	B2	\N	University Degree	7800	7000	USD	Software Engineer	L5	8	4	Actualiza	Colombia	\N	Health insurance	53:24.9	53:24.9
90	0bb2b9b3-132f-4d15-a6ea-7c32a3542d46	Male	C2	\N	University Degree	9100	7000	USD	Web Development	L5	7	3	PANDEV	Colombia	\N	Vehicle allowance	54:01.4	54:01.4
91	c031b4f0-bf13-4afa-8336-18177d2639ac	Male	C2	\N	Bootcamp	1200	1000	USD	Software Engineer	L0	0	0	Mercado Libre	Colombia	\N	OTHER:	54:56.5	54:56.5
92	b0efc80d-f3b1-4489-a56d-1bc40111bda9	Non Binary	C2	\N	University Degree	2000	2000	USD	DevOps	L1	2	1	Mercado Libre	Colombia	\N	Personal Performance bonus	55:36.2	55:36.2
93	b8387890-a334-4a3b-be88-b61f6d3401ef	Female	C2	\N	Bootcamp	3300	2000	USD	Software Engineer	L2	4	1	Mercado Libre	Colombia	\N	Life Insurance	56:04.4	56:04.4
94	28a24776-b170-437d-b20e-a5e1a032bafa	Male	None	\N	High School	5500	1000	USD	Web Development	L3	4	1	Actualiza	Colombia	\N	Health insurance	56:22.4	56:22.4
95	d282d6ba-3b8f-4c46-a2eb-bf133f6bc125	Prefer not to say	C2	\N	University Degree	10500	9000	USD	Data Scientist	L5	10	1	Actualiza	Colombia	\N	Vehicle allowance	57:30.8	57:30.8
96	d02cd4e5-5223-402c-9151-93c9cac6c7f7	Female	C2	\N	Self-Study	9100	7000	USD	Data Scientist	L5	8	3	PANDEV	Colombia	\N	Payed Education	58:22.8	58:22.8
97	1ef40c32-169b-4f95-b010-6f8963ba04cb	Male	C2	\N	University Degree	5500	2000	USD	Full Stack	L4	6	2	Mercado Libre	Colombia	\N	Payed Education	58:48.3	58:48.3
98	81956b10-d52c-4454-a19c-f1c3ce431331	Male	C2	\N	University Degree	4500	2000	USD	DevOps	L3	5	2	PANDEV	Colombia	\N	OTHER:	59:02.4	59:02.4
99	738d4292-991a-49cc-11aa-acb173c83c55	Female	C1	\N	High School	4500	2000	USD	Software Engineer	L3	6	1	Mercado Libre	Colombia	\N	Relocation allowance	59:14.6	59:14.6
100	f15150e7-8161-42af-ab50-b09a1300622e	Male	None	\N	University Degree	800	800	USD	Web Development	L0	0	0	Mercado Libre	Colombia	\N	Personal Performance bonus	59:39.2	59:39.2
101	7f501408-9572-40b8-8c2a-8fcbf1a3eac8	Female	C1	\N	Bootcamp	800	800	USD	Software Engineer	L0	0	0	PANDEV	Colombia	\N	Additional vacation days	59:54.3	59:54.3
102	65ed0102-cdfd-4f69-971d-36ddaef6371e	Female	B2	\N	University Degree	1800	1000	USD	Software Engineer	L1	2	0	Mercado Libre	Colombia	\N	Health insurance	00:27.3	00:27.3
103	1bea8516-1673-41db-96e5-4d03f9ab4fb7	Male	C1	\N	High School	2000	1000	USD	DevOps	L1	2	1	PANDEV	Colombia	\N	Equity pay	00:45.6	00:45.6
104	54c5c131-f5c4-4379-8a4f-71be3bc3a7ca	Male	B2	\N	Bootcamp	3800	1000	USD	Data Scientist	L2	4	1	Actualiza	Colombia	\N	Payed Education	53:11.6	53:11.6
105	04e53941-904c-4fcc-8f13-ca496d37f8ca	Male	B2	\N	Self-Study	4000	1000	USD	Full Stack	L2	4	1	PANDEV	Colombia	\N	Personal Performance bonus	02:25.5	02:25.5
106	e5208cda-3f71-4e93-baa3-281ece593d98	Female	B2	\N	High School	3300	1000	USD	DevOps	L2	4	1	Mercado Libre	Colombia	\N	Health insurance	03:26.6	03:26.6

\.
--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--
COPY public.users (id, uuid, name, last_name, username, password, email, "createdAt", "updatedAt") FROM stdin;
\.
--
-- Name: surveys_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--
SELECT pg_catalog.setval('public.surveys_id_seq', 30, true);
--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--
SELECT pg_catalog.setval('public.users_id_seq', 1, false);
--
-- Name: SequelizeMeta SequelizeMeta_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--
ALTER TABLE ONLY public."SequelizeMeta"
    ADD CONSTRAINT "SequelizeMeta_pkey" PRIMARY KEY (name);
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