--
-- PostgreSQL database dump
--

-- Dumped from database version 12.9 (Ubuntu 12.9-2.pgdg20.04+1)
-- Dumped by pg_dump version 12.9 (Ubuntu 12.9-2.pgdg20.04+1)

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

DROP DATABASE worldcup;
--
-- Name: worldcup; Type: DATABASE; Schema: -; Owner: freecodecamp
--

CREATE DATABASE worldcup WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'C.UTF-8' LC_CTYPE = 'C.UTF-8';


ALTER DATABASE worldcup OWNER TO freecodecamp;

\connect worldcup

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
-- Name: games; Type: TABLE; Schema: public; Owner: freecodecamp
--

CREATE TABLE public.games (
    game_id integer NOT NULL,
    year integer NOT NULL,
    round character varying NOT NULL,
    winner_id integer NOT NULL,
    opponent_id integer NOT NULL,
    winner_goals integer NOT NULL,
    opponent_goals integer NOT NULL
);


ALTER TABLE public.games OWNER TO freecodecamp;

--
-- Name: games_game_id_seq; Type: SEQUENCE; Schema: public; Owner: freecodecamp
--

CREATE SEQUENCE public.games_game_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.games_game_id_seq OWNER TO freecodecamp;

--
-- Name: games_game_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: freecodecamp
--

ALTER SEQUENCE public.games_game_id_seq OWNED BY public.games.game_id;


--
-- Name: teams; Type: TABLE; Schema: public; Owner: freecodecamp
--

CREATE TABLE public.teams (
    team_id integer NOT NULL,
    name character varying(50) NOT NULL
);


ALTER TABLE public.teams OWNER TO freecodecamp;

--
-- Name: teams_team_id_seq; Type: SEQUENCE; Schema: public; Owner: freecodecamp
--

CREATE SEQUENCE public.teams_team_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.teams_team_id_seq OWNER TO freecodecamp;

--
-- Name: teams_team_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: freecodecamp
--

ALTER SEQUENCE public.teams_team_id_seq OWNED BY public.teams.team_id;


--
-- Name: games game_id; Type: DEFAULT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.games ALTER COLUMN game_id SET DEFAULT nextval('public.games_game_id_seq'::regclass);


--
-- Name: teams team_id; Type: DEFAULT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.teams ALTER COLUMN team_id SET DEFAULT nextval('public.teams_team_id_seq'::regclass);


--
-- Data for Name: games; Type: TABLE DATA; Schema: public; Owner: freecodecamp
--

INSERT INTO public.games VALUES (333, 2018, 'Final', 1194, 1195, 4, 2);
INSERT INTO public.games VALUES (334, 2018, 'Third Place', 1196, 1197, 2, 0);
INSERT INTO public.games VALUES (335, 2018, 'Semi-Final', 1195, 1197, 2, 1);
INSERT INTO public.games VALUES (336, 2018, 'Semi-Final', 1194, 1196, 1, 0);
INSERT INTO public.games VALUES (337, 2018, 'Quarter-Final', 1195, 1198, 3, 2);
INSERT INTO public.games VALUES (338, 2018, 'Quarter-Final', 1197, 1199, 2, 0);
INSERT INTO public.games VALUES (339, 2018, 'Quarter-Final', 1196, 1200, 2, 1);
INSERT INTO public.games VALUES (340, 2018, 'Quarter-Final', 1194, 1201, 2, 0);
INSERT INTO public.games VALUES (341, 2018, 'Eighth-Final', 1197, 1202, 2, 1);
INSERT INTO public.games VALUES (342, 2018, 'Eighth-Final', 1199, 1203, 1, 0);
INSERT INTO public.games VALUES (343, 2018, 'Eighth-Final', 1196, 1204, 3, 2);
INSERT INTO public.games VALUES (344, 2018, 'Eighth-Final', 1200, 1205, 2, 0);
INSERT INTO public.games VALUES (345, 2018, 'Eighth-Final', 1195, 1206, 2, 1);
INSERT INTO public.games VALUES (346, 2018, 'Eighth-Final', 1198, 1207, 2, 1);
INSERT INTO public.games VALUES (347, 2018, 'Eighth-Final', 1201, 1208, 2, 1);
INSERT INTO public.games VALUES (348, 2018, 'Eighth-Final', 1194, 1209, 4, 3);
INSERT INTO public.games VALUES (349, 2014, 'Final', 1210, 1209, 1, 0);
INSERT INTO public.games VALUES (350, 2014, 'Third Place', 1211, 1200, 3, 0);
INSERT INTO public.games VALUES (351, 2014, 'Semi-Final', 1209, 1211, 1, 0);
INSERT INTO public.games VALUES (352, 2014, 'Semi-Final', 1210, 1200, 7, 1);
INSERT INTO public.games VALUES (353, 2014, 'Quarter-Final', 1211, 1212, 1, 0);
INSERT INTO public.games VALUES (354, 2014, 'Quarter-Final', 1209, 1196, 1, 0);
INSERT INTO public.games VALUES (355, 2014, 'Quarter-Final', 1200, 1202, 2, 1);
INSERT INTO public.games VALUES (356, 2014, 'Quarter-Final', 1210, 1194, 1, 0);
INSERT INTO public.games VALUES (357, 2014, 'Eighth-Final', 1200, 1213, 2, 1);
INSERT INTO public.games VALUES (358, 2014, 'Eighth-Final', 1202, 1201, 2, 0);
INSERT INTO public.games VALUES (359, 2014, 'Eighth-Final', 1194, 1214, 2, 0);
INSERT INTO public.games VALUES (360, 2014, 'Eighth-Final', 1210, 1215, 2, 1);
INSERT INTO public.games VALUES (361, 2014, 'Eighth-Final', 1211, 1205, 2, 1);
INSERT INTO public.games VALUES (362, 2014, 'Eighth-Final', 1212, 1216, 2, 1);
INSERT INTO public.games VALUES (363, 2014, 'Eighth-Final', 1209, 1203, 1, 0);
INSERT INTO public.games VALUES (364, 2014, 'Eighth-Final', 1196, 1217, 2, 1);


--
-- Data for Name: teams; Type: TABLE DATA; Schema: public; Owner: freecodecamp
--

INSERT INTO public.teams VALUES (1194, 'France');
INSERT INTO public.teams VALUES (1195, 'Croatia');
INSERT INTO public.teams VALUES (1196, 'Belgium');
INSERT INTO public.teams VALUES (1197, 'England');
INSERT INTO public.teams VALUES (1198, 'Russia');
INSERT INTO public.teams VALUES (1199, 'Sweden');
INSERT INTO public.teams VALUES (1200, 'Brazil');
INSERT INTO public.teams VALUES (1201, 'Uruguay');
INSERT INTO public.teams VALUES (1202, 'Colombia');
INSERT INTO public.teams VALUES (1203, 'Switzerland');
INSERT INTO public.teams VALUES (1204, 'Japan');
INSERT INTO public.teams VALUES (1205, 'Mexico');
INSERT INTO public.teams VALUES (1206, 'Denmark');
INSERT INTO public.teams VALUES (1207, 'Spain');
INSERT INTO public.teams VALUES (1208, 'Portugal');
INSERT INTO public.teams VALUES (1209, 'Argentina');
INSERT INTO public.teams VALUES (1210, 'Germany');
INSERT INTO public.teams VALUES (1211, 'Netherlands');
INSERT INTO public.teams VALUES (1212, 'Costa Rica');
INSERT INTO public.teams VALUES (1213, 'Chile');
INSERT INTO public.teams VALUES (1214, 'Nigeria');
INSERT INTO public.teams VALUES (1215, 'Algeria');
INSERT INTO public.teams VALUES (1216, 'Greece');
INSERT INTO public.teams VALUES (1217, 'United States');


--
-- Name: games_game_id_seq; Type: SEQUENCE SET; Schema: public; Owner: freecodecamp
--

SELECT pg_catalog.setval('public.games_game_id_seq', 364, true);


--
-- Name: teams_team_id_seq; Type: SEQUENCE SET; Schema: public; Owner: freecodecamp
--

SELECT pg_catalog.setval('public.teams_team_id_seq', 1217, true);


--
-- Name: games games_pkey; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.games
    ADD CONSTRAINT games_pkey PRIMARY KEY (game_id);


--
-- Name: teams teams_name_key; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.teams
    ADD CONSTRAINT teams_name_key UNIQUE (name);


--
-- Name: teams teams_pkey; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.teams
    ADD CONSTRAINT teams_pkey PRIMARY KEY (team_id);


--
-- Name: games games_opponent_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.games
    ADD CONSTRAINT games_opponent_id_fkey FOREIGN KEY (opponent_id) REFERENCES public.teams(team_id);


--
-- Name: games games_winner_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.games
    ADD CONSTRAINT games_winner_id_fkey FOREIGN KEY (winner_id) REFERENCES public.teams(team_id);


--
-- PostgreSQL database dump complete
--

