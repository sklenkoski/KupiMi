--
-- PostgreSQL database dump
--

-- Dumped from database version 12.1
-- Dumped by pg_dump version 12.1

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
-- Name: box_promotions; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.box_promotions (
    id character varying(255) NOT NULL,
    long_description character varying(255),
    name character varying(255),
    price integer NOT NULL,
    short_description character varying(255),
    imageurl character varying(255)
);


ALTER TABLE public.box_promotions OWNER TO postgres;

--
-- Name: box_promotions_recipes; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.box_promotions_recipes (
    box_promotion_id character varying(255) NOT NULL,
    recipes_id character varying(255) NOT NULL
);


ALTER TABLE public.box_promotions_recipes OWNER TO postgres;

--
-- Name: orders; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.orders (
    id character varying(255) NOT NULL,
    client_address character varying(255),
    price integer NOT NULL,
    user_email character varying(255),
    date character varying(255)
);


ALTER TABLE public.orders OWNER TO postgres;

--
-- Name: orders_box_promotions; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.orders_box_promotions (
    order_id character varying(255) NOT NULL,
    box_promotions_id character varying(255) NOT NULL
);


ALTER TABLE public.orders_box_promotions OWNER TO postgres;

--
-- Name: orders_recipes; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.orders_recipes (
    order_id character varying(255) NOT NULL,
    recipes_id character varying(255) NOT NULL
);


ALTER TABLE public.orders_recipes OWNER TO postgres;

--
-- Name: recipe_ingredients; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.recipe_ingredients (
    recipe_id character varying(255) NOT NULL,
    ingredients character varying(255)
);


ALTER TABLE public.recipe_ingredients OWNER TO postgres;

--
-- Name: recipe_reviews; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.recipe_reviews (
    recipe_id character varying(255) NOT NULL,
    reviews integer
);


ALTER TABLE public.recipe_reviews OWNER TO postgres;

--
-- Name: recipes; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.recipes (
    id character varying(255) NOT NULL,
    type character varying(255),
    cooking_level character varying(255),
    cooking_time character varying(255),
    description character varying(4096),
    name character varying(255),
    price integer NOT NULL,
    imageurl character varying(255),
    portions character varying(255)
);


ALTER TABLE public.recipes OWNER TO postgres;

--
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    email character varying(255) NOT NULL,
    admin boolean NOT NULL,
    name character varying(255),
    surname character varying(255)
);


ALTER TABLE public.users OWNER TO postgres;

--
-- Data for Name: box_promotions; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.box_promotions (id, long_description, name, price, short_description, imageurl) FROM stdin;
5cc8b7a1-610b-4c99-8f5e-fd53e1e8db0c	Одлична комбинација на вкусови за вашиот ручек. Оваа понуда вклучува 2 паекти состојки за рецептот Шампињони во бело вино  и 1 пакет за Крофни со ванила и шеќер во прав.	Шампињони во бело вино  и крофни со ванила	499	Промотивна цена и одлична комбинација!	https://gotvi.mk/wp-content/uploads/2017/08/karamelizirani-pecurki-printskrin-750x563.jpg
\.


--
-- Data for Name: box_promotions_recipes; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.box_promotions_recipes (box_promotion_id, recipes_id) FROM stdin;
5cc8b7a1-610b-4c99-8f5e-fd53e1e8db0c	648598b8-a261-49f1-a2f3-90ab2cfe2194
5cc8b7a1-610b-4c99-8f5e-fd53e1e8db0c	0d1f346b-8b91-49a8-adc5-44a649ad8738
\.


--
-- Data for Name: orders; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.orders (id, client_address, price, user_email, date) FROM stdin;
1	ul. Proba br 1 Skopje	499	sttestovski@gmail.com	22.10.2020
2	ul. Proba br 1 Skopje	699	sttestovski@gmail.com	22.10.2020
3	ul. Proba br 1 Skopje	699	sttestovski@gmail.com	22.10.2020
4	ul. Proba br 1 Skopje	699	sttestovski@gmail.com	22.10.2020
5	ul. Proba br 1 Skopje	299	sttestovski@gmail.com	22.10.2020
6	ul. Proba br 1 Skopje	899	sttestovski@gmail.com	22.10.2020
7	ul. Test br 2 Skopje	899	sttestovski@gmail.com	22.10.2019
8	ul. Test br 2 Skopje	499	sttestovski@gmail.com	22.10.2019
9	ul. Test br 2 Skopje	599	sttestovski@gmail.com	22.10.2019
10	ul. Test br 2 Skopje	499	sttestovski@gmail.com	22.10.2019
11	ul. Test br 2 Skopje	1099	sttestovski@gmail.com	22.10.2019
12	ul. Test br 2 Skopje	799	sttestovski@gmail.com	22.10.2019
14	ul. Test br 3 Struga	499	sttestovski@gmail.com	20.04.2018
15	ul. Test br 3 Struga	599	sttestovski@gmail.com	20.04.2018
16	ul. Test br 3 Struga	699	sttestovski@gmail.com	20.04.2018
17	ul. Test br 3 Struga	799	sttestovski@gmail.com	20.04.2018
18	ul. Test br 3 Struga	899	sttestovski@gmail.com	20.04.2018
13	ul. Test br 3 Struga	1099	sttestovski@gmail.com	20.04.2018
\.


--
-- Data for Name: orders_box_promotions; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.orders_box_promotions (order_id, box_promotions_id) FROM stdin;
\.


--
-- Data for Name: orders_recipes; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.orders_recipes (order_id, recipes_id) FROM stdin;
\.


--
-- Data for Name: recipe_ingredients; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.recipe_ingredients (recipe_id, ingredients) FROM stdin;
\.


--
-- Data for Name: recipe_reviews; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.recipe_reviews (recipe_id, reviews) FROM stdin;
\.


--
-- Data for Name: recipes; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.recipes (id, type, cooking_level, cooking_time, description, name, price, imageurl, portions) FROM stdin;
0d1f346b-8b91-49a8-adc5-44a649ad8738	lunch-dinner	\N	15 мин 	Состојки:\n½ кг шампињони\n1 шолја бело вино \nмалку магдонос\n1 главица кромид\n1 лажица масло\n2 лажици брашно\n1 шолја вода\n½ лажици кари\nсол\n\n\n    Шампињоните се чистат, мијат у се сечат тенко.\n    На масло се пропржува ситно сецканиот кромид со магдоносот, а потоа се додаваат и печурките.\n    Се динста смесата со постепено додавање на белото вино.\n    На крајот на динстањето се става брашно и кари, малку млака вода и сол.	Деликатес на денот: Шампињони во бело вино 	199	https://gotvi.mk/wp-content/uploads/2017/08/karamelizirani-pecurki-printskrin-750x563.jpg	2 
964ff747-6acb-4dcf-8ff2-a1aea73bd8c6	lunch-dinner	\N	40 мин	Состојки\n    3 поголеми компири\n    150 гр. димена сланина\n    50 гр. печурки\n    3 кисели краставички\n    100 гр. кашкавал\n    3 лажици путер\n\n\n    Се вари компирот со лушпа во солена вода, се лупи само од едната страна потоа и се длаби, па се рамни малку.\n    Се става во средина на секој компир лажица путер и се става смеса од сечена сланина со краставички и печурки со смесата која е издлабена.\n    Се става кашкавал и се печат на загреана рерна на 200 степени додека не се стопи убаво кашкавалот.	Полнети компири со сланина, печурки и кашкавал	259	https://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/10/3/3/FNM_110112-Bacon-Hasselback-Potatoes-Recipe_s4x3.jpg.rend.hgtvcom.826.620.suffix/1444750324808.jpeg	2
648598b8-a261-49f1-a2f3-90ab2cfe2194	breakfast	\N	30 мин	Состојки:\n100 гр пилешко\n2 јајца\n4 ротквици\n1 пиперка\n1 домат\n1/2 свежа краставица\n1 лимон\n1 лажица маслиново масло\n5 маслинки\nсол\n\nПилешкото исечкајте го на ленти или коцки па пропржете го на тава. Оставете да се излади.\n Јајцата згответе ги па исечкајте ги на ситно. Доматот, пиперката и краставицата исечкајте ги и ставете ги во поголем сад. Додајте маслинки, месо и јајца па посипете со цеден сок од лимон и маслиново масло. Посолете по желба.\nДобар апетит!\n	Салата од јајца и пилешко – полна со протеини	149	https://myfoodbook.com.au/sites/default/files/styles/single_recipe/public/recipe_photo/Eggs20171409_0.jpg	2
ac76f279-a2c3-4390-9774-d84fa9847604	lunch-dinner	\N	30 мин	Состојки:\n    бибер\n    200 гр листови кисела зелка\n    600 гр компири\n    2 гр сол\n    400 гр колбаси\n    2 гр зачин\n    Излупете ги компирите и гответе ги во малку вода.\n    Колбасите испечете ги на грил тава од сите страни.\n    Кога ќе бидат готови, сервирајте ги со зелка и варени компири, кои претходно сте ги зачиниле по желба.\n	Колбаси со компири и кисела зелка	459	https://gotvi.mk/wp-content/uploads/2017/02/kolbasi-pixa-750x563.jpg	4
63670f17-b392-4012-9def-1ce00273cbdc	lunch-dinner	\N	30 мин 	Состојки:\n    500 гр. тестенини\n    400 гр. шунка\n    200 гр. шампињони\n    500 мл. млеко\n    100 гр. брашно\n    50 гр. путер\n    100 гр. кашкавал\n    малку сол\n\n\n    Се става путер во тавче и се додава брашно кога ќе се стопи, па се меша 2-3 минути.\n    Се става млекото со мешање постепено, се става сол и рендан кашкавал (може и пармезан).\n    Се мијат и сечат печурките и се динстаат на малку путер.\n    Се редат тестенините сварени во вода во тава за печење, се става шунка сечена, па шампињони, и бешамел.\n    Се печат на 200 степени 10 минути.\n	Печени макарони: Полни шунка, печурки и бешамел 	199	https://food.fnr.sndimg.com/content/dam/images/food/fullset/2011/12/14/0/IL0213Z_bechamel-mac-and-cheese_s4x3.jpg.rend.hgtvcom.616.462.suffix/1371603912021.jpeg	2 
3712e51a-e2a1-40ae-bd10-f0fc5ad3f108	dessert	\N	30 мин  	Состојки:\n\n    3 јајца\n    250 гр. кисело млеко\n    250 гр. брашно\n    1 лажиче сода\n    шеќер во прав за горе, ванила\n    масло за пржење.\n\n    Се матат јајцата со кисело млеко и се додава брашно со сода.\n    Се меша и се добива хомогена смеса.\n    Се загрева масло и се вадат крофни па се пржат.\n    Се сервираат со ванила и шеќер во прав горе. 	Крофни со ванила и шеќер во прав	189	https://gotvi.mk/wp-content/uploads/2016/10/krofni-pixa-750x563.jpg	4 
36597c96-8008-471c-a5d8-5679664888e6	breakfast	\N	20 мин 	Состојки:\n2 јајца\n300 мл. млеко \n300 гр. брашно\n½ лажички сол\n400 гр. спанаќ\n8 јајца за фил\n300 гр. гауда кашкавал\n\n\n    Се мие спанаќот, се обарува 10 минути во солена вода и се цеди, па се пасира.\n    Се матат јајцата со млеко и сол и се додава пирето од спанаќ, со брашно и се меша да се добие тесто.\n    Се пржат палачинките на малку масло во тава.\n    Во истата тава се прават омлети колку што ќе имате палачинки.\n    Се матат добро 2-3 јајца, се ставаат во тавата, се става омлетот вр без да се меша претходно на првата палачинка, а горе гауда.\n    Се витка како ролат и така се прави со сите останати.	Појадок – Палачинки со спанаќ, јајца и гауда 	199	https://fedteam.co.uk/media/1157/447_14498_z.jpg	2 
a6296f8c-9566-4713-ab6d-dd9d9f7cd202	lunch-dinner	\N	150 мин	Состојки:\n    2 кг јагнешко месо (плешка, бут)\n    2 лажици маст\n    сол\n    50-100 мл вода\n    1 кг компири\n    Јагнешкото посолете го добро од сите страни. Добро истријте го месото со сол. Додајте 2 лажици маст, кои исто така ќе ги распоредите по месото. Додајте малку вода од страна.\n    Печете по следниот редослед: на 200 степени – 45 минути. Потоа прелијте со малку вода од тепсијата, па свртете го месото во плехот и додајте компири. Намалете ја температурата на 180 степени, па печете уште 35 минути. Прелијте и свртете и печете уште околу 40 минути.\n	Меко јагнешко во рерна: Велигденски ручек за десетка	959	https://food.fnr.sndimg.com/content/dam/images/food/fullset/2016/2/26/0/FN_Ina-Garten_Herb-Roasted-Lamb-H1_s4x3.jpg.rend.hgtvcom.826.620.suffix/1558026543714.jpeg	4
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (email, admin, name, surname) FROM stdin;
sttestovski@gmail.com	f	test	Testovski
stefanklenkoski@gmail.com	t	Stefan	Klenkoski
testovski@gmail.com	f	test	test
testsnimka@gmail.com	f	Test	Test
testnot@gmail.com	f	testnot	testnot
testettt@gmail.com	f	Najgolem	Testovski
\.


--
-- Name: box_promotions box_promotions_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.box_promotions
    ADD CONSTRAINT box_promotions_pkey PRIMARY KEY (id);


--
-- Name: orders orders_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.orders
    ADD CONSTRAINT orders_pkey PRIMARY KEY (id);


--
-- Name: recipes recipes_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.recipes
    ADD CONSTRAINT recipes_pkey PRIMARY KEY (id);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (email);


--
-- Name: orders_recipes fk56ih8e45xl4bsfp3f00yltdd2; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.orders_recipes
    ADD CONSTRAINT fk56ih8e45xl4bsfp3f00yltdd2 FOREIGN KEY (recipes_id) REFERENCES public.recipes(id);


--
-- Name: orders_box_promotions fkcf5vmo1t9bxgo2u41tvh22l2v; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.orders_box_promotions
    ADD CONSTRAINT fkcf5vmo1t9bxgo2u41tvh22l2v FOREIGN KEY (box_promotions_id) REFERENCES public.box_promotions(id);


--
-- Name: recipe_ingredients fkcqlw8sor5ut10xsuj3jnttkc; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.recipe_ingredients
    ADD CONSTRAINT fkcqlw8sor5ut10xsuj3jnttkc FOREIGN KEY (recipe_id) REFERENCES public.recipes(id);


--
-- Name: box_promotions_recipes fkdoo8hvn23traeos93sicoovb7; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.box_promotions_recipes
    ADD CONSTRAINT fkdoo8hvn23traeos93sicoovb7 FOREIGN KEY (box_promotion_id) REFERENCES public.box_promotions(id);


--
-- Name: orders_box_promotions fkhjfsg699jwyugf0qxdl3wf7kq; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.orders_box_promotions
    ADD CONSTRAINT fkhjfsg699jwyugf0qxdl3wf7kq FOREIGN KEY (order_id) REFERENCES public.orders(id);


--
-- Name: box_promotions_recipes fklcga9608q5nmh47hxbfohwajj; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.box_promotions_recipes
    ADD CONSTRAINT fklcga9608q5nmh47hxbfohwajj FOREIGN KEY (recipes_id) REFERENCES public.recipes(id);


--
-- Name: recipe_reviews fkmpxjhbcgbbre7pnh0l4ppfkib; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.recipe_reviews
    ADD CONSTRAINT fkmpxjhbcgbbre7pnh0l4ppfkib FOREIGN KEY (recipe_id) REFERENCES public.recipes(id);


--
-- Name: orders fkmxobdyrbi5tlk6ajxlnb8iopp; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.orders
    ADD CONSTRAINT fkmxobdyrbi5tlk6ajxlnb8iopp FOREIGN KEY (user_email) REFERENCES public.users(email);


--
-- Name: orders_recipes fksab6vnlnvabftfskvv2duh2ux; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.orders_recipes
    ADD CONSTRAINT fksab6vnlnvabftfskvv2duh2ux FOREIGN KEY (order_id) REFERENCES public.orders(id);


--
-- PostgreSQL database dump complete
--

