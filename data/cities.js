const cities = [
  {
    value: "Abadia Dos Dourados MG",
    label: "Abadia Dos Dourados (MG)",
  },
  {
    value: "Abadia de Goiás GO",
    label: "Abadia de Goiás (GO)",
  },
  {
    value: "Abadiânia GO",
    label: "Abadiânia (GO)",
  },
  {
    value: "Abaetetuba PA",
    label: "Abaetetuba (PA)",
  },
  {
    value: "Abaeté MG",
    label: "Abaeté (MG)",
  },
  {
    value: "Abaiara CE",
    label: "Abaiara (CE)",
  },
  {
    value: "Abaré BA",
    label: "Abaré (BA)",
  },
  {
    value: "Abatiá PR",
    label: "Abatiá (PR)",
  },
  {
    value: "Abaíra BA",
    label: "Abaíra (BA)",
  },
  {
    value: "Abdon Batista SC",
    label: "Abdon Batista (SC)",
  },
  {
    value: "Abel Figueiredo PA",
    label: "Abel Figueiredo (PA)",
  },
  {
    value: "Abelardo Luz SC",
    label: "Abelardo Luz (SC)",
  },
  {
    value: "Abre Campo MG",
    label: "Abre Campo (MG)",
  },
  {
    value: "Abreu e Lima PE",
    label: "Abreu e Lima (PE)",
  },
  {
    value: "Abreulândia TO",
    label: "Abreulândia (TO)",
  },
  {
    value: "Acaiaca MG",
    label: "Acaiaca (MG)",
  },
  {
    value: "Acajutiba BA",
    label: "Acajutiba (BA)",
  },
  {
    value: "Acarapé CE",
    label: "Acarapé (CE)",
  },
  {
    value: "Acaraú CE",
    label: "Acaraú (CE)",
  },
  {
    value: "Acari RN",
    label: "Acari (RN)",
  },
  {
    value: "Acará PA",
    label: "Acará (PA)",
  },
  {
    value: "Acauă PI",
    label: "Acauă (PI)",
  },
  {
    value: "Aceguá RS",
    label: "Aceguá (RS)",
  },
  {
    value: "Acopiara CE",
    label: "Acopiara (CE)",
  },
  {
    value: "Acorizal MT",
    label: "Acorizal (MT)",
  },
  {
    value: "Acrelândia AC",
    label: "Acrelândia (AC)",
  },
  {
    value: "Acreúna GO",
    label: "Acreúna (GO)",
  },
  {
    value: "Adamantina SP",
    label: "Adamantina (SP)",
  },
  {
    value: "Adelândia GO",
    label: "Adelândia (GO)",
  },
  {
    value: "Adolfo SP",
    label: "Adolfo (SP)",
  },
  {
    value: "Adrianópolis PR",
    label: "Adrianópolis (PR)",
  },
  {
    value: "Adustina BA",
    label: "Adustina (BA)",
  },
  {
    value: "Afogados da Ingazeira PE",
    label: "Afogados da Ingazeira (PE)",
  },
  {
    value: "Afonso Bezerra RN",
    label: "Afonso Bezerra (RN)",
  },
  {
    value: "Afonso Cláudio ES",
    label: "Afonso Cláudio (ES)",
  },
  {
    value: "Afonso Cunha MA",
    label: "Afonso Cunha (MA)",
  },
  {
    value: "Afrânio PE",
    label: "Afrânio (PE)",
  },
  {
    value: "Afuá PA",
    label: "Afuá (PA)",
  },
  {
    value: "Agrestina PE",
    label: "Agrestina (PE)",
  },
  {
    value: "Agricolândia PI",
    label: "Agricolândia (PI)",
  },
  {
    value: "Agrolândia SC",
    label: "Agrolândia (SC)",
  },
  {
    value: "Agronômica SC",
    label: "Agronômica (SC)",
  },
  {
    value: "Aguanil MG",
    label: "Aguanil (MG)",
  },
  {
    value: "Aguaí SP",
    label: "Aguaí (SP)",
  },
  {
    value: "Agudo RS",
    label: "Agudo (RS)",
  },
  {
    value: "Agudos SP",
    label: "Agudos (SP)",
  },
  {
    value: "Agudos do Sul PR",
    label: "Agudos do Sul (PR)",
  },
  {
    value: "Aguiar PB",
    label: "Aguiar (PB)",
  },
  {
    value: "Aguiarnópolis TO",
    label: "Aguiarnópolis (TO)",
  },
  {
    value: "Aimorés MG",
    label: "Aimorés (MG)",
  },
  {
    value: "Aiquara BA",
    label: "Aiquara (BA)",
  },
  {
    value: "Aiuaba CE",
    label: "Aiuaba (CE)",
  },
  {
    value: "Aiuruoca MG",
    label: "Aiuruoca (MG)",
  },
  {
    value: "Ajuricaba RS",
    label: "Ajuricaba (RS)",
  },
  {
    value: "Alagoa MG",
    label: "Alagoa (MG)",
  },
  {
    value: "Alagoa Grande PB",
    label: "Alagoa Grande (PB)",
  },
  {
    value: "Alagoa Nova PB",
    label: "Alagoa Nova (PB)",
  },
  {
    value: "Alagoinha PB",
    label: "Alagoinha (PB)",
  },
  {
    value: "Alagoinha PE",
    label: "Alagoinha (PE)",
  },
  {
    value: "Alagoinha do Piauí PI",
    label: "Alagoinha do Piauí (PI)",
  },
  {
    value: "Alagoinhas BA",
    label: "Alagoinhas (BA)",
  },
  {
    value: "Alambari SP",
    label: "Alambari (SP)",
  },
  {
    value: "Albertina MG",
    label: "Albertina (MG)",
  },
  {
    value: "Alcantil PB",
    label: "Alcantil (PB)",
  },
  {
    value: "Alcinópolis MS",
    label: "Alcinópolis (MS)",
  },
  {
    value: "Alcobaça BA",
    label: "Alcobaça (BA)",
  },
  {
    value: "Alcântara MA",
    label: "Alcântara (MA)",
  },
  {
    value: "Alcântaras CE",
    label: "Alcântaras (CE)",
  },
  {
    value: "Aldeias Altas MA",
    label: "Aldeias Altas (MA)",
  },
  {
    value: "Alecrim RS",
    label: "Alecrim (RS)",
  },
  {
    value: "Alegre ES",
    label: "Alegre (ES)",
  },
  {
    value: "Alegrete RS",
    label: "Alegrete (RS)",
  },
  {
    value: "Alegrete do Piauí PI",
    label: "Alegrete do Piauí (PI)",
  },
  {
    value: "Alegria RS",
    label: "Alegria (RS)",
  },
  {
    value: "Alenquer PA",
    label: "Alenquer (PA)",
  },
  {
    value: "Alexandria RN",
    label: "Alexandria (RN)",
  },
  {
    value: "Alexânia GO",
    label: "Alexânia (GO)",
  },
  {
    value: "Alfenas MG",
    label: "Alfenas (MG)",
  },
  {
    value: "Alfredo Chaves ES",
    label: "Alfredo Chaves (ES)",
  },
  {
    value: "Alfredo Marcondes SP",
    label: "Alfredo Marcondes (SP)",
  },
  {
    value: "Alfredo Vasconcelos MG",
    label: "Alfredo Vasconcelos (MG)",
  },
  {
    value: "Alfredo Wagner SC",
    label: "Alfredo Wagner (SC)",
  },
  {
    value: "Algodăo de Jandaíra PB",
    label: "Algodăo de Jandaíra (PB)",
  },
  {
    value: "Alhandra PB",
    label: "Alhandra (PB)",
  },
  {
    value: "Aliança PE",
    label: "Aliança (PE)",
  },
  {
    value: "Aliança do Tocantins TO",
    label: "Aliança do Tocantins (TO)",
  },
  {
    value: "Almadina BA",
    label: "Almadina (BA)",
  },
  {
    value: "Almas TO",
    label: "Almas (TO)",
  },
  {
    value: "Almeirim PA",
    label: "Almeirim (PA)",
  },
  {
    value: "Almenara MG",
    label: "Almenara (MG)",
  },
  {
    value: "Almino Afonso RN",
    label: "Almino Afonso (RN)",
  },
  {
    value: "Almirante Tamandaré PR",
    label: "Almirante Tamandaré (PR)",
  },
  {
    value: "Almirante Tamandaré do RS",
    label: "Almirante Tamandaré do Sul (RS)",
  },
  {
    value: "Aloândia GO",
    label: "Aloândia (GO)",
  },
  {
    value: "Alpercata MG",
    label: "Alpercata (MG)",
  },
  {
    value: "Alpestre RS",
    label: "Alpestre (RS)",
  },
  {
    value: "Alpinópolis MG",
    label: "Alpinópolis (MG)",
  },
  {
    value: "Alta Floresta MT",
    label: "Alta Floresta (MT)",
  },
  {
    value: "Alta Floresta D´oeste RO",
    label: "Alta Floresta D´oeste (RO)",
  },
  {
    value: "Altair SP",
    label: "Altair (SP)",
  },
  {
    value: "Altamira PA",
    label: "Altamira (PA)",
  },
  {
    value: "Altamira do Maranhăo MA",
    label: "Altamira do Maranhăo (MA)",
  },
  {
    value: "Altamira do Paraná PR",
    label: "Altamira do Paraná (PR)",
  },
  {
    value: "Altaneira CE",
    label: "Altaneira (CE)",
  },
  {
    value: "Alterosa MG",
    label: "Alterosa (MG)",
  },
  {
    value: "Altinho PE",
    label: "Altinho (PE)",
  },
  {
    value: "Altinópolis SP",
    label: "Altinópolis (SP)",
  },
  {
    value: "Alto Alegre RR",
    label: "Alto Alegre (RR)",
  },
  {
    value: "Alto Alegre RS",
    label: "Alto Alegre (RS)",
  },
  {
    value: "Alto Alegre SP",
    label: "Alto Alegre (SP)",
  },
  {
    value: "Alto Alegre Dos Pareci RO",
    label: "Alto Alegre Dos Parecis (RO)",
  },
  {
    value: "Alto Alegre do Maranhă MA",
    label: "Alto Alegre do Maranhăo (MA)",
  },
  {
    value: "Alto Alegre do Pindaré MA",
    label: "Alto Alegre do Pindaré (MA)",
  },
  {
    value: "Alto Araguaia MT",
    label: "Alto Araguaia (MT)",
  },
  {
    value: "Alto Bela Vista SC",
    label: "Alto Bela Vista (SC)",
  },
  {
    value: "Alto Boa Vista MT",
    label: "Alto Boa Vista (MT)",
  },
  {
    value: "Alto Caparaó MG",
    label: "Alto Caparaó (MG)",
  },
  {
    value: "Alto Feliz RS",
    label: "Alto Feliz (RS)",
  },
  {
    value: "Alto Garças MT",
    label: "Alto Garças (MT)",
  },
  {
    value: "Alto Horizonte GO",
    label: "Alto Horizonte (GO)",
  },
  {
    value: "Alto Jequitibá MG",
    label: "Alto Jequitibá (MG)",
  },
  {
    value: "Alto Longá PI",
    label: "Alto Longá (PI)",
  },
  {
    value: "Alto Paraguai MT",
    label: "Alto Paraguai (MT)",
  },
  {
    value: "Alto Paraná PR",
    label: "Alto Paraná (PR)",
  },
  {
    value: "Alto Paraíso RO",
    label: "Alto Paraíso (RO)",
  },
  {
    value: "Alto Paraíso de Goiás GO",
    label: "Alto Paraíso de Goiás (GO)",
  },
  {
    value: "Alto Parnaíba MA",
    label: "Alto Parnaíba (MA)",
  },
  {
    value: "Alto Piquiri PR",
    label: "Alto Piquiri (PR)",
  },
  {
    value: "Alto Rio Doce MG",
    label: "Alto Rio Doce (MG)",
  },
  {
    value: "Alto Rio Novo ES",
    label: "Alto Rio Novo (ES)",
  },
  {
    value: "Alto Santo CE",
    label: "Alto Santo (CE)",
  },
  {
    value: "Alto Taquari MT",
    label: "Alto Taquari (MT)",
  },
  {
    value: "Alto do Rodrigues RN",
    label: "Alto do Rodrigues (RN)",
  },
  {
    value: "Altos PI",
    label: "Altos (PI)",
  },
  {
    value: "Altônia PR",
    label: "Altônia (PR)",
  },
  {
    value: "Alumínio SP",
    label: "Alumínio (SP)",
  },
  {
    value: "Alvarenga MG",
    label: "Alvarenga (MG)",
  },
  {
    value: "Alvarăes AM",
    label: "Alvarăes (AM)",
  },
  {
    value: "Alvinlândia SP",
    label: "Alvinlândia (SP)",
  },
  {
    value: "Alvinópolis MG",
    label: "Alvinópolis (MG)",
  },
  {
    value: "Alvorada RS",
    label: "Alvorada (RS)",
  },
  {
    value: "Alvorada TO",
    label: "Alvorada (TO)",
  },
  {
    value: "Alvorada D´oeste RO",
    label: "Alvorada D´oeste (RO)",
  },
  {
    value: "Alvorada de Minas MG",
    label: "Alvorada de Minas (MG)",
  },
  {
    value: "Alvorada do Gurguéia PI",
    label: "Alvorada do Gurguéia (PI)",
  },
  {
    value: "Alvorada do Norte GO",
    label: "Alvorada do Norte (GO)",
  },
  {
    value: "Alvorada do Sul PR",
    label: "Alvorada do Sul (PR)",
  },
  {
    value: "Além Paraíba MG",
    label: "Além Paraíba (MG)",
  },
  {
    value: "Amajari RR",
    label: "Amajari (RR)",
  },
  {
    value: "Amambaí MS",
    label: "Amambaí (MS)",
  },
  {
    value: "Amaporă PR",
    label: "Amaporă (PR)",
  },
  {
    value: "Amapá AP",
    label: "Amapá (AP)",
  },
  {
    value: "Amapá do Maranhăo MA",
    label: "Amapá do Maranhăo (MA)",
  },
  {
    value: "Amaraji PE",
    label: "Amaraji (PE)",
  },
  {
    value: "Amaral Ferrador RS",
    label: "Amaral Ferrador (RS)",
  },
  {
    value: "Amaralina GO",
    label: "Amaralina (GO)",
  },
  {
    value: "Amarante PI",
    label: "Amarante (PI)",
  },
  {
    value: "Amarante do Maranhăo MA",
    label: "Amarante do Maranhăo (MA)",
  },
  {
    value: "Amargosa BA",
    label: "Amargosa (BA)",
  },
  {
    value: "Amaturá AM",
    label: "Amaturá (AM)",
  },
  {
    value: "Americana SP",
    label: "Americana (SP)",
  },
  {
    value: "Americano do Brasil GO",
    label: "Americano do Brasil (GO)",
  },
  {
    value: "Ametista do Sul RS",
    label: "Ametista do Sul (RS)",
  },
  {
    value: "Amontada CE",
    label: "Amontada (CE)",
  },
  {
    value: "Amorinópolis GO",
    label: "Amorinópolis (GO)",
  },
  {
    value: "Amparo PB",
    label: "Amparo (PB)",
  },
  {
    value: "Amparo SP",
    label: "Amparo (SP)",
  },
  {
    value: "Amparo de Săo Francisc SE",
    label: "Amparo de Săo Francisco (SE)",
  },
  {
    value: "Amparo do Serra MG",
    label: "Amparo do Serra (MG)",
  },
  {
    value: "Ampére PR",
    label: "Ampére (PR)",
  },
  {
    value: "Amélia Rodrigues BA",
    label: "Amélia Rodrigues (BA)",
  },
  {
    value: "América Dourada BA",
    label: "América Dourada (BA)",
  },
  {
    value: "Américo Brasiliense SP",
    label: "Américo Brasiliense (SP)",
  },
  {
    value: "Américo de Campos SP",
    label: "Américo de Campos (SP)",
  },
  {
    value: "Anadia AL",
    label: "Anadia (AL)",
  },
  {
    value: "Anagé BA",
    label: "Anagé (BA)",
  },
  {
    value: "Anahy PR",
    label: "Anahy (PR)",
  },
  {
    value: "Anajatuba MA",
    label: "Anajatuba (MA)",
  },
  {
    value: "Anajás PA",
    label: "Anajás (PA)",
  },
  {
    value: "Analândia SP",
    label: "Analândia (SP)",
  },
  {
    value: "Anamă AM",
    label: "Anamă (AM)",
  },
  {
    value: "Ananindeua PA",
    label: "Ananindeua (PA)",
  },
  {
    value: "Ananás TO",
    label: "Ananás (TO)",
  },
  {
    value: "Anapu PA",
    label: "Anapu (PA)",
  },
  {
    value: "Anapurus MA",
    label: "Anapurus (MA)",
  },
  {
    value: "Anastácio MS",
    label: "Anastácio (MS)",
  },
  {
    value: "Anaurilândia MS",
    label: "Anaurilândia (MS)",
  },
  {
    value: "Anchieta ES",
    label: "Anchieta (ES)",
  },
  {
    value: "Anchieta SC",
    label: "Anchieta (SC)",
  },
  {
    value: "Andaraí BA",
    label: "Andaraí (BA)",
  },
  {
    value: "Andirá PR",
    label: "Andirá (PR)",
  },
  {
    value: "Andorinha BA",
    label: "Andorinha (BA)",
  },
  {
    value: "Andradas MG",
    label: "Andradas (MG)",
  },
  {
    value: "Andradina SP",
    label: "Andradina (SP)",
  },
  {
    value: "Andrelândia MG",
    label: "Andrelândia (MG)",
  },
  {
    value: "André da Rocha RS",
    label: "André da Rocha (RS)",
  },
  {
    value: "Angatuba SP",
    label: "Angatuba (SP)",
  },
  {
    value: "Angelim PE",
    label: "Angelim (PE)",
  },
  {
    value: "Angelina SC",
    label: "Angelina (SC)",
  },
  {
    value: "Angelândia MG",
    label: "Angelândia (MG)",
  },
  {
    value: "Angical BA",
    label: "Angical (BA)",
  },
  {
    value: "Angical do Piauí PI",
    label: "Angical do Piauí (PI)",
  },
  {
    value: "Angico TO",
    label: "Angico (TO)",
  },
  {
    value: "Angicos RN",
    label: "Angicos (RN)",
  },
  {
    value: "Angra Dos Reis RJ",
    label: "Angra Dos Reis (RJ)",
  },
  {
    value: "Anguera BA",
    label: "Anguera (BA)",
  },
  {
    value: "Angélica MS",
    label: "Angélica (MS)",
  },
  {
    value: "Anhanguera GO",
    label: "Anhanguera (GO)",
  },
  {
    value: "Anhembi SP",
    label: "Anhembi (SP)",
  },
  {
    value: "Anhumas SP",
    label: "Anhumas (SP)",
  },
  {
    value: "Anicuns GO",
    label: "Anicuns (GO)",
  },
  {
    value: "Anita Garibaldi SC",
    label: "Anita Garibaldi (SC)",
  },
  {
    value: "Anitápolis SC",
    label: "Anitápolis (SC)",
  },
  {
    value: "Anori AM",
    label: "Anori (AM)",
  },
  {
    value: "Anta Gorda RS",
    label: "Anta Gorda (RS)",
  },
  {
    value: "Antas BA",
    label: "Antas (BA)",
  },
  {
    value: "Antonina PR",
    label: "Antonina (PR)",
  },
  {
    value: "Antonina do Norte CE",
    label: "Antonina do Norte (CE)",
  },
  {
    value: "Antônio Almeida PI",
    label: "Antônio Almeida (PI)",
  },
  {
    value: "Antônio Cardoso BA",
    label: "Antônio Cardoso (BA)",
  },
  {
    value: "Antônio Carlos MG",
    label: "Antônio Carlos (MG)",
  },
  {
    value: "Antônio Carlos SC",
    label: "Antônio Carlos (SC)",
  },
  {
    value: "Antônio Dias MG",
    label: "Antônio Dias (MG)",
  },
  {
    value: "Antônio Gonçalves BA",
    label: "Antônio Gonçalves (BA)",
  },
  {
    value: "Antônio Joăo MS",
    label: "Antônio Joăo (MS)",
  },
  {
    value: "Antônio Martins RN",
    label: "Antônio Martins (RN)",
  },
  {
    value: "Antônio Olinto PR",
    label: "Antônio Olinto (PR)",
  },
  {
    value: "Antônio Prado RS",
    label: "Antônio Prado (RS)",
  },
  {
    value: "Antônio Prado de Minas MG",
    label: "Antônio Prado de Minas (MG)",
  },
  {
    value: "Anápolis GO",
    label: "Anápolis (GO)",
  },
  {
    value: "Anísio de Abreu PI",
    label: "Anísio de Abreu (PI)",
  },
  {
    value: "Aparecida PB",
    label: "Aparecida (PB)",
  },
  {
    value: "Aparecida SP",
    label: "Aparecida (SP)",
  },
  {
    value: "Aparecida D´oeste SP",
    label: "Aparecida D´oeste (SP)",
  },
  {
    value: "Aparecida de Goiânia GO",
    label: "Aparecida de Goiânia (GO)",
  },
  {
    value: "Aparecida do Rio Doce GO",
    label: "Aparecida do Rio Doce (GO)",
  },
  {
    value: "Aparecida do Rio Negro TO",
    label: "Aparecida do Rio Negro (TO)",
  },
  {
    value: "Aparecida do Taboado MS",
    label: "Aparecida do Taboado (MS)",
  },
  {
    value: "Aperibé RJ",
    label: "Aperibé (RJ)",
  },
  {
    value: "Apiacá ES",
    label: "Apiacá (ES)",
  },
  {
    value: "Apiacás MT",
    label: "Apiacás (MT)",
  },
  {
    value: "Apiaí SP",
    label: "Apiaí (SP)",
  },
  {
    value: "Apicum-açu MA",
    label: "Apicum-açu (MA)",
  },
  {
    value: "Apiúna SC",
    label: "Apiúna (SC)",
  },
  {
    value: "Apodi RN",
    label: "Apodi (RN)",
  },
  {
    value: "Aporá BA",
    label: "Aporá (BA)",
  },
  {
    value: "Aporé GO",
    label: "Aporé (GO)",
  },
  {
    value: "Apuarema BA",
    label: "Apuarema (BA)",
  },
  {
    value: "Apucarana PR",
    label: "Apucarana (PR)",
  },
  {
    value: "Apuiarés CE",
    label: "Apuiarés (CE)",
  },
  {
    value: "Apuí AM",
    label: "Apuí (AM)",
  },
  {
    value: "Aquidabă SE",
    label: "Aquidabă (SE)",
  },
  {
    value: "Aquidauana MS",
    label: "Aquidauana (MS)",
  },
  {
    value: "Aquiraz CE",
    label: "Aquiraz (CE)",
  },
  {
    value: "Arabută SC",
    label: "Arabută (SC)",
  },
  {
    value: "Aracaju SE",
    label: "Aracaju (SE)",
  },
  {
    value: "Aracati CE",
    label: "Aracati (CE)",
  },
  {
    value: "Aracatu BA",
    label: "Aracatu (BA)",
  },
  {
    value: "Araci BA",
    label: "Araci (BA)",
  },
  {
    value: "Aracitaba MG",
    label: "Aracitaba (MG)",
  },
  {
    value: "Aracoiaba CE",
    label: "Aracoiaba (CE)",
  },
  {
    value: "Aracruz ES",
    label: "Aracruz (ES)",
  },
  {
    value: "Aragarças GO",
    label: "Aragarças (GO)",
  },
  {
    value: "Aragoiânia GO",
    label: "Aragoiânia (GO)",
  },
  {
    value: "Aragominas TO",
    label: "Aragominas (TO)",
  },
  {
    value: "Araguacema TO",
    label: "Araguacema (TO)",
  },
  {
    value: "Araguaiana MT",
    label: "Araguaiana (MT)",
  },
  {
    value: "Araguainha MT",
    label: "Araguainha (MT)",
  },
  {
    value: "Araguană MA",
    label: "Araguană (MA)",
  },
  {
    value: "Araguană TO",
    label: "Araguană (TO)",
  },
  {
    value: "Araguapaz GO",
    label: "Araguapaz (GO)",
  },
  {
    value: "Araguari MG",
    label: "Araguari (MG)",
  },
  {
    value: "Araguatins TO",
    label: "Araguatins (TO)",
  },
  {
    value: "Araguaçu TO",
    label: "Araguaçu (TO)",
  },
  {
    value: "Araguaína TO",
    label: "Araguaína (TO)",
  },
  {
    value: "Araioses MA",
    label: "Araioses (MA)",
  },
  {
    value: "Aral Moreira MS",
    label: "Aral Moreira (MS)",
  },
  {
    value: "Aramari BA",
    label: "Aramari (BA)",
  },
  {
    value: "Arambaré RS",
    label: "Arambaré (RS)",
  },
  {
    value: "Arame MA",
    label: "Arame (MA)",
  },
  {
    value: "Aramina SP",
    label: "Aramina (SP)",
  },
  {
    value: "Arandu SP",
    label: "Arandu (SP)",
  },
  {
    value: "Arantina MG",
    label: "Arantina (MG)",
  },
  {
    value: "Arapeí SP",
    label: "Arapeí (SP)",
  },
  {
    value: "Arapiraca AL",
    label: "Arapiraca (AL)",
  },
  {
    value: "Arapoema TO",
    label: "Arapoema (TO)",
  },
  {
    value: "Araponga MG",
    label: "Araponga (MG)",
  },
  {
    value: "Arapongas PR",
    label: "Arapongas (PR)",
  },
  {
    value: "Araporă MG",
    label: "Araporă (MG)",
  },
  {
    value: "Arapoti PR",
    label: "Arapoti (PR)",
  },
  {
    value: "Araputanga MT",
    label: "Araputanga (MT)",
  },
  {
    value: "Arapuá MG",
    label: "Arapuá (MG)",
  },
  {
    value: "Arapuă PR",
    label: "Arapuă (PR)",
  },
  {
    value: "Araquari SC",
    label: "Araquari (SC)",
  },
  {
    value: "Arara PB",
    label: "Arara (PB)",
  },
  {
    value: "Araranguá SC",
    label: "Araranguá (SC)",
  },
  {
    value: "Araraquara SP",
    label: "Araraquara (SP)",
  },
  {
    value: "Araras SP",
    label: "Araras (SP)",
  },
  {
    value: "Ararendá CE",
    label: "Ararendá (CE)",
  },
  {
    value: "Arari MA",
    label: "Arari (MA)",
  },
  {
    value: "Araricá RS",
    label: "Araricá (RS)",
  },
  {
    value: "Araripe CE",
    label: "Araripe (CE)",
  },
  {
    value: "Araripina PE",
    label: "Araripina (PE)",
  },
  {
    value: "Araruama RJ",
    label: "Araruama (RJ)",
  },
  {
    value: "Araruna PB",
    label: "Araruna (PB)",
  },
  {
    value: "Araruna PR",
    label: "Araruna (PR)",
  },
  {
    value: "Arataca BA",
    label: "Arataca (BA)",
  },
  {
    value: "Aratiba RS",
    label: "Aratiba (RS)",
  },
  {
    value: "Aratuba CE",
    label: "Aratuba (CE)",
  },
  {
    value: "Aratuípe BA",
    label: "Aratuípe (BA)",
  },
  {
    value: "Araucária PR",
    label: "Araucária (PR)",
  },
  {
    value: "Arauá SE",
    label: "Arauá (SE)",
  },
  {
    value: "Araxá MG",
    label: "Araxá (MG)",
  },
  {
    value: "Araçagi PB",
    label: "Araçagi (PB)",
  },
  {
    value: "Araçariguama SP",
    label: "Araçariguama (SP)",
  },
  {
    value: "Araças BA",
    label: "Araças (BA)",
  },
  {
    value: "Araçatuba SP",
    label: "Araçatuba (SP)",
  },
  {
    value: "Araçaí MG",
    label: "Araçaí (MG)",
  },
  {
    value: "Araçoiaba PE",
    label: "Araçoiaba (PE)",
  },
  {
    value: "Araçoiaba da Serra SP",
    label: "Araçoiaba da Serra (SP)",
  },
  {
    value: "Araçu GO",
    label: "Araçu (GO)",
  },
  {
    value: "Araçuaí MG",
    label: "Araçuaí (MG)",
  },
  {
    value: "Araújos MG",
    label: "Araújos (MG)",
  },
  {
    value: "Arceburgo MG",
    label: "Arceburgo (MG)",
  },
  {
    value: "Arco-íris SP",
    label: "Arco-íris (SP)",
  },
  {
    value: "Arcos MG",
    label: "Arcos (MG)",
  },
  {
    value: "Arcoverde PE",
    label: "Arcoverde (PE)",
  },
  {
    value: "Areado MG",
    label: "Areado (MG)",
  },
  {
    value: "Areal RJ",
    label: "Areal (RJ)",
  },
  {
    value: "Arealva SP",
    label: "Arealva (SP)",
  },
  {
    value: "Areia PB",
    label: "Areia (PB)",
  },
  {
    value: "Areia Branca RN",
    label: "Areia Branca (RN)",
  },
  {
    value: "Areia Branca SE",
    label: "Areia Branca (SE)",
  },
  {
    value: "Areia de Baraúnas PB",
    label: "Areia de Baraúnas (PB)",
  },
  {
    value: "Areial PB",
    label: "Areial (PB)",
  },
  {
    value: "Areias SP",
    label: "Areias (SP)",
  },
  {
    value: "Areiópolis SP",
    label: "Areiópolis (SP)",
  },
  {
    value: "Arenápolis MT",
    label: "Arenápolis (MT)",
  },
  {
    value: "Arenópolis GO",
    label: "Arenópolis (GO)",
  },
  {
    value: "Argirita MG",
    label: "Argirita (MG)",
  },
  {
    value: "Aricanduva MG",
    label: "Aricanduva (MG)",
  },
  {
    value: "Arinos MG",
    label: "Arinos (MG)",
  },
  {
    value: "Aripuană MT",
    label: "Aripuană (MT)",
  },
  {
    value: "Ariquemes RO",
    label: "Ariquemes (RO)",
  },
  {
    value: "Ariranha SP",
    label: "Ariranha (SP)",
  },
  {
    value: "Ariranha do Ivaí PR",
    label: "Ariranha do Ivaí (PR)",
  },
  {
    value: "Armazém SC",
    label: "Armazém (SC)",
  },
  {
    value: "Armaçăo Dos Búzios RJ",
    label: "Armaçăo Dos Búzios (RJ)",
  },
  {
    value: "Arneiroz CE",
    label: "Arneiroz (CE)",
  },
  {
    value: "Aroazes PI",
    label: "Aroazes (PI)",
  },
  {
    value: "Aroeiras PB",
    label: "Aroeiras (PB)",
  },
  {
    value: "Aroeiras do Itaim PI",
    label: "Aroeiras do Itaim (PI)",
  },
  {
    value: "Arraial PI",
    label: "Arraial (PI)",
  },
  {
    value: "Arraial do Cabo RJ",
    label: "Arraial do Cabo (RJ)",
  },
  {
    value: "Arraias TO",
    label: "Arraias (TO)",
  },
  {
    value: "Arroio Dos Ratos RS",
    label: "Arroio Dos Ratos (RS)",
  },
  {
    value: "Arroio Grande RS",
    label: "Arroio Grande (RS)",
  },
  {
    value: "Arroio Trinta SC",
    label: "Arroio Trinta (SC)",
  },
  {
    value: "Arroio do Meio RS",
    label: "Arroio do Meio (RS)",
  },
  {
    value: "Arroio do Padre RS",
    label: "Arroio do Padre (RS)",
  },
  {
    value: "Arroio do Sal RS",
    label: "Arroio do Sal (RS)",
  },
  {
    value: "Arroio do Tigre RS",
    label: "Arroio do Tigre (RS)",
  },
  {
    value: "Artur Nogueira SP",
    label: "Artur Nogueira (SP)",
  },
  {
    value: "Aruană GO",
    label: "Aruană (GO)",
  },
  {
    value: "Arujá SP",
    label: "Arujá (SP)",
  },
  {
    value: "Arvoredo SC",
    label: "Arvoredo (SC)",
  },
  {
    value: "Arvorezinha RS",
    label: "Arvorezinha (RS)",
  },
  {
    value: "Arês RN",
    label: "Arês (RN)",
  },
  {
    value: "Ascurra SC",
    label: "Ascurra (SC)",
  },
  {
    value: "Aspásia SP",
    label: "Aspásia (SP)",
  },
  {
    value: "Assaré CE",
    label: "Assaré (CE)",
  },
  {
    value: "Assaí PR",
    label: "Assaí (PR)",
  },
  {
    value: "Assis SP",
    label: "Assis (SP)",
  },
  {
    value: "Assis Brasil AC",
    label: "Assis Brasil (AC)",
  },
  {
    value: "Assis Chateaubriand PR",
    label: "Assis Chateaubriand (PR)",
  },
  {
    value: "Assunçăo PB",
    label: "Assunçăo (PB)",
  },
  {
    value: "Assunçăo do Piauí PI",
    label: "Assunçăo do Piauí (PI)",
  },
  {
    value: "Astolfo Dutra MG",
    label: "Astolfo Dutra (MG)",
  },
  {
    value: "Astorga PR",
    label: "Astorga (PR)",
  },
  {
    value: "Atalaia AL",
    label: "Atalaia (AL)",
  },
  {
    value: "Atalaia PR",
    label: "Atalaia (PR)",
  },
  {
    value: "Atalaia do Norte AM",
    label: "Atalaia do Norte (AM)",
  },
  {
    value: "Atalanta SC",
    label: "Atalanta (SC)",
  },
  {
    value: "Ataléia MG",
    label: "Ataléia (MG)",
  },
  {
    value: "Atibaia SP",
    label: "Atibaia (SP)",
  },
  {
    value: "Atilio Vivacqua ES",
    label: "Atilio Vivacqua (ES)",
  },
  {
    value: "Augustinópolis TO",
    label: "Augustinópolis (TO)",
  },
  {
    value: "Augusto Corrêa PA",
    label: "Augusto Corrêa (PA)",
  },
  {
    value: "Augusto Pestana RS",
    label: "Augusto Pestana (RS)",
  },
  {
    value: "Augusto Severo RN",
    label: "Augusto Severo (RN)",
  },
  {
    value: "Augusto de Lima MG",
    label: "Augusto de Lima (MG)",
  },
  {
    value: "Aurelino Leal BA",
    label: "Aurelino Leal (BA)",
  },
  {
    value: "Auriflama SP",
    label: "Auriflama (SP)",
  },
  {
    value: "Aurilândia GO",
    label: "Aurilândia (GO)",
  },
  {
    value: "Aurora CE",
    label: "Aurora (CE)",
  },
  {
    value: "Aurora SC",
    label: "Aurora (SC)",
  },
  {
    value: "Aurora do Pará PA",
    label: "Aurora do Pará (PA)",
  },
  {
    value: "Aurora do Tocantins TO",
    label: "Aurora do Tocantins (TO)",
  },
  {
    value: "Autazes AM",
    label: "Autazes (AM)",
  },
  {
    value: "Avanhandava SP",
    label: "Avanhandava (SP)",
  },
  {
    value: "Avaré SP",
    label: "Avaré (SP)",
  },
  {
    value: "Avaí SP",
    label: "Avaí (SP)",
  },
  {
    value: "Aveiro PA",
    label: "Aveiro (PA)",
  },
  {
    value: "Avelino Lopes PI",
    label: "Avelino Lopes (PI)",
  },
  {
    value: "Avelinópolis GO",
    label: "Avelinópolis (GO)",
  },
  {
    value: "Axixá MA",
    label: "Axixá (MA)",
  },
  {
    value: "Axixá do Tocantins TO",
    label: "Axixá do Tocantins (TO)",
  },
  {
    value: "Açailândia MA",
    label: "Açailândia (MA)",
  },
  {
    value: "Açu RN",
    label: "Açu (RN)",
  },
  {
    value: "Açucena MG",
    label: "Açucena (MG)",
  },
  {
    value: "Babaçulândia TO",
    label: "Babaçulândia (TO)",
  },
  {
    value: "Bacabal MA",
    label: "Bacabal (MA)",
  },
  {
    value: "Bacabeira MA",
    label: "Bacabeira (MA)",
  },
  {
    value: "Bacuri MA",
    label: "Bacuri (MA)",
  },
  {
    value: "Bacurituba MA",
    label: "Bacurituba (MA)",
  },
  {
    value: "Bady Bassitt SP",
    label: "Bady Bassitt (SP)",
  },
  {
    value: "Baependi MG",
    label: "Baependi (MG)",
  },
  {
    value: "Bagre PA",
    label: "Bagre (PA)",
  },
  {
    value: "Bagé RS",
    label: "Bagé (RS)",
  },
  {
    value: "Baianópolis BA",
    label: "Baianópolis (BA)",
  },
  {
    value: "Baixa Grande BA",
    label: "Baixa Grande (BA)",
  },
  {
    value: "Baixa Grande do Ribeir PI",
    label: "Baixa Grande do Ribeiro (PI)",
  },
  {
    value: "Baixio CE",
    label: "Baixio (CE)",
  },
  {
    value: "Baixo Guandu ES",
    label: "Baixo Guandu (ES)",
  },
  {
    value: "Baiăo PA",
    label: "Baiăo (PA)",
  },
  {
    value: "Balbinos SP",
    label: "Balbinos (SP)",
  },
  {
    value: "Baldim MG",
    label: "Baldim (MG)",
  },
  {
    value: "Baliza GO",
    label: "Baliza (GO)",
  },
  {
    value: "Balneário Arroio do Si SC",
    label: "Balneário Arroio do Silva (SC)",
  },
  {
    value: "Balneário Barra do Sul SC",
    label: "Balneário Barra do Sul (SC)",
  },
  {
    value: "Balneário Camboriú SC",
    label: "Balneário Camboriú (SC)",
  },
  {
    value: "Balneário Gaivota SC",
    label: "Balneário Gaivota (SC)",
  },
  {
    value: "Balneário Pinhal RS",
    label: "Balneário Pinhal (RS)",
  },
  {
    value: "Balneário Rincăo SC",
    label: "Balneário Rincăo (SC)",
  },
  {
    value: "Balsa Nova PR",
    label: "Balsa Nova (PR)",
  },
  {
    value: "Balsas MA",
    label: "Balsas (MA)",
  },
  {
    value: "Bambuí MG",
    label: "Bambuí (MG)",
  },
  {
    value: "Banabuiú CE",
    label: "Banabuiú (CE)",
  },
  {
    value: "Bananal SP",
    label: "Bananal (SP)",
  },
  {
    value: "Bananeiras PB",
    label: "Bananeiras (PB)",
  },
  {
    value: "Bandeira MG",
    label: "Bandeira (MG)",
  },
  {
    value: "Bandeira do Sul MG",
    label: "Bandeira do Sul (MG)",
  },
  {
    value: "Bandeirante SC",
    label: "Bandeirante (SC)",
  },
  {
    value: "Bandeirantes MS",
    label: "Bandeirantes (MS)",
  },
  {
    value: "Bandeirantes PR",
    label: "Bandeirantes (PR)",
  },
  {
    value: "Bandeirantes do Tocant TO",
    label: "Bandeirantes do Tocantins (TO)",
  },
  {
    value: "Bannach PA",
    label: "Bannach (PA)",
  },
  {
    value: "Banzaê BA",
    label: "Banzaê (BA)",
  },
  {
    value: "Baraúna PB",
    label: "Baraúna (PB)",
  },
  {
    value: "Baraúna RN",
    label: "Baraúna (RN)",
  },
  {
    value: "Barbacena MG",
    label: "Barbacena (MG)",
  },
  {
    value: "Barbalha CE",
    label: "Barbalha (CE)",
  },
  {
    value: "Barbosa SP",
    label: "Barbosa (SP)",
  },
  {
    value: "Barbosa Ferraz PR",
    label: "Barbosa Ferraz (PR)",
  },
  {
    value: "Barcarena PA",
    label: "Barcarena (PA)",
  },
  {
    value: "Barcelona RN",
    label: "Barcelona (RN)",
  },
  {
    value: "Barcelos AM",
    label: "Barcelos (AM)",
  },
  {
    value: "Bariri SP",
    label: "Bariri (SP)",
  },
  {
    value: "Barra BA",
    label: "Barra (BA)",
  },
  {
    value: "Barra Bonita SC",
    label: "Barra Bonita (SC)",
  },
  {
    value: "Barra Bonita SP",
    label: "Barra Bonita (SP)",
  },
  {
    value: "Barra Dos Coqueiros SE",
    label: "Barra Dos Coqueiros (SE)",
  },
  {
    value: "Barra D´alcântara PI",
    label: "Barra D´alcântara (PI)",
  },
  {
    value: "Barra Funda RS",
    label: "Barra Funda (RS)",
  },
  {
    value: "Barra Longa MG",
    label: "Barra Longa (MG)",
  },
  {
    value: "Barra Mansa RJ",
    label: "Barra Mansa (RJ)",
  },
  {
    value: "Barra Velha SC",
    label: "Barra Velha (SC)",
  },
  {
    value: "Barra da Estiva BA",
    label: "Barra da Estiva (BA)",
  },
  {
    value: "Barra de Guabiraba PE",
    label: "Barra de Guabiraba (PE)",
  },
  {
    value: "Barra de Santa Rosa PB",
    label: "Barra de Santa Rosa (PB)",
  },
  {
    value: "Barra de Santana PB",
    label: "Barra de Santana (PB)",
  },
  {
    value: "Barra de Santo Antônio AL",
    label: "Barra de Santo Antônio (AL)",
  },
  {
    value: "Barra de Săo Francisco ES",
    label: "Barra de Săo Francisco (ES)",
  },
  {
    value: "Barra de Săo Miguel AL",
    label: "Barra de Săo Miguel (AL)",
  },
  {
    value: "Barra de Săo Miguel PB",
    label: "Barra de Săo Miguel (PB)",
  },
  {
    value: "Barra do Bugres MT",
    label: "Barra do Bugres (MT)",
  },
  {
    value: "Barra do Chapéu SP",
    label: "Barra do Chapéu (SP)",
  },
  {
    value: "Barra do Choça BA",
    label: "Barra do Choça (BA)",
  },
  {
    value: "Barra do Corda MA",
    label: "Barra do Corda (MA)",
  },
  {
    value: "Barra do Garças MT",
    label: "Barra do Garças (MT)",
  },
  {
    value: "Barra do Guarita RS",
    label: "Barra do Guarita (RS)",
  },
  {
    value: "Barra do Jacaré PR",
    label: "Barra do Jacaré (PR)",
  },
  {
    value: "Barra do Mendes BA",
    label: "Barra do Mendes (BA)",
  },
  {
    value: "Barra do Ouro TO",
    label: "Barra do Ouro (TO)",
  },
  {
    value: "Barra do Piraí RJ",
    label: "Barra do Piraí (RJ)",
  },
  {
    value: "Barra do Quaraí RS",
    label: "Barra do Quaraí (RS)",
  },
  {
    value: "Barra do Ribeiro RS",
    label: "Barra do Ribeiro (RS)",
  },
  {
    value: "Barra do Rio Azul RS",
    label: "Barra do Rio Azul (RS)",
  },
  {
    value: "Barra do Rocha BA",
    label: "Barra do Rocha (BA)",
  },
  {
    value: "Barra do Turvo SP",
    label: "Barra do Turvo (SP)",
  },
  {
    value: "Barracăo PR",
    label: "Barracăo (PR)",
  },
  {
    value: "Barracăo RS",
    label: "Barracăo (RS)",
  },
  {
    value: "Barras PI",
    label: "Barras (PI)",
  },
  {
    value: "Barreira CE",
    label: "Barreira (CE)",
  },
  {
    value: "Barreiras BA",
    label: "Barreiras (BA)",
  },
  {
    value: "Barreiras do Piauí PI",
    label: "Barreiras do Piauí (PI)",
  },
  {
    value: "Barreirinha AM",
    label: "Barreirinha (AM)",
  },
  {
    value: "Barreirinhas MA",
    label: "Barreirinhas (MA)",
  },
  {
    value: "Barreiros PE",
    label: "Barreiros (PE)",
  },
  {
    value: "Barretos SP",
    label: "Barretos (SP)",
  },
  {
    value: "Barrinha SP",
    label: "Barrinha (SP)",
  },
  {
    value: "Barro CE",
    label: "Barro (CE)",
  },
  {
    value: "Barro Alto BA",
    label: "Barro Alto (BA)",
  },
  {
    value: "Barro Alto GO",
    label: "Barro Alto (GO)",
  },
  {
    value: "Barro Duro PI",
    label: "Barro Duro (PI)",
  },
  {
    value: "Barrocas BA",
    label: "Barrocas (BA)",
  },
  {
    value: "Barrolândia TO",
    label: "Barrolândia (TO)",
  },
  {
    value: "Barroquinha CE",
    label: "Barroquinha (CE)",
  },
  {
    value: "Barros Cassal RS",
    label: "Barros Cassal (RS)",
  },
  {
    value: "Barroso MG",
    label: "Barroso (MG)",
  },
  {
    value: "Barueri SP",
    label: "Barueri (SP)",
  },
  {
    value: "Barăo RS",
    label: "Barăo (RS)",
  },
  {
    value: "Barăo de Antonina SP",
    label: "Barăo de Antonina (SP)",
  },
  {
    value: "Barăo de Cocais MG",
    label: "Barăo de Cocais (MG)",
  },
  {
    value: "Barăo de Cotegipe RS",
    label: "Barăo de Cotegipe (RS)",
  },
  {
    value: "Barăo de Grajaú MA",
    label: "Barăo de Grajaú (MA)",
  },
  {
    value: "Barăo de Melgaço MT",
    label: "Barăo de Melgaço (MT)",
  },
  {
    value: "Barăo de Monte Alto MG",
    label: "Barăo de Monte Alto (MG)",
  },
  {
    value: "Barăo do Triunfo RS",
    label: "Barăo do Triunfo (RS)",
  },
  {
    value: "Bastos SP",
    label: "Bastos (SP)",
  },
  {
    value: "Bataguassu MS",
    label: "Bataguassu (MS)",
  },
  {
    value: "Batalha AL",
    label: "Batalha (AL)",
  },
  {
    value: "Batalha PI",
    label: "Batalha (PI)",
  },
  {
    value: "Batatais SP",
    label: "Batatais (SP)",
  },
  {
    value: "Batayporă MS",
    label: "Batayporă (MS)",
  },
  {
    value: "Baturité CE",
    label: "Baturité (CE)",
  },
  {
    value: "Bauru SP",
    label: "Bauru (SP)",
  },
  {
    value: "Bayeux PB",
    label: "Bayeux (PB)",
  },
  {
    value: "Baía Formosa RN",
    label: "Baía Formosa (RN)",
  },
  {
    value: "Baía da Traiçăo PB",
    label: "Baía da Traiçăo (PB)",
  },
  {
    value: "Bebedouro SP",
    label: "Bebedouro (SP)",
  },
  {
    value: "Beberibe CE",
    label: "Beberibe (CE)",
  },
  {
    value: "Bela Cruz CE",
    label: "Bela Cruz (CE)",
  },
  {
    value: "Bela Vista MS",
    label: "Bela Vista (MS)",
  },
  {
    value: "Bela Vista da Caroba PR",
    label: "Bela Vista da Caroba (PR)",
  },
  {
    value: "Bela Vista de Goiás GO",
    label: "Bela Vista de Goiás (GO)",
  },
  {
    value: "Bela Vista de Minas MG",
    label: "Bela Vista de Minas (MG)",
  },
  {
    value: "Bela Vista do Maranhăo MA",
    label: "Bela Vista do Maranhăo (MA)",
  },
  {
    value: "Bela Vista do Paraíso PR",
    label: "Bela Vista do Paraíso (PR)",
  },
  {
    value: "Bela Vista do Piauí PI",
    label: "Bela Vista do Piauí (PI)",
  },
  {
    value: "Bela Vista do Toldo SC",
    label: "Bela Vista do Toldo (SC)",
  },
  {
    value: "Belford Roxo RJ",
    label: "Belford Roxo (RJ)",
  },
  {
    value: "Belmiro Braga MG",
    label: "Belmiro Braga (MG)",
  },
  {
    value: "Belmonte BA",
    label: "Belmonte (BA)",
  },
  {
    value: "Belmonte SC",
    label: "Belmonte (SC)",
  },
  {
    value: "Belo Campo BA",
    label: "Belo Campo (BA)",
  },
  {
    value: "Belo Horizonte MG",
    label: "Belo Horizonte (MG)",
  },
  {
    value: "Belo Jardim PE",
    label: "Belo Jardim (PE)",
  },
  {
    value: "Belo Monte AL",
    label: "Belo Monte (AL)",
  },
  {
    value: "Belo Oriente MG",
    label: "Belo Oriente (MG)",
  },
  {
    value: "Belo Vale MG",
    label: "Belo Vale (MG)",
  },
  {
    value: "Belterra PA",
    label: "Belterra (PA)",
  },
  {
    value: "Belágua MA",
    label: "Belágua (MA)",
  },
  {
    value: "Belém AL",
    label: "Belém (AL)",
  },
  {
    value: "Belém PA",
    label: "Belém (PA)",
  },
  {
    value: "Belém PB",
    label: "Belém (PB)",
  },
  {
    value: "Belém de Maria PE",
    label: "Belém de Maria (PE)",
  },
  {
    value: "Belém de Săo Francisco PE",
    label: "Belém de Săo Francisco (PE)",
  },
  {
    value: "Belém do Brejo do Cruz PB",
    label: "Belém do Brejo do Cruz (PB)",
  },
  {
    value: "Belém do Piauí PI",
    label: "Belém do Piauí (PI)",
  },
  {
    value: "Beneditinos PI",
    label: "Beneditinos (PI)",
  },
  {
    value: "Benedito Leite MA",
    label: "Benedito Leite (MA)",
  },
  {
    value: "Benedito Novo SC",
    label: "Benedito Novo (SC)",
  },
  {
    value: "Benevides PA",
    label: "Benevides (PA)",
  },
  {
    value: "Benjamin Constant AM",
    label: "Benjamin Constant (AM)",
  },
  {
    value: "Benjamin Constant do S RS",
    label: "Benjamin Constant do Sul (RS)",
  },
  {
    value: "Bento Fernandes RN",
    label: "Bento Fernandes (RN)",
  },
  {
    value: "Bento Gonçalves RS",
    label: "Bento Gonçalves (RS)",
  },
  {
    value: "Bento de Abreu SP",
    label: "Bento de Abreu (SP)",
  },
  {
    value: "Bequimăo MA",
    label: "Bequimăo (MA)",
  },
  {
    value: "Berilo MG",
    label: "Berilo (MG)",
  },
  {
    value: "Berizal MG",
    label: "Berizal (MG)",
  },
  {
    value: "Bernardino Batista PB",
    label: "Bernardino Batista (PB)",
  },
  {
    value: "Bernardino de Campos SP",
    label: "Bernardino de Campos (SP)",
  },
  {
    value: "Bernardo Sayăo TO",
    label: "Bernardo Sayăo (TO)",
  },
  {
    value: "Bernardo do Mearim MA",
    label: "Bernardo do Mearim (MA)",
  },
  {
    value: "Bertioga SP",
    label: "Bertioga (SP)",
  },
  {
    value: "Bertolínia PI",
    label: "Bertolínia (PI)",
  },
  {
    value: "Bertópolis MG",
    label: "Bertópolis (MG)",
  },
  {
    value: "Beruri AM",
    label: "Beruri (AM)",
  },
  {
    value: "Betim MG",
    label: "Betim (MG)",
  },
  {
    value: "Betânia PE",
    label: "Betânia (PE)",
  },
  {
    value: "Betânia do Piauí PI",
    label: "Betânia do Piauí (PI)",
  },
  {
    value: "Bezerros PE",
    label: "Bezerros (PE)",
  },
  {
    value: "Bias Fortes MG",
    label: "Bias Fortes (MG)",
  },
  {
    value: "Bicas MG",
    label: "Bicas (MG)",
  },
  {
    value: "Biguaçu SC",
    label: "Biguaçu (SC)",
  },
  {
    value: "Bilac SP",
    label: "Bilac (SP)",
  },
  {
    value: "Biquinhas MG",
    label: "Biquinhas (MG)",
  },
  {
    value: "Birigui SP",
    label: "Birigui (SP)",
  },
  {
    value: "Biritiba-mirim SP",
    label: "Biritiba-mirim (SP)",
  },
  {
    value: "Biritinga BA",
    label: "Biritinga (BA)",
  },
  {
    value: "Bituruna PR",
    label: "Bituruna (PR)",
  },
  {
    value: "Blumenau SC",
    label: "Blumenau (SC)",
  },
  {
    value: "Boa Esperança ES",
    label: "Boa Esperança (ES)",
  },
  {
    value: "Boa Esperança MG",
    label: "Boa Esperança (MG)",
  },
  {
    value: "Boa Esperança PR",
    label: "Boa Esperança (PR)",
  },
  {
    value: "Boa Esperança do Iguaç PR",
    label: "Boa Esperança do Iguaçu (PR)",
  },
  {
    value: "Boa Esperança do Sul SP",
    label: "Boa Esperança do Sul (SP)",
  },
  {
    value: "Boa Hora PI",
    label: "Boa Hora (PI)",
  },
  {
    value: "Boa Nova BA",
    label: "Boa Nova (BA)",
  },
  {
    value: "Boa Ventura PB",
    label: "Boa Ventura (PB)",
  },
  {
    value: "Boa Ventura de Săo Roq PR",
    label: "Boa Ventura de Săo Roque (PR)",
  },
  {
    value: "Boa Viagem CE",
    label: "Boa Viagem (CE)",
  },
  {
    value: "Boa Vista PB",
    label: "Boa Vista (PB)",
  },
  {
    value: "Boa Vista RR",
    label: "Boa Vista (RR)",
  },
  {
    value: "Boa Vista Das Missơes RS",
    label: "Boa Vista Das Missơes (RS)",
  },
  {
    value: "Boa Vista da Aparecida PR",
    label: "Boa Vista da Aparecida (PR)",
  },
  {
    value: "Boa Vista do Buricá RS",
    label: "Boa Vista do Buricá (RS)",
  },
  {
    value: "Boa Vista do Cadeado RS",
    label: "Boa Vista do Cadeado (RS)",
  },
  {
    value: "Boa Vista do Gurupi MA",
    label: "Boa Vista do Gurupi (MA)",
  },
  {
    value: "Boa Vista do Incra RS",
    label: "Boa Vista do Incra (RS)",
  },
  {
    value: "Boa Vista do Ramos AM",
    label: "Boa Vista do Ramos (AM)",
  },
  {
    value: "Boa Vista do Sul RS",
    label: "Boa Vista do Sul (RS)",
  },
  {
    value: "Boa Vista do Tupim BA",
    label: "Boa Vista do Tupim (BA)",
  },
  {
    value: "Boca da Mata AL",
    label: "Boca da Mata (AL)",
  },
  {
    value: "Boca do Acre AM",
    label: "Boca do Acre (AM)",
  },
  {
    value: "Bocaina PI",
    label: "Bocaina (PI)",
  },
  {
    value: "Bocaina SP",
    label: "Bocaina (SP)",
  },
  {
    value: "Bocaina de Minas MG",
    label: "Bocaina de Minas (MG)",
  },
  {
    value: "Bocaina do Sul SC",
    label: "Bocaina do Sul (SC)",
  },
  {
    value: "Bocaiúva MG",
    label: "Bocaiúva (MG)",
  },
  {
    value: "Bocaiúva do Sul PR",
    label: "Bocaiúva do Sul (PR)",
  },
  {
    value: "Bodocó PE",
    label: "Bodocó (PE)",
  },
  {
    value: "Bodoquena MS",
    label: "Bodoquena (MS)",
  },
  {
    value: "Bodó RN",
    label: "Bodó (RN)",
  },
  {
    value: "Bofete SP",
    label: "Bofete (SP)",
  },
  {
    value: "Boituva SP",
    label: "Boituva (SP)",
  },
  {
    value: "Bom Conselho PE",
    label: "Bom Conselho (PE)",
  },
  {
    value: "Bom Despacho MG",
    label: "Bom Despacho (MG)",
  },
  {
    value: "Bom Jardim MA",
    label: "Bom Jardim (MA)",
  },
  {
    value: "Bom Jardim PE",
    label: "Bom Jardim (PE)",
  },
  {
    value: "Bom Jardim RJ",
    label: "Bom Jardim (RJ)",
  },
  {
    value: "Bom Jardim da Serra SC",
    label: "Bom Jardim da Serra (SC)",
  },
  {
    value: "Bom Jardim de Goiás GO",
    label: "Bom Jardim de Goiás (GO)",
  },
  {
    value: "Bom Jardim de Minas MG",
    label: "Bom Jardim de Minas (MG)",
  },
  {
    value: "Bom Jesus PB",
    label: "Bom Jesus (PB)",
  },
  {
    value: "Bom Jesus PI",
    label: "Bom Jesus (PI)",
  },
  {
    value: "Bom Jesus RN",
    label: "Bom Jesus (RN)",
  },
  {
    value: "Bom Jesus RS",
    label: "Bom Jesus (RS)",
  },
  {
    value: "Bom Jesus SC",
    label: "Bom Jesus (SC)",
  },
  {
    value: "Bom Jesus Das Selvas MA",
    label: "Bom Jesus Das Selvas (MA)",
  },
  {
    value: "Bom Jesus Dos Perdơes SP",
    label: "Bom Jesus Dos Perdơes (SP)",
  },
  {
    value: "Bom Jesus da Lapa BA",
    label: "Bom Jesus da Lapa (BA)",
  },
  {
    value: "Bom Jesus da Penha MG",
    label: "Bom Jesus da Penha (MG)",
  },
  {
    value: "Bom Jesus da Serra BA",
    label: "Bom Jesus da Serra (BA)",
  },
  {
    value: "Bom Jesus de Goiás GO",
    label: "Bom Jesus de Goiás (GO)",
  },
  {
    value: "Bom Jesus do Amparo MG",
    label: "Bom Jesus do Amparo (MG)",
  },
  {
    value: "Bom Jesus do Araguaia MT",
    label: "Bom Jesus do Araguaia (MT)",
  },
  {
    value: "Bom Jesus do Galho MG",
    label: "Bom Jesus do Galho (MG)",
  },
  {
    value: "Bom Jesus do Itabapoan RJ",
    label: "Bom Jesus do Itabapoana (RJ)",
  },
  {
    value: "Bom Jesus do Norte ES",
    label: "Bom Jesus do Norte (ES)",
  },
  {
    value: "Bom Jesus do Oeste SC",
    label: "Bom Jesus do Oeste (SC)",
  },
  {
    value: "Bom Jesus do Sul PR",
    label: "Bom Jesus do Sul (PR)",
  },
  {
    value: "Bom Jesus do Tocantins PA",
    label: "Bom Jesus do Tocantins (PA)",
  },
  {
    value: "Bom Jesus do Tocantins TO",
    label: "Bom Jesus do Tocantins (TO)",
  },
  {
    value: "Bom Lugar MA",
    label: "Bom Lugar (MA)",
  },
  {
    value: "Bom Princípio RS",
    label: "Bom Princípio (RS)",
  },
  {
    value: "Bom Princípio do Piauí PI",
    label: "Bom Princípio do Piauí (PI)",
  },
  {
    value: "Bom Progresso RS",
    label: "Bom Progresso (RS)",
  },
  {
    value: "Bom Repouso MG",
    label: "Bom Repouso (MG)",
  },
  {
    value: "Bom Retiro SC",
    label: "Bom Retiro (SC)",
  },
  {
    value: "Bom Retiro do Sul RS",
    label: "Bom Retiro do Sul (RS)",
  },
  {
    value: "Bom Sucesso MG",
    label: "Bom Sucesso (MG)",
  },
  {
    value: "Bom Sucesso PB",
    label: "Bom Sucesso (PB)",
  },
  {
    value: "Bom Sucesso PR",
    label: "Bom Sucesso (PR)",
  },
  {
    value: "Bom Sucesso de Itararé SP",
    label: "Bom Sucesso de Itararé (SP)",
  },
  {
    value: "Bom Sucesso do Sul PR",
    label: "Bom Sucesso do Sul (PR)",
  },
  {
    value: "Bombinhas SC",
    label: "Bombinhas (SC)",
  },
  {
    value: "Bonfim MG",
    label: "Bonfim (MG)",
  },
  {
    value: "Bonfim RR",
    label: "Bonfim (RR)",
  },
  {
    value: "Bonfim do Piauí PI",
    label: "Bonfim do Piauí (PI)",
  },
  {
    value: "Bonfinópolis GO",
    label: "Bonfinópolis (GO)",
  },
  {
    value: "Bonfinópolis de Minas MG",
    label: "Bonfinópolis de Minas (MG)",
  },
  {
    value: "Boninal BA",
    label: "Boninal (BA)",
  },
  {
    value: "Bonito BA",
    label: "Bonito (BA)",
  },
  {
    value: "Bonito MS",
    label: "Bonito (MS)",
  },
  {
    value: "Bonito PA",
    label: "Bonito (PA)",
  },
  {
    value: "Bonito PE",
    label: "Bonito (PE)",
  },
  {
    value: "Bonito de Minas MG",
    label: "Bonito de Minas (MG)",
  },
  {
    value: "Bonito de Santa fé PB",
    label: "Bonito de Santa fé (PB)",
  },
  {
    value: "Bonópolis GO",
    label: "Bonópolis (GO)",
  },
  {
    value: "Boqueirăo PB",
    label: "Boqueirăo (PB)",
  },
  {
    value: "Boqueirăo do Leăo RS",
    label: "Boqueirăo do Leăo (RS)",
  },
  {
    value: "Boqueirăo do Piauí PI",
    label: "Boqueirăo do Piauí (PI)",
  },
  {
    value: "Boquim SE",
    label: "Boquim (SE)",
  },
  {
    value: "Boquira BA",
    label: "Boquira (BA)",
  },
  {
    value: "Boracéia SP",
    label: "Boracéia (SP)",
  },
  {
    value: "Borba AM",
    label: "Borba (AM)",
  },
  {
    value: "Borborema PB",
    label: "Borborema (PB)",
  },
  {
    value: "Borborema SP",
    label: "Borborema (SP)",
  },
  {
    value: "Borda da Mata MG",
    label: "Borda da Mata (MG)",
  },
  {
    value: "Borebi SP",
    label: "Borebi (SP)",
  },
  {
    value: "Borrazópolis PR",
    label: "Borrazópolis (PR)",
  },
  {
    value: "Borá SP",
    label: "Borá (SP)",
  },
  {
    value: "Bossoroca RS",
    label: "Bossoroca (RS)",
  },
  {
    value: "Botelhos MG",
    label: "Botelhos (MG)",
  },
  {
    value: "Botucatu SP",
    label: "Botucatu (SP)",
  },
  {
    value: "Botumirim MG",
    label: "Botumirim (MG)",
  },
  {
    value: "Botuporă BA",
    label: "Botuporă (BA)",
  },
  {
    value: "Botuverá SC",
    label: "Botuverá (SC)",
  },
  {
    value: "Bozano RS",
    label: "Bozano (RS)",
  },
  {
    value: "Braga RS",
    label: "Braga (RS)",
  },
  {
    value: "Braganey PR",
    label: "Braganey (PR)",
  },
  {
    value: "Bragança PA",
    label: "Bragança (PA)",
  },
  {
    value: "Bragança Paulista SP",
    label: "Bragança Paulista (SP)",
  },
  {
    value: "Branquinha AL",
    label: "Branquinha (AL)",
  },
  {
    value: "Brasil Novo PA",
    label: "Brasil Novo (PA)",
  },
  {
    value: "Brasileira PI",
    label: "Brasileira (PI)",
  },
  {
    value: "Brasilândia MS",
    label: "Brasilândia (MS)",
  },
  {
    value: "Brasilândia de Minas MG",
    label: "Brasilândia de Minas (MG)",
  },
  {
    value: "Brasilândia do Sul PR",
    label: "Brasilândia do Sul (PR)",
  },
  {
    value: "Brasilândia do Tocanti TO",
    label: "Brasilândia do Tocantins (TO)",
  },
  {
    value: "Brasiléia AC",
    label: "Brasiléia (AC)",
  },
  {
    value: "Brasnorte MT",
    label: "Brasnorte (MT)",
  },
  {
    value: "Brasília DF",
    label: "Brasília (DF)",
  },
  {
    value: "Brasília de Minas MG",
    label: "Brasília de Minas (MG)",
  },
  {
    value: "Brasópolis MG",
    label: "Brasópolis (MG)",
  },
  {
    value: "Brazabrantes GO",
    label: "Brazabrantes (GO)",
  },
  {
    value: "Braço do Norte SC",
    label: "Braço do Norte (SC)",
  },
  {
    value: "Braço do Trombudo SC",
    label: "Braço do Trombudo (SC)",
  },
  {
    value: "Braúna SP",
    label: "Braúna (SP)",
  },
  {
    value: "Braúnas MG",
    label: "Braúnas (MG)",
  },
  {
    value: "Brejetuba ES",
    label: "Brejetuba (ES)",
  },
  {
    value: "Brejinho PE",
    label: "Brejinho (PE)",
  },
  {
    value: "Brejinho RN",
    label: "Brejinho (RN)",
  },
  {
    value: "Brejinho de Nazaré TO",
    label: "Brejinho de Nazaré (TO)",
  },
  {
    value: "Brejo MA",
    label: "Brejo (MA)",
  },
  {
    value: "Brejo Alegre SP",
    label: "Brejo Alegre (SP)",
  },
  {
    value: "Brejo Dos Santos PB",
    label: "Brejo Dos Santos (PB)",
  },
  {
    value: "Brejo Grande SE",
    label: "Brejo Grande (SE)",
  },
  {
    value: "Brejo Grande do Aragua PA",
    label: "Brejo Grande do Araguaia (PA)",
  },
  {
    value: "Brejo Santo CE",
    label: "Brejo Santo (CE)",
  },
  {
    value: "Brejo da Madre de Deus PE",
    label: "Brejo da Madre de Deus (PE)",
  },
  {
    value: "Brejo de Areia MA",
    label: "Brejo de Areia (MA)",
  },
  {
    value: "Brejo do Cruz PB",
    label: "Brejo do Cruz (PB)",
  },
  {
    value: "Brejo do Piauí PI",
    label: "Brejo do Piauí (PI)",
  },
  {
    value: "Brejolândia BA",
    label: "Brejolândia (BA)",
  },
  {
    value: "Brejăo PE",
    label: "Brejăo (PE)",
  },
  {
    value: "Brejơes BA",
    label: "Brejơes (BA)",
  },
  {
    value: "Breu Branco PA",
    label: "Breu Branco (PA)",
  },
  {
    value: "Breves PA",
    label: "Breves (PA)",
  },
  {
    value: "Britânia GO",
    label: "Britânia (GO)",
  },
  {
    value: "Brochier RS",
    label: "Brochier (RS)",
  },
  {
    value: "Brodowski SP",
    label: "Brodowski (SP)",
  },
  {
    value: "Brotas SP",
    label: "Brotas (SP)",
  },
  {
    value: "Brotas de Macaúbas BA",
    label: "Brotas de Macaúbas (BA)",
  },
  {
    value: "Brumadinho MG",
    label: "Brumadinho (MG)",
  },
  {
    value: "Brumado BA",
    label: "Brumado (BA)",
  },
  {
    value: "Brunópolis SC",
    label: "Brunópolis (SC)",
  },
  {
    value: "Brusque SC",
    label: "Brusque (SC)",
  },
  {
    value: "Brás Pires MG",
    label: "Brás Pires (MG)",
  },
  {
    value: "Bueno Brandăo MG",
    label: "Bueno Brandăo (MG)",
  },
  {
    value: "Buenos Aires PE",
    label: "Buenos Aires (PE)",
  },
  {
    value: "Buenópolis MG",
    label: "Buenópolis (MG)",
  },
  {
    value: "Buerarema BA",
    label: "Buerarema (BA)",
  },
  {
    value: "Bugre MG",
    label: "Bugre (MG)",
  },
  {
    value: "Bujari AC",
    label: "Bujari (AC)",
  },
  {
    value: "Bujaru PA",
    label: "Bujaru (PA)",
  },
  {
    value: "Buri SP",
    label: "Buri (SP)",
  },
  {
    value: "Buritama SP",
    label: "Buritama (SP)",
  },
  {
    value: "Buriti MA",
    label: "Buriti (MA)",
  },
  {
    value: "Buriti Alegre GO",
    label: "Buriti Alegre (GO)",
  },
  {
    value: "Buriti Bravo MA",
    label: "Buriti Bravo (MA)",
  },
  {
    value: "Buriti Dos Lopes PI",
    label: "Buriti Dos Lopes (PI)",
  },
  {
    value: "Buriti Dos Montes PI",
    label: "Buriti Dos Montes (PI)",
  },
  {
    value: "Buriti de Goiás GO",
    label: "Buriti de Goiás (GO)",
  },
  {
    value: "Buriti do Tocantins TO",
    label: "Buriti do Tocantins (TO)",
  },
  {
    value: "Buriticupu MA",
    label: "Buriticupu (MA)",
  },
  {
    value: "Buritinópolis GO",
    label: "Buritinópolis (GO)",
  },
  {
    value: "Buritirama BA",
    label: "Buritirama (BA)",
  },
  {
    value: "Buritirana MA",
    label: "Buritirana (MA)",
  },
  {
    value: "Buritis MG",
    label: "Buritis (MG)",
  },
  {
    value: "Buritis RO",
    label: "Buritis (RO)",
  },
  {
    value: "Buritizal SP",
    label: "Buritizal (SP)",
  },
  {
    value: "Buritizeiro MG",
    label: "Buritizeiro (MG)",
  },
  {
    value: "Butiá RS",
    label: "Butiá (RS)",
  },
  {
    value: "Buíque PE",
    label: "Buíque (PE)",
  },
  {
    value: "Bálsamo SP",
    label: "Bálsamo (SP)",
  },
  {
    value: "Caapiranga AM",
    label: "Caapiranga (AM)",
  },
  {
    value: "Caaporă PB",
    label: "Caaporă (PB)",
  },
  {
    value: "Caarapó MS",
    label: "Caarapó (MS)",
  },
  {
    value: "Caatiba BA",
    label: "Caatiba (BA)",
  },
  {
    value: "Cabaceiras PB",
    label: "Cabaceiras (PB)",
  },
  {
    value: "Cabaceiras do Paraguaç BA",
    label: "Cabaceiras do Paraguaçu (BA)",
  },
  {
    value: "Cabeceira Grande MG",
    label: "Cabeceira Grande (MG)",
  },
  {
    value: "Cabeceiras GO",
    label: "Cabeceiras (GO)",
  },
  {
    value: "Cabeceiras do Piauí PI",
    label: "Cabeceiras do Piauí (PI)",
  },
  {
    value: "Cabedelo PB",
    label: "Cabedelo (PB)",
  },
  {
    value: "Cabixi RO",
    label: "Cabixi (RO)",
  },
  {
    value: "Cabo Frio RJ",
    label: "Cabo Frio (RJ)",
  },
  {
    value: "Cabo Verde MG",
    label: "Cabo Verde (MG)",
  },
  {
    value: "Cabo de Santo Agostinh PE",
    label: "Cabo de Santo Agostinho (PE)",
  },
  {
    value: "Cabreúva SP",
    label: "Cabreúva (SP)",
  },
  {
    value: "Cabrobó PE",
    label: "Cabrobó (PE)",
  },
  {
    value: "Cabrália Paulista SP",
    label: "Cabrália Paulista (SP)",
  },
  {
    value: "Cacaulândia RO",
    label: "Cacaulândia (RO)",
  },
  {
    value: "Cacequi RS",
    label: "Cacequi (RS)",
  },
  {
    value: "Cachoeira BA",
    label: "Cachoeira (BA)",
  },
  {
    value: "Cachoeira Alta GO",
    label: "Cachoeira Alta (GO)",
  },
  {
    value: "Cachoeira Dos Índios PB",
    label: "Cachoeira Dos Índios (PB)",
  },
  {
    value: "Cachoeira Dourada GO",
    label: "Cachoeira Dourada (GO)",
  },
  {
    value: "Cachoeira Dourada MG",
    label: "Cachoeira Dourada (MG)",
  },
  {
    value: "Cachoeira Grande MA",
    label: "Cachoeira Grande (MA)",
  },
  {
    value: "Cachoeira Paulista SP",
    label: "Cachoeira Paulista (SP)",
  },
  {
    value: "Cachoeira da Prata MG",
    label: "Cachoeira da Prata (MG)",
  },
  {
    value: "Cachoeira de Goiás GO",
    label: "Cachoeira de Goiás (GO)",
  },
  {
    value: "Cachoeira de Minas MG",
    label: "Cachoeira de Minas (MG)",
  },
  {
    value: "Cachoeira de Pajeú MG",
    label: "Cachoeira de Pajeú (MG)",
  },
  {
    value: "Cachoeira do Arari PA",
    label: "Cachoeira do Arari (PA)",
  },
  {
    value: "Cachoeira do Piriá PA",
    label: "Cachoeira do Piriá (PA)",
  },
  {
    value: "Cachoeira do Sul RS",
    label: "Cachoeira do Sul (RS)",
  },
  {
    value: "Cachoeiras de Macacu RJ",
    label: "Cachoeiras de Macacu (RJ)",
  },
  {
    value: "Cachoeirinha PE",
    label: "Cachoeirinha (PE)",
  },
  {
    value: "Cachoeirinha RS",
    label: "Cachoeirinha (RS)",
  },
  {
    value: "Cachoeirinha TO",
    label: "Cachoeirinha (TO)",
  },
  {
    value: "Cachoeiro de Itapemiri ES",
    label: "Cachoeiro de Itapemirim (ES)",
  },
  {
    value: "Cacimba de Areia PB",
    label: "Cacimba de Areia (PB)",
  },
  {
    value: "Cacimba de Dentro PB",
    label: "Cacimba de Dentro (PB)",
  },
  {
    value: "Cacimbas PB",
    label: "Cacimbas (PB)",
  },
  {
    value: "Cacimbinhas AL",
    label: "Cacimbinhas (AL)",
  },
  {
    value: "Cacique Doble RS",
    label: "Cacique Doble (RS)",
  },
  {
    value: "Cacoal RO",
    label: "Cacoal (RO)",
  },
  {
    value: "Caconde SP",
    label: "Caconde (SP)",
  },
  {
    value: "Caculé BA",
    label: "Caculé (BA)",
  },
  {
    value: "Caetanos BA",
    label: "Caetanos (BA)",
  },
  {
    value: "Caetanópolis MG",
    label: "Caetanópolis (MG)",
  },
  {
    value: "Caetité BA",
    label: "Caetité (BA)",
  },
  {
    value: "Caeté MG",
    label: "Caeté (MG)",
  },
  {
    value: "Caetés PE",
    label: "Caetés (PE)",
  },
  {
    value: "Cafarnaum BA",
    label: "Cafarnaum (BA)",
  },
  {
    value: "Cafeara PR",
    label: "Cafeara (PR)",
  },
  {
    value: "Cafelândia PR",
    label: "Cafelândia (PR)",
  },
  {
    value: "Cafelândia SP",
    label: "Cafelândia (SP)",
  },
  {
    value: "Cafezal do Sul PR",
    label: "Cafezal do Sul (PR)",
  },
  {
    value: "Caiabu SP",
    label: "Caiabu (SP)",
  },
  {
    value: "Caiana MG",
    label: "Caiana (MG)",
  },
  {
    value: "Caiapônia GO",
    label: "Caiapônia (GO)",
  },
  {
    value: "Caibaté RS",
    label: "Caibaté (RS)",
  },
  {
    value: "Caibi SC",
    label: "Caibi (SC)",
  },
  {
    value: "Caicó RN",
    label: "Caicó (RN)",
  },
  {
    value: "Caieiras SP",
    label: "Caieiras (SP)",
  },
  {
    value: "Cairu BA",
    label: "Cairu (BA)",
  },
  {
    value: "Caiuá SP",
    label: "Caiuá (SP)",
  },
  {
    value: "Caiçara PB",
    label: "Caiçara (PB)",
  },
  {
    value: "Caiçara RS",
    label: "Caiçara (RS)",
  },
  {
    value: "Caiçara do Norte RN",
    label: "Caiçara do Norte (RN)",
  },
  {
    value: "Caiçara do Rio do Vent RN",
    label: "Caiçara do Rio do Vento (RN)",
  },
  {
    value: "Cajamar SP",
    label: "Cajamar (SP)",
  },
  {
    value: "Cajapió MA",
    label: "Cajapió (MA)",
  },
  {
    value: "Cajari MA",
    label: "Cajari (MA)",
  },
  {
    value: "Cajati SP",
    label: "Cajati (SP)",
  },
  {
    value: "Cajazeiras PB",
    label: "Cajazeiras (PB)",
  },
  {
    value: "Cajazeiras do Piauí PI",
    label: "Cajazeiras do Piauí (PI)",
  },
  {
    value: "Cajazeirinhas PB",
    label: "Cajazeirinhas (PB)",
  },
  {
    value: "Cajobi SP",
    label: "Cajobi (SP)",
  },
  {
    value: "Cajueiro AL",
    label: "Cajueiro (AL)",
  },
  {
    value: "Cajueiro da Praia PI",
    label: "Cajueiro da Praia (PI)",
  },
  {
    value: "Cajuri MG",
    label: "Cajuri (MG)",
  },
  {
    value: "Cajuru SP",
    label: "Cajuru (SP)",
  },
  {
    value: "Caldas MG",
    label: "Caldas (MG)",
  },
  {
    value: "Caldas Brandăo PB",
    label: "Caldas Brandăo (PB)",
  },
  {
    value: "Caldas Novas GO",
    label: "Caldas Novas (GO)",
  },
  {
    value: "Caldazinha GO",
    label: "Caldazinha (GO)",
  },
  {
    value: "Caldeirăo Grande BA",
    label: "Caldeirăo Grande (BA)",
  },
  {
    value: "Caldeirăo Grande do Pi PI",
    label: "Caldeirăo Grande do Piauí (PI)",
  },
  {
    value: "Califórnia PR",
    label: "Califórnia (PR)",
  },
  {
    value: "Calmon SC",
    label: "Calmon (SC)",
  },
  {
    value: "Calumbi PE",
    label: "Calumbi (PE)",
  },
  {
    value: "Calçado PE",
    label: "Calçado (PE)",
  },
  {
    value: "Calçoene AP",
    label: "Calçoene (AP)",
  },
  {
    value: "Camacan BA",
    label: "Camacan (BA)",
  },
  {
    value: "Camacho MG",
    label: "Camacho (MG)",
  },
  {
    value: "Camalaú PB",
    label: "Camalaú (PB)",
  },
  {
    value: "Camamu BA",
    label: "Camamu (BA)",
  },
  {
    value: "Camanducaia MG",
    label: "Camanducaia (MG)",
  },
  {
    value: "Camapuă MS",
    label: "Camapuă (MS)",
  },
  {
    value: "Camaquă RS",
    label: "Camaquă (RS)",
  },
  {
    value: "Camaragibe PE",
    label: "Camaragibe (PE)",
  },
  {
    value: "Camargo RS",
    label: "Camargo (RS)",
  },
  {
    value: "Camaçari BA",
    label: "Camaçari (BA)",
  },
  {
    value: "Cambará PR",
    label: "Cambará (PR)",
  },
  {
    value: "Cambará do Sul RS",
    label: "Cambará do Sul (RS)",
  },
  {
    value: "Cambira PR",
    label: "Cambira (PR)",
  },
  {
    value: "Camboriú SC",
    label: "Camboriú (SC)",
  },
  {
    value: "Cambuci RJ",
    label: "Cambuci (RJ)",
  },
  {
    value: "Cambuquira MG",
    label: "Cambuquira (MG)",
  },
  {
    value: "Cambuí MG",
    label: "Cambuí (MG)",
  },
  {
    value: "Cambé PR",
    label: "Cambé (PR)",
  },
  {
    value: "Cametá PA",
    label: "Cametá (PA)",
  },
  {
    value: "Camocim CE",
    label: "Camocim (CE)",
  },
  {
    value: "Camocim de Săo Félix PE",
    label: "Camocim de Săo Félix (PE)",
  },
  {
    value: "Campanha MG",
    label: "Campanha (MG)",
  },
  {
    value: "Campanário MG",
    label: "Campanário (MG)",
  },
  {
    value: "Campestre AL",
    label: "Campestre (AL)",
  },
  {
    value: "Campestre MG",
    label: "Campestre (MG)",
  },
  {
    value: "Campestre da Serra RS",
    label: "Campestre da Serra (RS)",
  },
  {
    value: "Campestre de Goiás GO",
    label: "Campestre de Goiás (GO)",
  },
  {
    value: "Campestre do Maranhăo MA",
    label: "Campestre do Maranhăo (MA)",
  },
  {
    value: "Campina Das Missơes RS",
    label: "Campina Das Missơes (RS)",
  },
  {
    value: "Campina Grande PB",
    label: "Campina Grande (PB)",
  },
  {
    value: "Campina Grande do Sul PR",
    label: "Campina Grande do Sul (PR)",
  },
  {
    value: "Campina Verde MG",
    label: "Campina Verde (MG)",
  },
  {
    value: "Campina da Lagoa PR",
    label: "Campina da Lagoa (PR)",
  },
  {
    value: "Campina do Monte Alegr SP",
    label: "Campina do Monte Alegre (SP)",
  },
  {
    value: "Campina do Simăo PR",
    label: "Campina do Simăo (PR)",
  },
  {
    value: "Campinas SP",
    label: "Campinas (SP)",
  },
  {
    value: "Campinas do Piauí PI",
    label: "Campinas do Piauí (PI)",
  },
  {
    value: "Campinas do Sul RS",
    label: "Campinas do Sul (RS)",
  },
  {
    value: "Campinaçu GO",
    label: "Campinaçu (GO)",
  },
  {
    value: "Campinorte GO",
    label: "Campinorte (GO)",
  },
  {
    value: "Campinápolis MT",
    label: "Campinápolis (MT)",
  },
  {
    value: "Campo Alegre AL",
    label: "Campo Alegre (AL)",
  },
  {
    value: "Campo Alegre SC",
    label: "Campo Alegre (SC)",
  },
  {
    value: "Campo Alegre de Goiás GO",
    label: "Campo Alegre de Goiás (GO)",
  },
  {
    value: "Campo Alegre de Lourde BA",
    label: "Campo Alegre de Lourdes (BA)",
  },
  {
    value: "Campo Alegre do Fidalg PI",
    label: "Campo Alegre do Fidalgo (PI)",
  },
  {
    value: "Campo Azul MG",
    label: "Campo Azul (MG)",
  },
  {
    value: "Campo Belo MG",
    label: "Campo Belo (MG)",
  },
  {
    value: "Campo Belo do Sul SC",
    label: "Campo Belo do Sul (SC)",
  },
  {
    value: "Campo Bom RS",
    label: "Campo Bom (RS)",
  },
  {
    value: "Campo Bonito PR",
    label: "Campo Bonito (PR)",
  },
  {
    value: "Campo Erê SC",
    label: "Campo Erê (SC)",
  },
  {
    value: "Campo Florido MG",
    label: "Campo Florido (MG)",
  },
  {
    value: "Campo Formoso BA",
    label: "Campo Formoso (BA)",
  },
  {
    value: "Campo Grande AL",
    label: "Campo Grande (AL)",
  },
  {
    value: "Campo Grande MS",
    label: "Campo Grande (MS)",
  },
  {
    value: "Campo Grande do Piauí PI",
    label: "Campo Grande do Piauí (PI)",
  },
  {
    value: "Campo Largo PR",
    label: "Campo Largo (PR)",
  },
  {
    value: "Campo Largo do Piauí PI",
    label: "Campo Largo do Piauí (PI)",
  },
  {
    value: "Campo Limpo Paulista SP",
    label: "Campo Limpo Paulista (SP)",
  },
  {
    value: "Campo Limpo de Goiás GO",
    label: "Campo Limpo de Goiás (GO)",
  },
  {
    value: "Campo Magro PR",
    label: "Campo Magro (PR)",
  },
  {
    value: "Campo Maior PI",
    label: "Campo Maior (PI)",
  },
  {
    value: "Campo Mourăo PR",
    label: "Campo Mourăo (PR)",
  },
  {
    value: "Campo Novo RS",
    label: "Campo Novo (RS)",
  },
  {
    value: "Campo Novo de Rondônia RO",
    label: "Campo Novo de Rondônia (RO)",
  },
  {
    value: "Campo Novo do Parecis MT",
    label: "Campo Novo do Parecis (MT)",
  },
  {
    value: "Campo Redondo RN",
    label: "Campo Redondo (RN)",
  },
  {
    value: "Campo Verde MT",
    label: "Campo Verde (MT)",
  },
  {
    value: "Campo de Santana PB",
    label: "Campo de Santana (PB)",
  },
  {
    value: "Campo do Brito SE",
    label: "Campo do Brito (SE)",
  },
  {
    value: "Campo do Meio MG",
    label: "Campo do Meio (MG)",
  },
  {
    value: "Campo do Tenente PR",
    label: "Campo do Tenente (PR)",
  },
  {
    value: "Campos Altos MG",
    label: "Campos Altos (MG)",
  },
  {
    value: "Campos Belos GO",
    label: "Campos Belos (GO)",
  },
  {
    value: "Campos Borges RS",
    label: "Campos Borges (RS)",
  },
  {
    value: "Campos Dos Goytacazes RJ",
    label: "Campos Dos Goytacazes (RJ)",
  },
  {
    value: "Campos Gerais MG",
    label: "Campos Gerais (MG)",
  },
  {
    value: "Campos Lindos TO",
    label: "Campos Lindos (TO)",
  },
  {
    value: "Campos Novos SC",
    label: "Campos Novos (SC)",
  },
  {
    value: "Campos Novos Paulista SP",
    label: "Campos Novos Paulista (SP)",
  },
  {
    value: "Campos Sales CE",
    label: "Campos Sales (CE)",
  },
  {
    value: "Campos Verdes GO",
    label: "Campos Verdes (GO)",
  },
  {
    value: "Campos de Júlio MT",
    label: "Campos de Júlio (MT)",
  },
  {
    value: "Campos do Jordăo SP",
    label: "Campos do Jordăo (SP)",
  },
  {
    value: "Camutanga PE",
    label: "Camutanga (PE)",
  },
  {
    value: "Cana Verde MG",
    label: "Cana Verde (MG)",
  },
  {
    value: "Canabrava do Norte MT",
    label: "Canabrava do Norte (MT)",
  },
  {
    value: "Cananéia SP",
    label: "Cananéia (SP)",
  },
  {
    value: "Canapi AL",
    label: "Canapi (AL)",
  },
  {
    value: "Canarana BA",
    label: "Canarana (BA)",
  },
  {
    value: "Canarana MT",
    label: "Canarana (MT)",
  },
  {
    value: "Canas SP",
    label: "Canas (SP)",
  },
  {
    value: "Canavieira PI",
    label: "Canavieira (PI)",
  },
  {
    value: "Canavieiras BA",
    label: "Canavieiras (BA)",
  },
  {
    value: "Canaă MG",
    label: "Canaă (MG)",
  },
  {
    value: "Canaă Dos Carajás PA",
    label: "Canaă Dos Carajás (PA)",
  },
  {
    value: "Candeal BA",
    label: "Candeal (BA)",
  },
  {
    value: "Candeias BA",
    label: "Candeias (BA)",
  },
  {
    value: "Candeias MG",
    label: "Candeias (MG)",
  },
  {
    value: "Candeias do Jamari RO",
    label: "Candeias do Jamari (RO)",
  },
  {
    value: "Candelária RS",
    label: "Candelária (RS)",
  },
  {
    value: "Candiba BA",
    label: "Candiba (BA)",
  },
  {
    value: "Candiota RS",
    label: "Candiota (RS)",
  },
  {
    value: "Candói PR",
    label: "Candói (PR)",
  },
  {
    value: "Canela RS",
    label: "Canela (RS)",
  },
  {
    value: "Canelinha SC",
    label: "Canelinha (SC)",
  },
  {
    value: "Canguaretama RN",
    label: "Canguaretama (RN)",
  },
  {
    value: "Canguçu RS",
    label: "Canguçu (RS)",
  },
  {
    value: "Canhoba SE",
    label: "Canhoba (SE)",
  },
  {
    value: "Canhotinho PE",
    label: "Canhotinho (PE)",
  },
  {
    value: "Canindé CE",
    label: "Canindé (CE)",
  },
  {
    value: "Canindé de Săo Francis SE",
    label: "Canindé de Săo Francisco (SE)",
  },
  {
    value: "Canitar SP",
    label: "Canitar (SP)",
  },
  {
    value: "Canoas RS",
    label: "Canoas (RS)",
  },
  {
    value: "Canoinhas SC",
    label: "Canoinhas (SC)",
  },
  {
    value: "Cansançăo BA",
    label: "Cansançăo (BA)",
  },
  {
    value: "Cantagalo MG",
    label: "Cantagalo (MG)",
  },
  {
    value: "Cantagalo PR",
    label: "Cantagalo (PR)",
  },
  {
    value: "Cantagalo RJ",
    label: "Cantagalo (RJ)",
  },
  {
    value: "Cantanhede MA",
    label: "Cantanhede (MA)",
  },
  {
    value: "Canto do Buriti PI",
    label: "Canto do Buriti (PI)",
  },
  {
    value: "Cantá RR",
    label: "Cantá (RR)",
  },
  {
    value: "Canudos BA",
    label: "Canudos (BA)",
  },
  {
    value: "Canudos do Vale RS",
    label: "Canudos do Vale (RS)",
  },
  {
    value: "Canutama AM",
    label: "Canutama (AM)",
  },
  {
    value: "Canápolis BA",
    label: "Canápolis (BA)",
  },
  {
    value: "Canápolis MG",
    label: "Canápolis (MG)",
  },
  {
    value: "Capanema PA",
    label: "Capanema (PA)",
  },
  {
    value: "Capanema PR",
    label: "Capanema (PR)",
  },
  {
    value: "Caparaó MG",
    label: "Caparaó (MG)",
  },
  {
    value: "Capela AL",
    label: "Capela (AL)",
  },
  {
    value: "Capela SE",
    label: "Capela (SE)",
  },
  {
    value: "Capela Nova MG",
    label: "Capela Nova (MG)",
  },
  {
    value: "Capela de Santana RS",
    label: "Capela de Santana (RS)",
  },
  {
    value: "Capela do Alto SP",
    label: "Capela do Alto (SP)",
  },
  {
    value: "Capela do Alto Alegre BA",
    label: "Capela do Alto Alegre (BA)",
  },
  {
    value: "Capelinha MG",
    label: "Capelinha (MG)",
  },
  {
    value: "Capetinga MG",
    label: "Capetinga (MG)",
  },
  {
    value: "Capim PB",
    label: "Capim (PB)",
  },
  {
    value: "Capim Branco MG",
    label: "Capim Branco (MG)",
  },
  {
    value: "Capim Grosso BA",
    label: "Capim Grosso (BA)",
  },
  {
    value: "Capinzal SC",
    label: "Capinzal (SC)",
  },
  {
    value: "Capinzal do Norte MA",
    label: "Capinzal do Norte (MA)",
  },
  {
    value: "Capinópolis MG",
    label: "Capinópolis (MG)",
  },
  {
    value: "Capistrano CE",
    label: "Capistrano (CE)",
  },
  {
    value: "Capitólio MG",
    label: "Capitólio (MG)",
  },
  {
    value: "Capităo RS",
    label: "Capităo (RS)",
  },
  {
    value: "Capităo Andrade MG",
    label: "Capităo Andrade (MG)",
  },
  {
    value: "Capităo Enéas MG",
    label: "Capităo Enéas (MG)",
  },
  {
    value: "Capităo Gervásio Olive PI",
    label: "Capităo Gervásio Oliveira (PI)",
  },
  {
    value: "Capităo Leônidas Marqu PR",
    label: "Capităo Leônidas Marques (PR)",
  },
  {
    value: "Capităo Poço PA",
    label: "Capităo Poço (PA)",
  },
  {
    value: "Capităo de Campos PI",
    label: "Capităo de Campos (PI)",
  },
  {
    value: "Capivari SP",
    label: "Capivari (SP)",
  },
  {
    value: "Capivari de Baixo SC",
    label: "Capivari de Baixo (SC)",
  },
  {
    value: "Capivari do Sul RS",
    label: "Capivari do Sul (RS)",
  },
  {
    value: "Capixaba AC",
    label: "Capixaba (AC)",
  },
  {
    value: "Capoeiras PE",
    label: "Capoeiras (PE)",
  },
  {
    value: "Caputira MG",
    label: "Caputira (MG)",
  },
  {
    value: "Capăo Alto SC",
    label: "Capăo Alto (SC)",
  },
  {
    value: "Capăo Bonito SP",
    label: "Capăo Bonito (SP)",
  },
  {
    value: "Capăo Bonito do Sul RS",
    label: "Capăo Bonito do Sul (RS)",
  },
  {
    value: "Capăo da Canoa RS",
    label: "Capăo da Canoa (RS)",
  },
  {
    value: "Capăo do Cipó RS",
    label: "Capăo do Cipó (RS)",
  },
  {
    value: "Capăo do Leăo RS",
    label: "Capăo do Leăo (RS)",
  },
  {
    value: "Caracaraí RR",
    label: "Caracaraí (RR)",
  },
  {
    value: "Caracol MS",
    label: "Caracol (MS)",
  },
  {
    value: "Caracol PI",
    label: "Caracol (PI)",
  },
  {
    value: "Caraguatatuba SP",
    label: "Caraguatatuba (SP)",
  },
  {
    value: "Carambeí PR",
    label: "Carambeí (PR)",
  },
  {
    value: "Caranaíba MG",
    label: "Caranaíba (MG)",
  },
  {
    value: "Carandaí MG",
    label: "Carandaí (MG)",
  },
  {
    value: "Carangola MG",
    label: "Carangola (MG)",
  },
  {
    value: "Carapebus RJ",
    label: "Carapebus (RJ)",
  },
  {
    value: "Carapicuíba SP",
    label: "Carapicuíba (SP)",
  },
  {
    value: "Caratinga MG",
    label: "Caratinga (MG)",
  },
  {
    value: "Carauari AM",
    label: "Carauari (AM)",
  },
  {
    value: "Caravelas BA",
    label: "Caravelas (BA)",
  },
  {
    value: "Carazinho RS",
    label: "Carazinho (RS)",
  },
  {
    value: "Caraá RS",
    label: "Caraá (RS)",
  },
  {
    value: "Caraí MG",
    label: "Caraí (MG)",
  },
  {
    value: "Caraíbas BA",
    label: "Caraíbas (BA)",
  },
  {
    value: "Caraúbas PB",
    label: "Caraúbas (PB)",
  },
  {
    value: "Caraúbas RN",
    label: "Caraúbas (RN)",
  },
  {
    value: "Caraúbas do Piauí PI",
    label: "Caraúbas do Piauí (PI)",
  },
  {
    value: "Carbonita MG",
    label: "Carbonita (MG)",
  },
  {
    value: "Cardeal da Silva BA",
    label: "Cardeal da Silva (BA)",
  },
  {
    value: "Cardoso SP",
    label: "Cardoso (SP)",
  },
  {
    value: "Cardoso Moreira RJ",
    label: "Cardoso Moreira (RJ)",
  },
  {
    value: "Careaçu MG",
    label: "Careaçu (MG)",
  },
  {
    value: "Careiro AM",
    label: "Careiro (AM)",
  },
  {
    value: "Careiro da Várzea AM",
    label: "Careiro da Várzea (AM)",
  },
  {
    value: "Cariacica ES",
    label: "Cariacica (ES)",
  },
  {
    value: "Caridade CE",
    label: "Caridade (CE)",
  },
  {
    value: "Caridade do Piauí PI",
    label: "Caridade do Piauí (PI)",
  },
  {
    value: "Carinhanha BA",
    label: "Carinhanha (BA)",
  },
  {
    value: "Carira SE",
    label: "Carira (SE)",
  },
  {
    value: "Cariri do Tocantins TO",
    label: "Cariri do Tocantins (TO)",
  },
  {
    value: "Caririaçu CE",
    label: "Caririaçu (CE)",
  },
  {
    value: "Cariré CE",
    label: "Cariré (CE)",
  },
  {
    value: "Cariús CE",
    label: "Cariús (CE)",
  },
  {
    value: "Carlinda MT",
    label: "Carlinda (MT)",
  },
  {
    value: "Carlos Barbosa RS",
    label: "Carlos Barbosa (RS)",
  },
  {
    value: "Carlos Chagas MG",
    label: "Carlos Chagas (MG)",
  },
  {
    value: "Carlos Gomes RS",
    label: "Carlos Gomes (RS)",
  },
  {
    value: "Carlópolis PR",
    label: "Carlópolis (PR)",
  },
  {
    value: "Carmo RJ",
    label: "Carmo (RJ)",
  },
  {
    value: "Carmo da Cachoeira MG",
    label: "Carmo da Cachoeira (MG)",
  },
  {
    value: "Carmo da Mata MG",
    label: "Carmo da Mata (MG)",
  },
  {
    value: "Carmo de Minas MG",
    label: "Carmo de Minas (MG)",
  },
  {
    value: "Carmo do Cajuru MG",
    label: "Carmo do Cajuru (MG)",
  },
  {
    value: "Carmo do Paranaíba MG",
    label: "Carmo do Paranaíba (MG)",
  },
  {
    value: "Carmo do Rio Claro MG",
    label: "Carmo do Rio Claro (MG)",
  },
  {
    value: "Carmo do Rio Verde GO",
    label: "Carmo do Rio Verde (GO)",
  },
  {
    value: "Carmolândia TO",
    label: "Carmolândia (TO)",
  },
  {
    value: "Carmésia MG",
    label: "Carmésia (MG)",
  },
  {
    value: "Carmópolis SE",
    label: "Carmópolis (SE)",
  },
  {
    value: "Carmópolis de Minas MG",
    label: "Carmópolis de Minas (MG)",
  },
  {
    value: "Carnaubais RN",
    label: "Carnaubais (RN)",
  },
  {
    value: "Carnaubal CE",
    label: "Carnaubal (CE)",
  },
  {
    value: "Carnaubeira da Penha PE",
    label: "Carnaubeira da Penha (PE)",
  },
  {
    value: "Carnaíba PE",
    label: "Carnaíba (PE)",
  },
  {
    value: "Carnaúba Dos Dantas RN",
    label: "Carnaúba Dos Dantas (RN)",
  },
  {
    value: "Carneirinho MG",
    label: "Carneirinho (MG)",
  },
  {
    value: "Carneiros AL",
    label: "Carneiros (AL)",
  },
  {
    value: "Caroebe RR",
    label: "Caroebe (RR)",
  },
  {
    value: "Carolina MA",
    label: "Carolina (MA)",
  },
  {
    value: "Carpina PE",
    label: "Carpina (PE)",
  },
  {
    value: "Carrancas MG",
    label: "Carrancas (MG)",
  },
  {
    value: "Carrapateira PB",
    label: "Carrapateira (PB)",
  },
  {
    value: "Carrasco Bonito TO",
    label: "Carrasco Bonito (TO)",
  },
  {
    value: "Caruaru PE",
    label: "Caruaru (PE)",
  },
  {
    value: "Carutapera MA",
    label: "Carutapera (MA)",
  },
  {
    value: "Carvalhos MG",
    label: "Carvalhos (MG)",
  },
  {
    value: "Carvalhópolis MG",
    label: "Carvalhópolis (MG)",
  },
  {
    value: "Casa Branca SP",
    label: "Casa Branca (SP)",
  },
  {
    value: "Casa Grande MG",
    label: "Casa Grande (MG)",
  },
  {
    value: "Casa Nova BA",
    label: "Casa Nova (BA)",
  },
  {
    value: "Casca RS",
    label: "Casca (RS)",
  },
  {
    value: "Cascalho Rico MG",
    label: "Cascalho Rico (MG)",
  },
  {
    value: "Cascavel CE",
    label: "Cascavel (CE)",
  },
  {
    value: "Cascavel PR",
    label: "Cascavel (PR)",
  },
  {
    value: "Caseara TO",
    label: "Caseara (TO)",
  },
  {
    value: "Caseiros RS",
    label: "Caseiros (RS)",
  },
  {
    value: "Casimiro de Abreu RJ",
    label: "Casimiro de Abreu (RJ)",
  },
  {
    value: "Casinhas PE",
    label: "Casinhas (PE)",
  },
  {
    value: "Casserengue PB",
    label: "Casserengue (PB)",
  },
  {
    value: "Cassilândia MS",
    label: "Cassilândia (MS)",
  },
  {
    value: "Castanhal PA",
    label: "Castanhal (PA)",
  },
  {
    value: "Castanheira MT",
    label: "Castanheira (MT)",
  },
  {
    value: "Castanheiras RO",
    label: "Castanheiras (RO)",
  },
  {
    value: "Castelo ES",
    label: "Castelo (ES)",
  },
  {
    value: "Castelo do Piauí PI",
    label: "Castelo do Piauí (PI)",
  },
  {
    value: "Castelândia GO",
    label: "Castelândia (GO)",
  },
  {
    value: "Castilho SP",
    label: "Castilho (SP)",
  },
  {
    value: "Castro PR",
    label: "Castro (PR)",
  },
  {
    value: "Castro Alves BA",
    label: "Castro Alves (BA)",
  },
  {
    value: "Cataguases MG",
    label: "Cataguases (MG)",
  },
  {
    value: "Catalăo GO",
    label: "Catalăo (GO)",
  },
  {
    value: "Catanduva SP",
    label: "Catanduva (SP)",
  },
  {
    value: "Catanduvas PR",
    label: "Catanduvas (PR)",
  },
  {
    value: "Catanduvas SC",
    label: "Catanduvas (SC)",
  },
  {
    value: "Catarina CE",
    label: "Catarina (CE)",
  },
  {
    value: "Catas Altas MG",
    label: "Catas Altas (MG)",
  },
  {
    value: "Catas Altas da Noruega MG",
    label: "Catas Altas da Noruega (MG)",
  },
  {
    value: "Catende PE",
    label: "Catende (PE)",
  },
  {
    value: "Catiguá SP",
    label: "Catiguá (SP)",
  },
  {
    value: "Catingueira PB",
    label: "Catingueira (PB)",
  },
  {
    value: "Catolândia BA",
    label: "Catolândia (BA)",
  },
  {
    value: "Catolé do Rocha PB",
    label: "Catolé do Rocha (PB)",
  },
  {
    value: "Catu BA",
    label: "Catu (BA)",
  },
  {
    value: "Catuji MG",
    label: "Catuji (MG)",
  },
  {
    value: "Catunda CE",
    label: "Catunda (CE)",
  },
  {
    value: "Caturama BA",
    label: "Caturama (BA)",
  },
  {
    value: "Caturaí GO",
    label: "Caturaí (GO)",
  },
  {
    value: "Caturité PB",
    label: "Caturité (PB)",
  },
  {
    value: "Catuti MG",
    label: "Catuti (MG)",
  },
  {
    value: "Catuípe RS",
    label: "Catuípe (RS)",
  },
  {
    value: "Caucaia CE",
    label: "Caucaia (CE)",
  },
  {
    value: "Cavalcante GO",
    label: "Cavalcante (GO)",
  },
  {
    value: "Caxambu MG",
    label: "Caxambu (MG)",
  },
  {
    value: "Caxambu do Sul SC",
    label: "Caxambu do Sul (SC)",
  },
  {
    value: "Caxias MA",
    label: "Caxias (MA)",
  },
  {
    value: "Caxias do Sul RS",
    label: "Caxias do Sul (RS)",
  },
  {
    value: "Caxingó PI",
    label: "Caxingó (PI)",
  },
  {
    value: "Caçador SC",
    label: "Caçador (SC)",
  },
  {
    value: "Caçapava SP",
    label: "Caçapava (SP)",
  },
  {
    value: "Caçapava do Sul RS",
    label: "Caçapava do Sul (RS)",
  },
  {
    value: "Caçu GO",
    label: "Caçu (GO)",
  },
  {
    value: "Caém BA",
    label: "Caém (BA)",
  },
  {
    value: "Ceará-mirim RN",
    label: "Ceará-mirim (RN)",
  },
  {
    value: "Cedral MA",
    label: "Cedral (MA)",
  },
  {
    value: "Cedral SP",
    label: "Cedral (SP)",
  },
  {
    value: "Cedro CE",
    label: "Cedro (CE)",
  },
  {
    value: "Cedro PE",
    label: "Cedro (PE)",
  },
  {
    value: "Cedro de Săo Joăo SE",
    label: "Cedro de Săo Joăo (SE)",
  },
  {
    value: "Cedro do Abaeté MG",
    label: "Cedro do Abaeté (MG)",
  },
  {
    value: "Celso Ramos SC",
    label: "Celso Ramos (SC)",
  },
  {
    value: "Centenário RS",
    label: "Centenário (RS)",
  },
  {
    value: "Centenário TO",
    label: "Centenário (TO)",
  },
  {
    value: "Centenário do Sul PR",
    label: "Centenário do Sul (PR)",
  },
  {
    value: "Central BA",
    label: "Central (BA)",
  },
  {
    value: "Central de Minas MG",
    label: "Central de Minas (MG)",
  },
  {
    value: "Central do Maranhăo MA",
    label: "Central do Maranhăo (MA)",
  },
  {
    value: "Centralina MG",
    label: "Centralina (MG)",
  },
  {
    value: "Centro Novo do Maranhă MA",
    label: "Centro Novo do Maranhăo (MA)",
  },
  {
    value: "Centro do Guilherme MA",
    label: "Centro do Guilherme (MA)",
  },
  {
    value: "Cerejeiras RO",
    label: "Cerejeiras (RO)",
  },
  {
    value: "Ceres GO",
    label: "Ceres (GO)",
  },
  {
    value: "Cerqueira César SP",
    label: "Cerqueira César (SP)",
  },
  {
    value: "Cerquilho SP",
    label: "Cerquilho (SP)",
  },
  {
    value: "Cerrito RS",
    label: "Cerrito (RS)",
  },
  {
    value: "Cerro Azul PR",
    label: "Cerro Azul (PR)",
  },
  {
    value: "Cerro Branco RS",
    label: "Cerro Branco (RS)",
  },
  {
    value: "Cerro Corá RN",
    label: "Cerro Corá (RN)",
  },
  {
    value: "Cerro Grande RS",
    label: "Cerro Grande (RS)",
  },
  {
    value: "Cerro Grande do Sul RS",
    label: "Cerro Grande do Sul (RS)",
  },
  {
    value: "Cerro Largo RS",
    label: "Cerro Largo (RS)",
  },
  {
    value: "Cerro Negro SC",
    label: "Cerro Negro (SC)",
  },
  {
    value: "Cesário Lange SP",
    label: "Cesário Lange (SP)",
  },
  {
    value: "Cezarina GO",
    label: "Cezarina (GO)",
  },
  {
    value: "Chalé MG",
    label: "Chalé (MG)",
  },
  {
    value: "Chapada RS",
    label: "Chapada (RS)",
  },
  {
    value: "Chapada Dos Guimarăes MT",
    label: "Chapada Dos Guimarăes (MT)",
  },
  {
    value: "Chapada Gaúcha MG",
    label: "Chapada Gaúcha (MG)",
  },
  {
    value: "Chapada da Natividade TO",
    label: "Chapada da Natividade (TO)",
  },
  {
    value: "Chapada de Areia TO",
    label: "Chapada de Areia (TO)",
  },
  {
    value: "Chapada do Norte MG",
    label: "Chapada do Norte (MG)",
  },
  {
    value: "Chapadinha MA",
    label: "Chapadinha (MA)",
  },
  {
    value: "Chapadăo do Céu GO",
    label: "Chapadăo do Céu (GO)",
  },
  {
    value: "Chapadăo do Lageado SC",
    label: "Chapadăo do Lageado (SC)",
  },
  {
    value: "Chapadăo do Sul MS",
    label: "Chapadăo do Sul (MS)",
  },
  {
    value: "Chapecó SC",
    label: "Chapecó (SC)",
  },
  {
    value: "Charqueada SP",
    label: "Charqueada (SP)",
  },
  {
    value: "Charqueadas RS",
    label: "Charqueadas (RS)",
  },
  {
    value: "Charrua RS",
    label: "Charrua (RS)",
  },
  {
    value: "Chaval CE",
    label: "Chaval (CE)",
  },
  {
    value: "Chavantes SP",
    label: "Chavantes (SP)",
  },
  {
    value: "Chaves PA",
    label: "Chaves (PA)",
  },
  {
    value: "Chiador MG",
    label: "Chiador (MG)",
  },
  {
    value: "Chiapetta RS",
    label: "Chiapetta (RS)",
  },
  {
    value: "Chopinzinho PR",
    label: "Chopinzinho (PR)",
  },
  {
    value: "Chorozinho CE",
    label: "Chorozinho (CE)",
  },
  {
    value: "Chorrochó BA",
    label: "Chorrochó (BA)",
  },
  {
    value: "Choró CE",
    label: "Choró (CE)",
  },
  {
    value: "Chupinguaia RO",
    label: "Chupinguaia (RO)",
  },
  {
    value: "Chuvisca RS",
    label: "Chuvisca (RS)",
  },
  {
    value: "Chuí RS",
    label: "Chuí (RS)",
  },
  {
    value: "Chácara MG",
    label: "Chácara (MG)",
  },
  {
    value: "Chă Grande PE",
    label: "Chă Grande (PE)",
  },
  {
    value: "Chă Preta AL",
    label: "Chă Preta (AL)",
  },
  {
    value: "Chă de Alegria PE",
    label: "Chă de Alegria (PE)",
  },
  {
    value: "Cianorte PR",
    label: "Cianorte (PR)",
  },
  {
    value: "Cidade Gaúcha PR",
    label: "Cidade Gaúcha (PR)",
  },
  {
    value: "Cidade Ocidental GO",
    label: "Cidade Ocidental (GO)",
  },
  {
    value: "Cidelândia MA",
    label: "Cidelândia (MA)",
  },
  {
    value: "Cidreira RS",
    label: "Cidreira (RS)",
  },
  {
    value: "Cipotânea MG",
    label: "Cipotânea (MG)",
  },
  {
    value: "Cipó BA",
    label: "Cipó (BA)",
  },
  {
    value: "Ciríaco RS",
    label: "Ciríaco (RS)",
  },
  {
    value: "Claraval MG",
    label: "Claraval (MG)",
  },
  {
    value: "Claro Dos Poçơes MG",
    label: "Claro Dos Poçơes (MG)",
  },
  {
    value: "Clementina SP",
    label: "Clementina (SP)",
  },
  {
    value: "Clevelândia PR",
    label: "Clevelândia (PR)",
  },
  {
    value: "Cláudia MT",
    label: "Cláudia (MT)",
  },
  {
    value: "Cláudio MG",
    label: "Cláudio (MG)",
  },
  {
    value: "Coaraci BA",
    label: "Coaraci (BA)",
  },
  {
    value: "Coari AM",
    label: "Coari (AM)",
  },
  {
    value: "Cocal PI",
    label: "Cocal (PI)",
  },
  {
    value: "Cocal Dos Alves PI",
    label: "Cocal Dos Alves (PI)",
  },
  {
    value: "Cocal de Telha PI",
    label: "Cocal de Telha (PI)",
  },
  {
    value: "Cocal do Sul SC",
    label: "Cocal do Sul (SC)",
  },
  {
    value: "Cocalinho MT",
    label: "Cocalinho (MT)",
  },
  {
    value: "Cocalzinho de Goiás GO",
    label: "Cocalzinho de Goiás (GO)",
  },
  {
    value: "Cocos BA",
    label: "Cocos (BA)",
  },
  {
    value: "Codajás AM",
    label: "Codajás (AM)",
  },
  {
    value: "Codó MA",
    label: "Codó (MA)",
  },
  {
    value: "Coelho Neto MA",
    label: "Coelho Neto (MA)",
  },
  {
    value: "Coimbra MG",
    label: "Coimbra (MG)",
  },
  {
    value: "Coité do Nóia AL",
    label: "Coité do Nóia (AL)",
  },
  {
    value: "Coivaras PI",
    label: "Coivaras (PI)",
  },
  {
    value: "Colares PA",
    label: "Colares (PA)",
  },
  {
    value: "Colatina ES",
    label: "Colatina (ES)",
  },
  {
    value: "Colina SP",
    label: "Colina (SP)",
  },
  {
    value: "Colinas MA",
    label: "Colinas (MA)",
  },
  {
    value: "Colinas RS",
    label: "Colinas (RS)",
  },
  {
    value: "Colinas do Sul GO",
    label: "Colinas do Sul (GO)",
  },
  {
    value: "Colinas do Tocantins TO",
    label: "Colinas do Tocantins (TO)",
  },
  {
    value: "Colméia TO",
    label: "Colméia (TO)",
  },
  {
    value: "Colniza MT",
    label: "Colniza (MT)",
  },
  {
    value: "Colombo PR",
    label: "Colombo (PR)",
  },
  {
    value: "Colorado PR",
    label: "Colorado (PR)",
  },
  {
    value: "Colorado RS",
    label: "Colorado (RS)",
  },
  {
    value: "Colorado do Oeste RO",
    label: "Colorado do Oeste (RO)",
  },
  {
    value: "Coluna MG",
    label: "Coluna (MG)",
  },
  {
    value: "Colíder MT",
    label: "Colíder (MT)",
  },
  {
    value: "Colômbia SP",
    label: "Colômbia (SP)",
  },
  {
    value: "Colônia Leopoldina AL",
    label: "Colônia Leopoldina (AL)",
  },
  {
    value: "Colônia do Gurguéia PI",
    label: "Colônia do Gurguéia (PI)",
  },
  {
    value: "Colônia do Piauí PI",
    label: "Colônia do Piauí (PI)",
  },
  {
    value: "Combinado TO",
    label: "Combinado (TO)",
  },
  {
    value: "Comendador Gomes MG",
    label: "Comendador Gomes (MG)",
  },
  {
    value: "Comendador Levy Gaspar RJ",
    label: "Comendador Levy Gasparian (RJ)",
  },
  {
    value: "Comercinho MG",
    label: "Comercinho (MG)",
  },
  {
    value: "Comodoro MT",
    label: "Comodoro (MT)",
  },
  {
    value: "Conceiçăo PB",
    label: "Conceiçăo (PB)",
  },
  {
    value: "Conceiçăo Das Alagoas MG",
    label: "Conceiçăo Das Alagoas (MG)",
  },
  {
    value: "Conceiçăo Das Pedras MG",
    label: "Conceiçăo Das Pedras (MG)",
  },
  {
    value: "Conceiçăo Dos Ouros MG",
    label: "Conceiçăo Dos Ouros (MG)",
  },
  {
    value: "Conceiçăo da Aparecida MG",
    label: "Conceiçăo da Aparecida (MG)",
  },
  {
    value: "Conceiçăo da Barra ES",
    label: "Conceiçăo da Barra (ES)",
  },
  {
    value: "Conceiçăo da Barra de  MG",
    label: "Conceiçăo da Barra de Minas (MG)",
  },
  {
    value: "Conceiçăo da Feira BA",
    label: "Conceiçăo da Feira (BA)",
  },
  {
    value: "Conceiçăo de Ipanema MG",
    label: "Conceiçăo de Ipanema (MG)",
  },
  {
    value: "Conceiçăo de Macabu RJ",
    label: "Conceiçăo de Macabu (RJ)",
  },
  {
    value: "Conceiçăo do Almeida BA",
    label: "Conceiçăo do Almeida (BA)",
  },
  {
    value: "Conceiçăo do Araguaia PA",
    label: "Conceiçăo do Araguaia (PA)",
  },
  {
    value: "Conceiçăo do Canindé PI",
    label: "Conceiçăo do Canindé (PI)",
  },
  {
    value: "Conceiçăo do Castelo ES",
    label: "Conceiçăo do Castelo (ES)",
  },
  {
    value: "Conceiçăo do Coité BA",
    label: "Conceiçăo do Coité (BA)",
  },
  {
    value: "Conceiçăo do Jacuípe BA",
    label: "Conceiçăo do Jacuípe (BA)",
  },
  {
    value: "Conceiçăo do Lago-açu MA",
    label: "Conceiçăo do Lago-açu (MA)",
  },
  {
    value: "Conceiçăo do Mato Dent MG",
    label: "Conceiçăo do Mato Dentro (MG)",
  },
  {
    value: "Conceiçăo do Pará MG",
    label: "Conceiçăo do Pará (MG)",
  },
  {
    value: "Conceiçăo do Rio Verde MG",
    label: "Conceiçăo do Rio Verde (MG)",
  },
  {
    value: "Conceiçăo do Tocantins TO",
    label: "Conceiçăo do Tocantins (TO)",
  },
  {
    value: "Conchal SP",
    label: "Conchal (SP)",
  },
  {
    value: "Conchas SP",
    label: "Conchas (SP)",
  },
  {
    value: "Concórdia SC",
    label: "Concórdia (SC)",
  },
  {
    value: "Concórdia do Pará PA",
    label: "Concórdia do Pará (PA)",
  },
  {
    value: "Condado PB",
    label: "Condado (PB)",
  },
  {
    value: "Condado PE",
    label: "Condado (PE)",
  },
  {
    value: "Conde BA",
    label: "Conde (BA)",
  },
  {
    value: "Conde PB",
    label: "Conde (PB)",
  },
  {
    value: "Condeúba BA",
    label: "Condeúba (BA)",
  },
  {
    value: "Condor RS",
    label: "Condor (RS)",
  },
  {
    value: "Confins MG",
    label: "Confins (MG)",
  },
  {
    value: "Confresa MT",
    label: "Confresa (MT)",
  },
  {
    value: "Congo PB",
    label: "Congo (PB)",
  },
  {
    value: "Congonhal MG",
    label: "Congonhal (MG)",
  },
  {
    value: "Congonhas MG",
    label: "Congonhas (MG)",
  },
  {
    value: "Congonhas do Norte MG",
    label: "Congonhas do Norte (MG)",
  },
  {
    value: "Congonhinhas PR",
    label: "Congonhinhas (PR)",
  },
  {
    value: "Conquista MG",
    label: "Conquista (MG)",
  },
  {
    value: "Conquista D´oeste MT",
    label: "Conquista D´oeste (MT)",
  },
  {
    value: "Conselheiro Lafaiete MG",
    label: "Conselheiro Lafaiete (MG)",
  },
  {
    value: "Conselheiro Mairinck PR",
    label: "Conselheiro Mairinck (PR)",
  },
  {
    value: "Conselheiro Pena MG",
    label: "Conselheiro Pena (MG)",
  },
  {
    value: "Consolaçăo MG",
    label: "Consolaçăo (MG)",
  },
  {
    value: "Constantina RS",
    label: "Constantina (RS)",
  },
  {
    value: "Contagem MG",
    label: "Contagem (MG)",
  },
  {
    value: "Contenda PR",
    label: "Contenda (PR)",
  },
  {
    value: "Contendas do Sincorá BA",
    label: "Contendas do Sincorá (BA)",
  },
  {
    value: "Coqueiral MG",
    label: "Coqueiral (MG)",
  },
  {
    value: "Coqueiro Baixo RS",
    label: "Coqueiro Baixo (RS)",
  },
  {
    value: "Coqueiro Seco AL",
    label: "Coqueiro Seco (AL)",
  },
  {
    value: "Coqueiros do Sul RS",
    label: "Coqueiros do Sul (RS)",
  },
  {
    value: "Coraçăo de Jesus MG",
    label: "Coraçăo de Jesus (MG)",
  },
  {
    value: "Coraçăo de Maria BA",
    label: "Coraçăo de Maria (BA)",
  },
  {
    value: "Corbélia PR",
    label: "Corbélia (PR)",
  },
  {
    value: "Cordeiro RJ",
    label: "Cordeiro (RJ)",
  },
  {
    value: "Cordeiros BA",
    label: "Cordeiros (BA)",
  },
  {
    value: "Cordeirópolis SP",
    label: "Cordeirópolis (SP)",
  },
  {
    value: "Cordilheira Alta SC",
    label: "Cordilheira Alta (SC)",
  },
  {
    value: "Cordisburgo MG",
    label: "Cordisburgo (MG)",
  },
  {
    value: "Cordislândia MG",
    label: "Cordislândia (MG)",
  },
  {
    value: "Coreaú CE",
    label: "Coreaú (CE)",
  },
  {
    value: "Coremas PB",
    label: "Coremas (PB)",
  },
  {
    value: "Corguinho MS",
    label: "Corguinho (MS)",
  },
  {
    value: "Coribe BA",
    label: "Coribe (BA)",
  },
  {
    value: "Corinto MG",
    label: "Corinto (MG)",
  },
  {
    value: "Cornélio Procópio PR",
    label: "Cornélio Procópio (PR)",
  },
  {
    value: "Coroaci MG",
    label: "Coroaci (MG)",
  },
  {
    value: "Coroados SP",
    label: "Coroados (SP)",
  },
  {
    value: "Coroatá MA",
    label: "Coroatá (MA)",
  },
  {
    value: "Coromandel MG",
    label: "Coromandel (MG)",
  },
  {
    value: "Coronel Barros RS",
    label: "Coronel Barros (RS)",
  },
  {
    value: "Coronel Bicaco RS",
    label: "Coronel Bicaco (RS)",
  },
  {
    value: "Coronel Domingos Soare PR",
    label: "Coronel Domingos Soares (PR)",
  },
  {
    value: "Coronel Ezequiel RN",
    label: "Coronel Ezequiel (RN)",
  },
  {
    value: "Coronel Fabriciano MG",
    label: "Coronel Fabriciano (MG)",
  },
  {
    value: "Coronel Freitas SC",
    label: "Coronel Freitas (SC)",
  },
  {
    value: "Coronel José Dias PI",
    label: "Coronel José Dias (PI)",
  },
  {
    value: "Coronel Joăo Pessoa RN",
    label: "Coronel Joăo Pessoa (RN)",
  },
  {
    value: "Coronel Joăo sá BA",
    label: "Coronel Joăo sá (BA)",
  },
  {
    value: "Coronel Macedo SP",
    label: "Coronel Macedo (SP)",
  },
  {
    value: "Coronel Martins SC",
    label: "Coronel Martins (SC)",
  },
  {
    value: "Coronel Murta MG",
    label: "Coronel Murta (MG)",
  },
  {
    value: "Coronel Pacheco MG",
    label: "Coronel Pacheco (MG)",
  },
  {
    value: "Coronel Pilar RS",
    label: "Coronel Pilar (RS)",
  },
  {
    value: "Coronel Sapucaia MS",
    label: "Coronel Sapucaia (MS)",
  },
  {
    value: "Coronel Vivida PR",
    label: "Coronel Vivida (PR)",
  },
  {
    value: "Coronel Xavier Chaves MG",
    label: "Coronel Xavier Chaves (MG)",
  },
  {
    value: "Correia Pinto SC",
    label: "Correia Pinto (SC)",
  },
  {
    value: "Corrente PI",
    label: "Corrente (PI)",
  },
  {
    value: "Correntes PE",
    label: "Correntes (PE)",
  },
  {
    value: "Correntina BA",
    label: "Correntina (BA)",
  },
  {
    value: "Cortês PE",
    label: "Cortês (PE)",
  },
  {
    value: "Corumbataí SP",
    label: "Corumbataí (SP)",
  },
  {
    value: "Corumbataí do Sul PR",
    label: "Corumbataí do Sul (PR)",
  },
  {
    value: "Corumbaíba GO",
    label: "Corumbaíba (GO)",
  },
  {
    value: "Corumbiara RO",
    label: "Corumbiara (RO)",
  },
  {
    value: "Corumbá MS",
    label: "Corumbá (MS)",
  },
  {
    value: "Corumbá de Goiás GO",
    label: "Corumbá de Goiás (GO)",
  },
  {
    value: "Corupá SC",
    label: "Corupá (SC)",
  },
  {
    value: "Coruripe AL",
    label: "Coruripe (AL)",
  },
  {
    value: "Cosmorama SP",
    label: "Cosmorama (SP)",
  },
  {
    value: "Cosmópolis SP",
    label: "Cosmópolis (SP)",
  },
  {
    value: "Costa Marques RO",
    label: "Costa Marques (RO)",
  },
  {
    value: "Costa Rica MS",
    label: "Costa Rica (MS)",
  },
  {
    value: "Cotegipe BA",
    label: "Cotegipe (BA)",
  },
  {
    value: "Cotia SP",
    label: "Cotia (SP)",
  },
  {
    value: "Cotiporă RS",
    label: "Cotiporă (RS)",
  },
  {
    value: "Cotriguaçu MT",
    label: "Cotriguaçu (MT)",
  },
  {
    value: "Couto de Magalhăes TO",
    label: "Couto de Magalhăes (TO)",
  },
  {
    value: "Couto de Magalhăes de  MG",
    label: "Couto de Magalhăes de Minas (MG)",
  },
  {
    value: "Coxilha RS",
    label: "Coxilha (RS)",
  },
  {
    value: "Coxim MS",
    label: "Coxim (MS)",
  },
  {
    value: "Coxixola PB",
    label: "Coxixola (PB)",
  },
  {
    value: "Crateús CE",
    label: "Crateús (CE)",
  },
  {
    value: "Crato CE",
    label: "Crato (CE)",
  },
  {
    value: "Cravinhos SP",
    label: "Cravinhos (SP)",
  },
  {
    value: "Cravolândia BA",
    label: "Cravolândia (BA)",
  },
  {
    value: "Craíbas AL",
    label: "Craíbas (AL)",
  },
  {
    value: "Criciúma SC",
    label: "Criciúma (SC)",
  },
  {
    value: "Crissiumal RS",
    label: "Crissiumal (RS)",
  },
  {
    value: "Cristais MG",
    label: "Cristais (MG)",
  },
  {
    value: "Cristais Paulista SP",
    label: "Cristais Paulista (SP)",
  },
  {
    value: "Cristal RS",
    label: "Cristal (RS)",
  },
  {
    value: "Cristal do Sul RS",
    label: "Cristal do Sul (RS)",
  },
  {
    value: "Cristalina GO",
    label: "Cristalina (GO)",
  },
  {
    value: "Cristalândia TO",
    label: "Cristalândia (TO)",
  },
  {
    value: "Cristalândia do Piauí PI",
    label: "Cristalândia do Piauí (PI)",
  },
  {
    value: "Cristiano Otoni MG",
    label: "Cristiano Otoni (MG)",
  },
  {
    value: "Cristianópolis GO",
    label: "Cristianópolis (GO)",
  },
  {
    value: "Cristina MG",
    label: "Cristina (MG)",
  },
  {
    value: "Cristino Castro PI",
    label: "Cristino Castro (PI)",
  },
  {
    value: "Cristinápolis SE",
    label: "Cristinápolis (SE)",
  },
  {
    value: "Cristália MG",
    label: "Cristália (MG)",
  },
  {
    value: "Cristópolis BA",
    label: "Cristópolis (BA)",
  },
  {
    value: "Crisólita MG",
    label: "Crisólita (MG)",
  },
  {
    value: "Crisópolis BA",
    label: "Crisópolis (BA)",
  },
  {
    value: "Crixás GO",
    label: "Crixás (GO)",
  },
  {
    value: "Crixás do Tocantins TO",
    label: "Crixás do Tocantins (TO)",
  },
  {
    value: "Croatá CE",
    label: "Croatá (CE)",
  },
  {
    value: "Cromínia GO",
    label: "Cromínia (GO)",
  },
  {
    value: "Crucilândia MG",
    label: "Crucilândia (MG)",
  },
  {
    value: "Cruz CE",
    label: "Cruz (CE)",
  },
  {
    value: "Cruz Alta RS",
    label: "Cruz Alta (RS)",
  },
  {
    value: "Cruz Das Almas BA",
    label: "Cruz Das Almas (BA)",
  },
  {
    value: "Cruz Machado PR",
    label: "Cruz Machado (PR)",
  },
  {
    value: "Cruz do Espírito Santo PB",
    label: "Cruz do Espírito Santo (PB)",
  },
  {
    value: "Cruzaltense RS",
    label: "Cruzaltense (RS)",
  },
  {
    value: "Cruzeiro SP",
    label: "Cruzeiro (SP)",
  },
  {
    value: "Cruzeiro da Fortaleza MG",
    label: "Cruzeiro da Fortaleza (MG)",
  },
  {
    value: "Cruzeiro do Iguaçu PR",
    label: "Cruzeiro do Iguaçu (PR)",
  },
  {
    value: "Cruzeiro do Oeste PR",
    label: "Cruzeiro do Oeste (PR)",
  },
  {
    value: "Cruzeiro do Sul AC",
    label: "Cruzeiro do Sul (AC)",
  },
  {
    value: "Cruzeiro do Sul PR",
    label: "Cruzeiro do Sul (PR)",
  },
  {
    value: "Cruzeiro do Sul RS",
    label: "Cruzeiro do Sul (RS)",
  },
  {
    value: "Cruzeta RN",
    label: "Cruzeta (RN)",
  },
  {
    value: "Cruzmaltina PR",
    label: "Cruzmaltina (PR)",
  },
  {
    value: "Cruzália SP",
    label: "Cruzália (SP)",
  },
  {
    value: "Cruzília MG",
    label: "Cruzília (MG)",
  },
  {
    value: "Cubati PB",
    label: "Cubati (PB)",
  },
  {
    value: "Cubatăo SP",
    label: "Cubatăo (SP)",
  },
  {
    value: "Cuiabá MT",
    label: "Cuiabá (MT)",
  },
  {
    value: "Cuitegi PB",
    label: "Cuitegi (PB)",
  },
  {
    value: "Cuité PB",
    label: "Cuité (PB)",
  },
  {
    value: "Cuité de Mamanguape PB",
    label: "Cuité de Mamanguape (PB)",
  },
  {
    value: "Cujubim RO",
    label: "Cujubim (RO)",
  },
  {
    value: "Cumari GO",
    label: "Cumari (GO)",
  },
  {
    value: "Cumaru PE",
    label: "Cumaru (PE)",
  },
  {
    value: "Cumaru do Norte PA",
    label: "Cumaru do Norte (PA)",
  },
  {
    value: "Cumbe SE",
    label: "Cumbe (SE)",
  },
  {
    value: "Cunha SP",
    label: "Cunha (SP)",
  },
  {
    value: "Cunha Poră SC",
    label: "Cunha Poră (SC)",
  },
  {
    value: "Cunhataí SC",
    label: "Cunhataí (SC)",
  },
  {
    value: "Cuparaque MG",
    label: "Cuparaque (MG)",
  },
  {
    value: "Cupira PE",
    label: "Cupira (PE)",
  },
  {
    value: "Curaçá BA",
    label: "Curaçá (BA)",
  },
  {
    value: "Curimatá PI",
    label: "Curimatá (PI)",
  },
  {
    value: "Curionópolis PA",
    label: "Curionópolis (PA)",
  },
  {
    value: "Curitiba PR",
    label: "Curitiba (PR)",
  },
  {
    value: "Curitibanos SC",
    label: "Curitibanos (SC)",
  },
  {
    value: "Curiúva PR",
    label: "Curiúva (PR)",
  },
  {
    value: "Currais PI",
    label: "Currais (PI)",
  },
  {
    value: "Currais Novos RN",
    label: "Currais Novos (RN)",
  },
  {
    value: "Curral Novo do Piauí PI",
    label: "Curral Novo do Piauí (PI)",
  },
  {
    value: "Curral Velho PB",
    label: "Curral Velho (PB)",
  },
  {
    value: "Curral de Cima PB",
    label: "Curral de Cima (PB)",
  },
  {
    value: "Curral de Dentro MG",
    label: "Curral de Dentro (MG)",
  },
  {
    value: "Curralinho PA",
    label: "Curralinho (PA)",
  },
  {
    value: "Curralinhos PI",
    label: "Curralinhos (PI)",
  },
  {
    value: "Cururupu MA",
    label: "Cururupu (MA)",
  },
  {
    value: "Curuá PA",
    label: "Curuá (PA)",
  },
  {
    value: "Curuçá PA",
    label: "Curuçá (PA)",
  },
  {
    value: "Curvelo MG",
    label: "Curvelo (MG)",
  },
  {
    value: "Curvelândia MT",
    label: "Curvelândia (MT)",
  },
  {
    value: "Custódia PE",
    label: "Custódia (PE)",
  },
  {
    value: "Cutias AP",
    label: "Cutias (AP)",
  },
  {
    value: "Cáceres MT",
    label: "Cáceres (MT)",
  },
  {
    value: "Cássia MG",
    label: "Cássia (MG)",
  },
  {
    value: "Cássia Dos Coqueiros SP",
    label: "Cássia Dos Coqueiros (SP)",
  },
  {
    value: "Cândido Godói RS",
    label: "Cândido Godói (RS)",
  },
  {
    value: "Cândido Mendes MA",
    label: "Cândido Mendes (MA)",
  },
  {
    value: "Cândido Mota SP",
    label: "Cândido Mota (SP)",
  },
  {
    value: "Cândido Rodrigues SP",
    label: "Cândido Rodrigues (SP)",
  },
  {
    value: "Cândido Sales BA",
    label: "Cândido Sales (BA)",
  },
  {
    value: "Cândido de Abreu PR",
    label: "Cândido de Abreu (PR)",
  },
  {
    value: "Céu Azul PR",
    label: "Céu Azul (PR)",
  },
  {
    value: "Cícero Dantas BA",
    label: "Cícero Dantas (BA)",
  },
  {
    value: "Córrego Danta MG",
    label: "Córrego Danta (MG)",
  },
  {
    value: "Córrego Fundo MG",
    label: "Córrego Fundo (MG)",
  },
  {
    value: "Córrego Novo MG",
    label: "Córrego Novo (MG)",
  },
  {
    value: "Córrego do Bom Jesus MG",
    label: "Córrego do Bom Jesus (MG)",
  },
  {
    value: "Córrego do Ouro GO",
    label: "Córrego do Ouro (GO)",
  },
  {
    value: "Cônego Marinho MG",
    label: "Cônego Marinho (MG)",
  },
  {
    value: "Damianópolis GO",
    label: "Damianópolis (GO)",
  },
  {
    value: "Damiăo PB",
    label: "Damiăo (PB)",
  },
  {
    value: "Damolândia GO",
    label: "Damolândia (GO)",
  },
  {
    value: "Darcinópolis TO",
    label: "Darcinópolis (TO)",
  },
  {
    value: "Datas MG",
    label: "Datas (MG)",
  },
  {
    value: "David Canabarro RS",
    label: "David Canabarro (RS)",
  },
  {
    value: "Davinópolis GO",
    label: "Davinópolis (GO)",
  },
  {
    value: "Davinópolis MA",
    label: "Davinópolis (MA)",
  },
  {
    value: "Delfim Moreira MG",
    label: "Delfim Moreira (MG)",
  },
  {
    value: "Delfinópolis MG",
    label: "Delfinópolis (MG)",
  },
  {
    value: "Delmiro Gouveia AL",
    label: "Delmiro Gouveia (AL)",
  },
  {
    value: "Delta MG",
    label: "Delta (MG)",
  },
  {
    value: "Demerval Lobăo PI",
    label: "Demerval Lobăo (PI)",
  },
  {
    value: "Denise MT",
    label: "Denise (MT)",
  },
  {
    value: "Deodápolis MS",
    label: "Deodápolis (MS)",
  },
  {
    value: "Deputado Irapuan Pinhe CE",
    label: "Deputado Irapuan Pinheiro (CE)",
  },
  {
    value: "Derrubadas RS",
    label: "Derrubadas (RS)",
  },
  {
    value: "Descalvado SP",
    label: "Descalvado (SP)",
  },
  {
    value: "Descanso SC",
    label: "Descanso (SC)",
  },
  {
    value: "Descoberto MG",
    label: "Descoberto (MG)",
  },
  {
    value: "Desterro PB",
    label: "Desterro (PB)",
  },
  {
    value: "Desterro de Entre Rios MG",
    label: "Desterro de Entre Rios (MG)",
  },
  {
    value: "Desterro do Melo MG",
    label: "Desterro do Melo (MG)",
  },
  {
    value: "Dezesseis de Novembro RS",
    label: "Dezesseis de Novembro (RS)",
  },
  {
    value: "Diadema SP",
    label: "Diadema (SP)",
  },
  {
    value: "Diamante PB",
    label: "Diamante (PB)",
  },
  {
    value: "Diamante D´oeste PR",
    label: "Diamante D´oeste (PR)",
  },
  {
    value: "Diamante do Norte PR",
    label: "Diamante do Norte (PR)",
  },
  {
    value: "Diamante do Sul PR",
    label: "Diamante do Sul (PR)",
  },
  {
    value: "Diamantina MG",
    label: "Diamantina (MG)",
  },
  {
    value: "Diamantino MT",
    label: "Diamantino (MT)",
  },
  {
    value: "Dianópolis TO",
    label: "Dianópolis (TO)",
  },
  {
    value: "Dias D´ávila BA",
    label: "Dias D´ávila (BA)",
  },
  {
    value: "Dilermando de Aguiar RS",
    label: "Dilermando de Aguiar (RS)",
  },
  {
    value: "Diogo de Vasconcelos MG",
    label: "Diogo de Vasconcelos (MG)",
  },
  {
    value: "Dionísio MG",
    label: "Dionísio (MG)",
  },
  {
    value: "Dionísio Cerqueira SC",
    label: "Dionísio Cerqueira (SC)",
  },
  {
    value: "Diorama GO",
    label: "Diorama (GO)",
  },
  {
    value: "Dirce Reis SP",
    label: "Dirce Reis (SP)",
  },
  {
    value: "Dirceu Arcoverde PI",
    label: "Dirceu Arcoverde (PI)",
  },
  {
    value: "Divina Pastora SE",
    label: "Divina Pastora (SE)",
  },
  {
    value: "Divino MG",
    label: "Divino (MG)",
  },
  {
    value: "Divino Das Laranjeiras MG",
    label: "Divino Das Laranjeiras (MG)",
  },
  {
    value: "Divino de Săo Lourenço ES",
    label: "Divino de Săo Lourenço (ES)",
  },
  {
    value: "Divinolândia SP",
    label: "Divinolândia (SP)",
  },
  {
    value: "Divinolândia de Minas MG",
    label: "Divinolândia de Minas (MG)",
  },
  {
    value: "Divinésia MG",
    label: "Divinésia (MG)",
  },
  {
    value: "Divinópolis MG",
    label: "Divinópolis (MG)",
  },
  {
    value: "Divinópolis de Goiás GO",
    label: "Divinópolis de Goiás (GO)",
  },
  {
    value: "Divinópolis do Tocanti TO",
    label: "Divinópolis do Tocantins (TO)",
  },
  {
    value: "Divisa Alegre MG",
    label: "Divisa Alegre (MG)",
  },
  {
    value: "Divisa Nova MG",
    label: "Divisa Nova (MG)",
  },
  {
    value: "Divisópolis MG",
    label: "Divisópolis (MG)",
  },
  {
    value: "Dobrada SP",
    label: "Dobrada (SP)",
  },
  {
    value: "Dois Córregos SP",
    label: "Dois Córregos (SP)",
  },
  {
    value: "Dois Irmăos RS",
    label: "Dois Irmăos (RS)",
  },
  {
    value: "Dois Irmăos Das Missơe RS",
    label: "Dois Irmăos Das Missơes (RS)",
  },
  {
    value: "Dois Irmăos do Buriti MS",
    label: "Dois Irmăos do Buriti (MS)",
  },
  {
    value: "Dois Irmăos do Tocanti TO",
    label: "Dois Irmăos do Tocantins (TO)",
  },
  {
    value: "Dois Lajeados RS",
    label: "Dois Lajeados (RS)",
  },
  {
    value: "Dois Riachos AL",
    label: "Dois Riachos (AL)",
  },
  {
    value: "Dois Vizinhos PR",
    label: "Dois Vizinhos (PR)",
  },
  {
    value: "Dolcinópolis SP",
    label: "Dolcinópolis (SP)",
  },
  {
    value: "Dom Aquino MT",
    label: "Dom Aquino (MT)",
  },
  {
    value: "Dom Basílio BA",
    label: "Dom Basílio (BA)",
  },
  {
    value: "Dom Bosco MG",
    label: "Dom Bosco (MG)",
  },
  {
    value: "Dom Cavati MG",
    label: "Dom Cavati (MG)",
  },
  {
    value: "Dom Eliseu PA",
    label: "Dom Eliseu (PA)",
  },
  {
    value: "Dom Expedito Lopes PI",
    label: "Dom Expedito Lopes (PI)",
  },
  {
    value: "Dom Feliciano RS",
    label: "Dom Feliciano (RS)",
  },
  {
    value: "Dom Inocêncio PI",
    label: "Dom Inocêncio (PI)",
  },
  {
    value: "Dom Joaquim MG",
    label: "Dom Joaquim (MG)",
  },
  {
    value: "Dom Macedo Costa BA",
    label: "Dom Macedo Costa (BA)",
  },
  {
    value: "Dom Pedrito RS",
    label: "Dom Pedrito (RS)",
  },
  {
    value: "Dom Pedro MA",
    label: "Dom Pedro (MA)",
  },
  {
    value: "Dom Pedro de Alcântara RS",
    label: "Dom Pedro de Alcântara (RS)",
  },
  {
    value: "Dom Silvério MG",
    label: "Dom Silvério (MG)",
  },
  {
    value: "Dom Viçoso MG",
    label: "Dom Viçoso (MG)",
  },
  {
    value: "Domingos Martins ES",
    label: "Domingos Martins (ES)",
  },
  {
    value: "Domingos Mourăo PI",
    label: "Domingos Mourăo (PI)",
  },
  {
    value: "Dona Emma SC",
    label: "Dona Emma (SC)",
  },
  {
    value: "Dona Eusébia MG",
    label: "Dona Eusébia (MG)",
  },
  {
    value: "Dona Francisca RS",
    label: "Dona Francisca (RS)",
  },
  {
    value: "Dona Inês PB",
    label: "Dona Inês (PB)",
  },
  {
    value: "Dores de Campos MG",
    label: "Dores de Campos (MG)",
  },
  {
    value: "Dores de Guanhăes MG",
    label: "Dores de Guanhăes (MG)",
  },
  {
    value: "Dores do Indaiá MG",
    label: "Dores do Indaiá (MG)",
  },
  {
    value: "Dores do Rio Preto ES",
    label: "Dores do Rio Preto (ES)",
  },
  {
    value: "Dores do Turvo MG",
    label: "Dores do Turvo (MG)",
  },
  {
    value: "Doresópolis MG",
    label: "Doresópolis (MG)",
  },
  {
    value: "Dormentes PE",
    label: "Dormentes (PE)",
  },
  {
    value: "Douradina MS",
    label: "Douradina (MS)",
  },
  {
    value: "Douradina PR",
    label: "Douradina (PR)",
  },
  {
    value: "Dourado SP",
    label: "Dourado (SP)",
  },
  {
    value: "Douradoquara MG",
    label: "Douradoquara (MG)",
  },
  {
    value: "Dourados MS",
    label: "Dourados (MS)",
  },
  {
    value: "Doutor Camargo PR",
    label: "Doutor Camargo (PR)",
  },
  {
    value: "Doutor Maurício Cardos RS",
    label: "Doutor Maurício Cardoso (RS)",
  },
  {
    value: "Doutor Pedrinho SC",
    label: "Doutor Pedrinho (SC)",
  },
  {
    value: "Doutor Ricardo RS",
    label: "Doutor Ricardo (RS)",
  },
  {
    value: "Doutor Severiano RN",
    label: "Doutor Severiano (RN)",
  },
  {
    value: "Doutor Ulysses PR",
    label: "Doutor Ulysses (PR)",
  },
  {
    value: "Doverlândia GO",
    label: "Doverlândia (GO)",
  },
  {
    value: "Dracena SP",
    label: "Dracena (SP)",
  },
  {
    value: "Duartina SP",
    label: "Duartina (SP)",
  },
  {
    value: "Duas Barras RJ",
    label: "Duas Barras (RJ)",
  },
  {
    value: "Duas Estradas PB",
    label: "Duas Estradas (PB)",
  },
  {
    value: "Dueré TO",
    label: "Dueré (TO)",
  },
  {
    value: "Dumont SP",
    label: "Dumont (SP)",
  },
  {
    value: "Duque Bacelar MA",
    label: "Duque Bacelar (MA)",
  },
  {
    value: "Duque de Caxias RJ",
    label: "Duque de Caxias (RJ)",
  },
  {
    value: "Durandé MG",
    label: "Durandé (MG)",
  },
  {
    value: "Dário Meira BA",
    label: "Dário Meira (BA)",
  },
  {
    value: "Echaporă SP",
    label: "Echaporă (SP)",
  },
  {
    value: "Ecoporanga ES",
    label: "Ecoporanga (ES)",
  },
  {
    value: "Edealina GO",
    label: "Edealina (GO)",
  },
  {
    value: "Edéia GO",
    label: "Edéia (GO)",
  },
  {
    value: "Eirunepé AM",
    label: "Eirunepé (AM)",
  },
  {
    value: "Eldorado MS",
    label: "Eldorado (MS)",
  },
  {
    value: "Eldorado SP",
    label: "Eldorado (SP)",
  },
  {
    value: "Eldorado Dos Carajás PA",
    label: "Eldorado Dos Carajás (PA)",
  },
  {
    value: "Eldorado do Sul RS",
    label: "Eldorado do Sul (RS)",
  },
  {
    value: "Elesbăo Veloso PI",
    label: "Elesbăo Veloso (PI)",
  },
  {
    value: "Elias Fausto SP",
    label: "Elias Fausto (SP)",
  },
  {
    value: "Eliseu Martins PI",
    label: "Eliseu Martins (PI)",
  },
  {
    value: "Elisiário SP",
    label: "Elisiário (SP)",
  },
  {
    value: "Elísio Medrado BA",
    label: "Elísio Medrado (BA)",
  },
  {
    value: "Elói Mendes MG",
    label: "Elói Mendes (MG)",
  },
  {
    value: "Emas PB",
    label: "Emas (PB)",
  },
  {
    value: "Embaúba SP",
    label: "Embaúba (SP)",
  },
  {
    value: "Embu SP",
    label: "Embu (SP)",
  },
  {
    value: "Embu-guaçu SP",
    label: "Embu-guaçu (SP)",
  },
  {
    value: "Emilianópolis SP",
    label: "Emilianópolis (SP)",
  },
  {
    value: "Encantado RS",
    label: "Encantado (RS)",
  },
  {
    value: "Encanto RN",
    label: "Encanto (RN)",
  },
  {
    value: "Encruzilhada BA",
    label: "Encruzilhada (BA)",
  },
  {
    value: "Encruzilhada do Sul RS",
    label: "Encruzilhada do Sul (RS)",
  },
  {
    value: "Engenheiro Beltrăo PR",
    label: "Engenheiro Beltrăo (PR)",
  },
  {
    value: "Engenheiro Caldas MG",
    label: "Engenheiro Caldas (MG)",
  },
  {
    value: "Engenheiro Coelho SP",
    label: "Engenheiro Coelho (SP)",
  },
  {
    value: "Engenheiro Navarro MG",
    label: "Engenheiro Navarro (MG)",
  },
  {
    value: "Engenheiro Paulo de Fr RJ",
    label: "Engenheiro Paulo de Frontin (RJ)",
  },
  {
    value: "Engenho Velho RS",
    label: "Engenho Velho (RS)",
  },
  {
    value: "Entre Folhas MG",
    label: "Entre Folhas (MG)",
  },
  {
    value: "Entre Rios BA",
    label: "Entre Rios (BA)",
  },
  {
    value: "Entre Rios SC",
    label: "Entre Rios (SC)",
  },
  {
    value: "Entre Rios de Minas MG",
    label: "Entre Rios de Minas (MG)",
  },
  {
    value: "Entre Rios do Oeste PR",
    label: "Entre Rios do Oeste (PR)",
  },
  {
    value: "Entre Rios do Sul RS",
    label: "Entre Rios do Sul (RS)",
  },
  {
    value: "Entre-ijuís RS",
    label: "Entre-ijuís (RS)",
  },
  {
    value: "Envira AM",
    label: "Envira (AM)",
  },
  {
    value: "Enéas Marques PR",
    label: "Enéas Marques (PR)",
  },
  {
    value: "Epitaciolândia AC",
    label: "Epitaciolândia (AC)",
  },
  {
    value: "Equador RN",
    label: "Equador (RN)",
  },
  {
    value: "Erebango RS",
    label: "Erebango (RS)",
  },
  {
    value: "Erechim RS",
    label: "Erechim (RS)",
  },
  {
    value: "Ererê CE",
    label: "Ererê (CE)",
  },
  {
    value: "Ermo SC",
    label: "Ermo (SC)",
  },
  {
    value: "Ernestina RS",
    label: "Ernestina (RS)",
  },
  {
    value: "Erval Grande RS",
    label: "Erval Grande (RS)",
  },
  {
    value: "Erval Seco RS",
    label: "Erval Seco (RS)",
  },
  {
    value: "Erval Velho SC",
    label: "Erval Velho (SC)",
  },
  {
    value: "Ervália MG",
    label: "Ervália (MG)",
  },
  {
    value: "Escada PE",
    label: "Escada (PE)",
  },
  {
    value: "Esmeralda RS",
    label: "Esmeralda (RS)",
  },
  {
    value: "Esmeraldas MG",
    label: "Esmeraldas (MG)",
  },
  {
    value: "Espera Feliz MG",
    label: "Espera Feliz (MG)",
  },
  {
    value: "Esperantina PI",
    label: "Esperantina (PI)",
  },
  {
    value: "Esperantina TO",
    label: "Esperantina (TO)",
  },
  {
    value: "Esperantinópolis MA",
    label: "Esperantinópolis (MA)",
  },
  {
    value: "Esperança PB",
    label: "Esperança (PB)",
  },
  {
    value: "Esperança Nova PR",
    label: "Esperança Nova (PR)",
  },
  {
    value: "Esperança do Sul RS",
    label: "Esperança do Sul (RS)",
  },
  {
    value: "Espigăo Alto do Iguaçu PR",
    label: "Espigăo Alto do Iguaçu (PR)",
  },
  {
    value: "Espigăo D´oeste RO",
    label: "Espigăo D´oeste (RO)",
  },
  {
    value: "Espinosa MG",
    label: "Espinosa (MG)",
  },
  {
    value: "Esplanada BA",
    label: "Esplanada (BA)",
  },
  {
    value: "Espumoso RS",
    label: "Espumoso (RS)",
  },
  {
    value: "Espírito Santo RN",
    label: "Espírito Santo (RN)",
  },
  {
    value: "Espírito Santo do Dour MG",
    label: "Espírito Santo do Dourado (MG)",
  },
  {
    value: "Espírito Santo do Pinh SP",
    label: "Espírito Santo do Pinhal (SP)",
  },
  {
    value: "Espírito Santo do Turv SP",
    label: "Espírito Santo do Turvo (SP)",
  },
  {
    value: "Estaçăo RS",
    label: "Estaçăo (RS)",
  },
  {
    value: "Esteio RS",
    label: "Esteio (RS)",
  },
  {
    value: "Estiva MG",
    label: "Estiva (MG)",
  },
  {
    value: "Estiva Gerbi SP",
    label: "Estiva Gerbi (SP)",
  },
  {
    value: "Estreito MA",
    label: "Estreito (MA)",
  },
  {
    value: "Estrela RS",
    label: "Estrela (RS)",
  },
  {
    value: "Estrela Dalva MG",
    label: "Estrela Dalva (MG)",
  },
  {
    value: "Estrela D´oeste SP",
    label: "Estrela D´oeste (SP)",
  },
  {
    value: "Estrela Velha RS",
    label: "Estrela Velha (RS)",
  },
  {
    value: "Estrela de Alagoas AL",
    label: "Estrela de Alagoas (AL)",
  },
  {
    value: "Estrela do Indaiá MG",
    label: "Estrela do Indaiá (MG)",
  },
  {
    value: "Estrela do Norte GO",
    label: "Estrela do Norte (GO)",
  },
  {
    value: "Estrela do Norte SP",
    label: "Estrela do Norte (SP)",
  },
  {
    value: "Estrela do Sul MG",
    label: "Estrela do Sul (MG)",
  },
  {
    value: "Estância SE",
    label: "Estância (SE)",
  },
  {
    value: "Estância Velha RS",
    label: "Estância Velha (RS)",
  },
  {
    value: "Euclides da Cunha BA",
    label: "Euclides da Cunha (BA)",
  },
  {
    value: "Euclides da Cunha Paul SP",
    label: "Euclides da Cunha Paulista (SP)",
  },
  {
    value: "Eugenópolis MG",
    label: "Eugenópolis (MG)",
  },
  {
    value: "Eugênio de Castro RS",
    label: "Eugênio de Castro (RS)",
  },
  {
    value: "Eunápolis BA",
    label: "Eunápolis (BA)",
  },
  {
    value: "Eusébio CE",
    label: "Eusébio (CE)",
  },
  {
    value: "Ewbank da Câmara MG",
    label: "Ewbank da Câmara (MG)",
  },
  {
    value: "Extrema MG",
    label: "Extrema (MG)",
  },
  {
    value: "Extremoz RN",
    label: "Extremoz (RN)",
  },
  {
    value: "Exu PE",
    label: "Exu (PE)",
  },
  {
    value: "Fagundes PB",
    label: "Fagundes (PB)",
  },
  {
    value: "Fagundes Varela RS",
    label: "Fagundes Varela (RS)",
  },
  {
    value: "Faina GO",
    label: "Faina (GO)",
  },
  {
    value: "Fama MG",
    label: "Fama (MG)",
  },
  {
    value: "Faria Lemos MG",
    label: "Faria Lemos (MG)",
  },
  {
    value: "Farias Brito CE",
    label: "Farias Brito (CE)",
  },
  {
    value: "Faro PA",
    label: "Faro (PA)",
  },
  {
    value: "Farol PR",
    label: "Farol (PR)",
  },
  {
    value: "Farroupilha RS",
    label: "Farroupilha (RS)",
  },
  {
    value: "Fartura SP",
    label: "Fartura (SP)",
  },
  {
    value: "Fartura do Piauí PI",
    label: "Fartura do Piauí (PI)",
  },
  {
    value: "Faxinal PR",
    label: "Faxinal (PR)",
  },
  {
    value: "Faxinal Dos Guedes SC",
    label: "Faxinal Dos Guedes (SC)",
  },
  {
    value: "Faxinal do Soturno RS",
    label: "Faxinal do Soturno (RS)",
  },
  {
    value: "Faxinalzinho RS",
    label: "Faxinalzinho (RS)",
  },
  {
    value: "Fazenda Nova GO",
    label: "Fazenda Nova (GO)",
  },
  {
    value: "Fazenda Rio Grande PR",
    label: "Fazenda Rio Grande (PR)",
  },
  {
    value: "Fazenda Vilanova RS",
    label: "Fazenda Vilanova (RS)",
  },
  {
    value: "Feijó AC",
    label: "Feijó (AC)",
  },
  {
    value: "Feira Grande AL",
    label: "Feira Grande (AL)",
  },
  {
    value: "Feira Nova PE",
    label: "Feira Nova (PE)",
  },
  {
    value: "Feira Nova SE",
    label: "Feira Nova (SE)",
  },
  {
    value: "Feira Nova do Maranhăo MA",
    label: "Feira Nova do Maranhăo (MA)",
  },
  {
    value: "Feira da Mata BA",
    label: "Feira da Mata (BA)",
  },
  {
    value: "Feira de Santana BA",
    label: "Feira de Santana (BA)",
  },
  {
    value: "Felipe Guerra RN",
    label: "Felipe Guerra (RN)",
  },
  {
    value: "Felisburgo MG",
    label: "Felisburgo (MG)",
  },
  {
    value: "Felixlândia MG",
    label: "Felixlândia (MG)",
  },
  {
    value: "Feliz RS",
    label: "Feliz (RS)",
  },
  {
    value: "Feliz Deserto AL",
    label: "Feliz Deserto (AL)",
  },
  {
    value: "Feliz Natal MT",
    label: "Feliz Natal (MT)",
  },
  {
    value: "Felício Dos Santos MG",
    label: "Felício Dos Santos (MG)",
  },
  {
    value: "Fernandes Pinheiro PR",
    label: "Fernandes Pinheiro (PR)",
  },
  {
    value: "Fernandes Tourinho MG",
    label: "Fernandes Tourinho (MG)",
  },
  {
    value: "Fernando Falcăo MA",
    label: "Fernando Falcăo (MA)",
  },
  {
    value: "Fernando Pedroza RN",
    label: "Fernando Pedroza (RN)",
  },
  {
    value: "Fernando Prestes SP",
    label: "Fernando Prestes (SP)",
  },
  {
    value: "Fernando de Noronha PE",
    label: "Fernando de Noronha (PE)",
  },
  {
    value: "Fernandópolis SP",
    label: "Fernandópolis (SP)",
  },
  {
    value: "Fernăo SP",
    label: "Fernăo (SP)",
  },
  {
    value: "Ferraz de Vasconcelos SP",
    label: "Ferraz de Vasconcelos (SP)",
  },
  {
    value: "Ferreira Gomes AP",
    label: "Ferreira Gomes (AP)",
  },
  {
    value: "Ferreiros PE",
    label: "Ferreiros (PE)",
  },
  {
    value: "Ferros MG",
    label: "Ferros (MG)",
  },
  {
    value: "Fervedouro MG",
    label: "Fervedouro (MG)",
  },
  {
    value: "Figueira PR",
    label: "Figueira (PR)",
  },
  {
    value: "Figueirópolis TO",
    label: "Figueirópolis (TO)",
  },
  {
    value: "Figueirópolis D´oeste MT",
    label: "Figueirópolis D´oeste (MT)",
  },
  {
    value: "Figueirăo MS",
    label: "Figueirăo (MS)",
  },
  {
    value: "Filadélfia BA",
    label: "Filadélfia (BA)",
  },
  {
    value: "Filadélfia TO",
    label: "Filadélfia (TO)",
  },
  {
    value: "Firmino Alves BA",
    label: "Firmino Alves (BA)",
  },
  {
    value: "Firminópolis GO",
    label: "Firminópolis (GO)",
  },
  {
    value: "Flexeiras AL",
    label: "Flexeiras (AL)",
  },
  {
    value: "Flor da Serra do Sul PR",
    label: "Flor da Serra do Sul (PR)",
  },
  {
    value: "Flor do Sertăo SC",
    label: "Flor do Sertăo (SC)",
  },
  {
    value: "Flora Rica SP",
    label: "Flora Rica (SP)",
  },
  {
    value: "Floraí PR",
    label: "Floraí (PR)",
  },
  {
    value: "Floreal SP",
    label: "Floreal (SP)",
  },
  {
    value: "Flores PE",
    label: "Flores (PE)",
  },
  {
    value: "Flores da Cunha RS",
    label: "Flores da Cunha (RS)",
  },
  {
    value: "Flores de Goiás GO",
    label: "Flores de Goiás (GO)",
  },
  {
    value: "Flores do Piauí PI",
    label: "Flores do Piauí (PI)",
  },
  {
    value: "Floresta PE",
    label: "Floresta (PE)",
  },
  {
    value: "Floresta PR",
    label: "Floresta (PR)",
  },
  {
    value: "Floresta Azul BA",
    label: "Floresta Azul (BA)",
  },
  {
    value: "Floresta do Araguaia PA",
    label: "Floresta do Araguaia (PA)",
  },
  {
    value: "Floresta do Piauí PI",
    label: "Floresta do Piauí (PI)",
  },
  {
    value: "Florestal MG",
    label: "Florestal (MG)",
  },
  {
    value: "Florestópolis PR",
    label: "Florestópolis (PR)",
  },
  {
    value: "Floriano PI",
    label: "Floriano (PI)",
  },
  {
    value: "Floriano Peixoto RS",
    label: "Floriano Peixoto (RS)",
  },
  {
    value: "Florianópolis SC",
    label: "Florianópolis (SC)",
  },
  {
    value: "Florânia RN",
    label: "Florânia (RN)",
  },
  {
    value: "Florínia SP",
    label: "Florínia (SP)",
  },
  {
    value: "Flórida PR",
    label: "Flórida (PR)",
  },
  {
    value: "Flórida Paulista SP",
    label: "Flórida Paulista (SP)",
  },
  {
    value: "Fonte Boa AM",
    label: "Fonte Boa (AM)",
  },
  {
    value: "Fontoura Xavier RS",
    label: "Fontoura Xavier (RS)",
  },
  {
    value: "Formiga MG",
    label: "Formiga (MG)",
  },
  {
    value: "Formigueiro RS",
    label: "Formigueiro (RS)",
  },
  {
    value: "Formosa GO",
    label: "Formosa (GO)",
  },
  {
    value: "Formosa da Serra Negra MA",
    label: "Formosa da Serra Negra (MA)",
  },
  {
    value: "Formosa do Oeste PR",
    label: "Formosa do Oeste (PR)",
  },
  {
    value: "Formosa do Rio Preto BA",
    label: "Formosa do Rio Preto (BA)",
  },
  {
    value: "Formosa do Sul SC",
    label: "Formosa do Sul (SC)",
  },
  {
    value: "Formoso GO",
    label: "Formoso (GO)",
  },
  {
    value: "Formoso MG",
    label: "Formoso (MG)",
  },
  {
    value: "Formoso do Araguaia TO",
    label: "Formoso do Araguaia (TO)",
  },
  {
    value: "Forquetinha RS",
    label: "Forquetinha (RS)",
  },
  {
    value: "Forquilha CE",
    label: "Forquilha (CE)",
  },
  {
    value: "Forquilhinha SC",
    label: "Forquilhinha (SC)",
  },
  {
    value: "Fortaleza CE",
    label: "Fortaleza (CE)",
  },
  {
    value: "Fortaleza Dos Nogueira MA",
    label: "Fortaleza Dos Nogueiras (MA)",
  },
  {
    value: "Fortaleza Dos Valos RS",
    label: "Fortaleza Dos Valos (RS)",
  },
  {
    value: "Fortaleza de Minas MG",
    label: "Fortaleza de Minas (MG)",
  },
  {
    value: "Fortaleza do Tabocăo TO",
    label: "Fortaleza do Tabocăo (TO)",
  },
  {
    value: "Fortim CE",
    label: "Fortim (CE)",
  },
  {
    value: "Fortuna MA",
    label: "Fortuna (MA)",
  },
  {
    value: "Fortuna de Minas MG",
    label: "Fortuna de Minas (MG)",
  },
  {
    value: "Foz do Iguaçu PR",
    label: "Foz do Iguaçu (PR)",
  },
  {
    value: "Foz do Jordăo PR",
    label: "Foz do Jordăo (PR)",
  },
  {
    value: "Fraiburgo SC",
    label: "Fraiburgo (SC)",
  },
  {
    value: "Franca SP",
    label: "Franca (SP)",
  },
  {
    value: "Francinópolis PI",
    label: "Francinópolis (PI)",
  },
  {
    value: "Francisco Alves PR",
    label: "Francisco Alves (PR)",
  },
  {
    value: "Francisco Ayres PI",
    label: "Francisco Ayres (PI)",
  },
  {
    value: "Francisco Badaró MG",
    label: "Francisco Badaró (MG)",
  },
  {
    value: "Francisco Beltrăo PR",
    label: "Francisco Beltrăo (PR)",
  },
  {
    value: "Francisco Dantas RN",
    label: "Francisco Dantas (RN)",
  },
  {
    value: "Francisco Dumont MG",
    label: "Francisco Dumont (MG)",
  },
  {
    value: "Francisco Macedo PI",
    label: "Francisco Macedo (PI)",
  },
  {
    value: "Francisco Morato SP",
    label: "Francisco Morato (SP)",
  },
  {
    value: "Francisco Santos PI",
    label: "Francisco Santos (PI)",
  },
  {
    value: "Francisco sá MG",
    label: "Francisco sá (MG)",
  },
  {
    value: "Franciscópolis MG",
    label: "Franciscópolis (MG)",
  },
  {
    value: "Franco da Rocha SP",
    label: "Franco da Rocha (SP)",
  },
  {
    value: "Frecheirinha CE",
    label: "Frecheirinha (CE)",
  },
  {
    value: "Frederico Westphalen RS",
    label: "Frederico Westphalen (RS)",
  },
  {
    value: "Frei Gaspar MG",
    label: "Frei Gaspar (MG)",
  },
  {
    value: "Frei Inocêncio MG",
    label: "Frei Inocêncio (MG)",
  },
  {
    value: "Frei Lagonegro MG",
    label: "Frei Lagonegro (MG)",
  },
  {
    value: "Frei Martinho PB",
    label: "Frei Martinho (PB)",
  },
  {
    value: "Frei Miguelinho PE",
    label: "Frei Miguelinho (PE)",
  },
  {
    value: "Frei Paulo SE",
    label: "Frei Paulo (SE)",
  },
  {
    value: "Frei Rogério SC",
    label: "Frei Rogério (SC)",
  },
  {
    value: "Fronteira MG",
    label: "Fronteira (MG)",
  },
  {
    value: "Fronteira Dos Vales MG",
    label: "Fronteira Dos Vales (MG)",
  },
  {
    value: "Fronteiras PI",
    label: "Fronteiras (PI)",
  },
  {
    value: "Fruta de Leite MG",
    label: "Fruta de Leite (MG)",
  },
  {
    value: "Frutal MG",
    label: "Frutal (MG)",
  },
  {
    value: "Frutuoso Gomes RN",
    label: "Frutuoso Gomes (RN)",
  },
  {
    value: "Fundăo ES",
    label: "Fundăo (ES)",
  },
  {
    value: "Funilândia MG",
    label: "Funilândia (MG)",
  },
  {
    value: "Fátima BA",
    label: "Fátima (BA)",
  },
  {
    value: "Fátima TO",
    label: "Fátima (TO)",
  },
  {
    value: "Fátima do Sul MS",
    label: "Fátima do Sul (MS)",
  },
  {
    value: "Fênix PR",
    label: "Fênix (PR)",
  },
  {
    value: "Gabriel Monteiro SP",
    label: "Gabriel Monteiro (SP)",
  },
  {
    value: "Gado Bravo PB",
    label: "Gado Bravo (PB)",
  },
  {
    value: "Galiléia MG",
    label: "Galiléia (MG)",
  },
  {
    value: "Galinhos RN",
    label: "Galinhos (RN)",
  },
  {
    value: "Galvăo SC",
    label: "Galvăo (SC)",
  },
  {
    value: "Gameleira PE",
    label: "Gameleira (PE)",
  },
  {
    value: "Gameleira de Goiás GO",
    label: "Gameleira de Goiás (GO)",
  },
  {
    value: "Gameleiras MG",
    label: "Gameleiras (MG)",
  },
  {
    value: "Gandu BA",
    label: "Gandu (BA)",
  },
  {
    value: "Garanhuns PE",
    label: "Garanhuns (PE)",
  },
  {
    value: "Gararu SE",
    label: "Gararu (SE)",
  },
  {
    value: "Garibaldi RS",
    label: "Garibaldi (RS)",
  },
  {
    value: "Garopaba SC",
    label: "Garopaba (SC)",
  },
  {
    value: "Garrafăo do Norte PA",
    label: "Garrafăo do Norte (PA)",
  },
  {
    value: "Garruchos RS",
    label: "Garruchos (RS)",
  },
  {
    value: "Garuva SC",
    label: "Garuva (SC)",
  },
  {
    value: "Garça SP",
    label: "Garça (SP)",
  },
  {
    value: "Gaspar SC",
    label: "Gaspar (SC)",
  },
  {
    value: "Gastăo Vidigal SP",
    label: "Gastăo Vidigal (SP)",
  },
  {
    value: "Gaurama RS",
    label: "Gaurama (RS)",
  },
  {
    value: "Gaviăo BA",
    label: "Gaviăo (BA)",
  },
  {
    value: "Gaviăo Peixoto SP",
    label: "Gaviăo Peixoto (SP)",
  },
  {
    value: "Gaúcha do Norte MT",
    label: "Gaúcha do Norte (MT)",
  },
  {
    value: "Geminiano PI",
    label: "Geminiano (PI)",
  },
  {
    value: "General Carneiro MT",
    label: "General Carneiro (MT)",
  },
  {
    value: "General Carneiro PR",
    label: "General Carneiro (PR)",
  },
  {
    value: "General Câmara RS",
    label: "General Câmara (RS)",
  },
  {
    value: "General Maynard SE",
    label: "General Maynard (SE)",
  },
  {
    value: "General Salgado SP",
    label: "General Salgado (SP)",
  },
  {
    value: "General Sampaio CE",
    label: "General Sampaio (CE)",
  },
  {
    value: "Gentil RS",
    label: "Gentil (RS)",
  },
  {
    value: "Gentio do Ouro BA",
    label: "Gentio do Ouro (BA)",
  },
  {
    value: "Getulina SP",
    label: "Getulina (SP)",
  },
  {
    value: "Getúlio Vargas RS",
    label: "Getúlio Vargas (RS)",
  },
  {
    value: "Gilbués PI",
    label: "Gilbués (PI)",
  },
  {
    value: "Girau do Ponciano AL",
    label: "Girau do Ponciano (AL)",
  },
  {
    value: "Giruá RS",
    label: "Giruá (RS)",
  },
  {
    value: "Glaucilândia MG",
    label: "Glaucilândia (MG)",
  },
  {
    value: "Glicério SP",
    label: "Glicério (SP)",
  },
  {
    value: "Glorinha RS",
    label: "Glorinha (RS)",
  },
  {
    value: "Glória BA",
    label: "Glória (BA)",
  },
  {
    value: "Glória D´oeste MT",
    label: "Glória D´oeste (MT)",
  },
  {
    value: "Glória de Dourados MS",
    label: "Glória de Dourados (MS)",
  },
  {
    value: "Glória do Goitá PE",
    label: "Glória do Goitá (PE)",
  },
  {
    value: "Godofredo Viana MA",
    label: "Godofredo Viana (MA)",
  },
  {
    value: "Godoy Moreira PR",
    label: "Godoy Moreira (PR)",
  },
  {
    value: "Goiabeira MG",
    label: "Goiabeira (MG)",
  },
  {
    value: "Goiana PE",
    label: "Goiana (PE)",
  },
  {
    value: "Goiandira GO",
    label: "Goiandira (GO)",
  },
  {
    value: "Goianinha RN",
    label: "Goianinha (RN)",
  },
  {
    value: "Goianira GO",
    label: "Goianira (GO)",
  },
  {
    value: "Goianorte TO",
    label: "Goianorte (TO)",
  },
  {
    value: "Goianá MG",
    label: "Goianá (MG)",
  },
  {
    value: "Goianápolis GO",
    label: "Goianápolis (GO)",
  },
  {
    value: "Goianésia GO",
    label: "Goianésia (GO)",
  },
  {
    value: "Goianésia do Pará PA",
    label: "Goianésia do Pará (PA)",
  },
  {
    value: "Goiatins TO",
    label: "Goiatins (TO)",
  },
  {
    value: "Goiatuba GO",
    label: "Goiatuba (GO)",
  },
  {
    value: "Goioerê PR",
    label: "Goioerê (PR)",
  },
  {
    value: "Goioxim PR",
    label: "Goioxim (PR)",
  },
  {
    value: "Goiás GO",
    label: "Goiás (GO)",
  },
  {
    value: "Goiânia GO",
    label: "Goiânia (GO)",
  },
  {
    value: "Gongogi BA",
    label: "Gongogi (BA)",
  },
  {
    value: "Gonzaga MG",
    label: "Gonzaga (MG)",
  },
  {
    value: "Gonçalves MG",
    label: "Gonçalves (MG)",
  },
  {
    value: "Gonçalves Dias MA",
    label: "Gonçalves Dias (MA)",
  },
  {
    value: "Gouveia MG",
    label: "Gouveia (MG)",
  },
  {
    value: "Gouvelândia GO",
    label: "Gouvelândia (GO)",
  },
  {
    value: "Governador Archer MA",
    label: "Governador Archer (MA)",
  },
  {
    value: "Governador Celso Ramos SC",
    label: "Governador Celso Ramos (SC)",
  },
  {
    value: "Governador Dix-sept Ro RN",
    label: "Governador Dix-sept Rosado (RN)",
  },
  {
    value: "Governador Edison Lobă MA",
    label: "Governador Edison Lobăo (MA)",
  },
  {
    value: "Governador Eugênio Bar MA",
    label: "Governador Eugênio Barros (MA)",
  },
  {
    value: "Governador Jorge Teixe RO",
    label: "Governador Jorge Teixeira (RO)",
  },
  {
    value: "Governador Lindenberg ES",
    label: "Governador Lindenberg (ES)",
  },
  {
    value: "Governador Lomanto Jún BA",
    label: "Governador Lomanto Júnior (BA)",
  },
  {
    value: "Governador Luiz Rocha MA",
    label: "Governador Luiz Rocha (MA)",
  },
  {
    value: "Governador Mangabeira BA",
    label: "Governador Mangabeira (BA)",
  },
  {
    value: "Governador Newton Bell MA",
    label: "Governador Newton Bello (MA)",
  },
  {
    value: "Governador Nunes Freir MA",
    label: "Governador Nunes Freire (MA)",
  },
  {
    value: "Governador Valadares MG",
    label: "Governador Valadares (MG)",
  },
  {
    value: "Gracho Cardoso SE",
    label: "Gracho Cardoso (SE)",
  },
  {
    value: "Grajaú MA",
    label: "Grajaú (MA)",
  },
  {
    value: "Gramado RS",
    label: "Gramado (RS)",
  },
  {
    value: "Gramado Dos Loureiros RS",
    label: "Gramado Dos Loureiros (RS)",
  },
  {
    value: "Gramado Xavier RS",
    label: "Gramado Xavier (RS)",
  },
  {
    value: "Grandes Rios PR",
    label: "Grandes Rios (PR)",
  },
  {
    value: "Granito PE",
    label: "Granito (PE)",
  },
  {
    value: "Granja CE",
    label: "Granja (CE)",
  },
  {
    value: "Granjeiro CE",
    label: "Granjeiro (CE)",
  },
  {
    value: "Gravatal SC",
    label: "Gravatal (SC)",
  },
  {
    value: "Gravataí RS",
    label: "Gravataí (RS)",
  },
  {
    value: "Gravatá PE",
    label: "Gravatá (PE)",
  },
  {
    value: "Graça CE",
    label: "Graça (CE)",
  },
  {
    value: "Graça Aranha MA",
    label: "Graça Aranha (MA)",
  },
  {
    value: "Groaíras CE",
    label: "Groaíras (CE)",
  },
  {
    value: "Grossos RN",
    label: "Grossos (RN)",
  },
  {
    value: "Grupiara MG",
    label: "Grupiara (MG)",
  },
  {
    value: "Grăo Mogol MG",
    label: "Grăo Mogol (MG)",
  },
  {
    value: "Grăo Pará SC",
    label: "Grăo Pará (SC)",
  },
  {
    value: "Guabiju RS",
    label: "Guabiju (RS)",
  },
  {
    value: "Guabiruba SC",
    label: "Guabiruba (SC)",
  },
  {
    value: "Guadalupe PI",
    label: "Guadalupe (PI)",
  },
  {
    value: "Guaimbê SP",
    label: "Guaimbê (SP)",
  },
  {
    value: "Guairaçá PR",
    label: "Guairaçá (PR)",
  },
  {
    value: "Guaiçara SP",
    label: "Guaiçara (SP)",
  },
  {
    value: "Guaiúba CE",
    label: "Guaiúba (CE)",
  },
  {
    value: "Guajará AM",
    label: "Guajará (AM)",
  },
  {
    value: "Guajará-mirim RO",
    label: "Guajará-mirim (RO)",
  },
  {
    value: "Guajeru BA",
    label: "Guajeru (BA)",
  },
  {
    value: "Guamaré RN",
    label: "Guamaré (RN)",
  },
  {
    value: "Guamiranga PR",
    label: "Guamiranga (PR)",
  },
  {
    value: "Guanambi BA",
    label: "Guanambi (BA)",
  },
  {
    value: "Guanhăes MG",
    label: "Guanhăes (MG)",
  },
  {
    value: "Guapiara SP",
    label: "Guapiara (SP)",
  },
  {
    value: "Guapiaçu SP",
    label: "Guapiaçu (SP)",
  },
  {
    value: "Guapimirim RJ",
    label: "Guapimirim (RJ)",
  },
  {
    value: "Guapirama PR",
    label: "Guapirama (PR)",
  },
  {
    value: "Guaporema PR",
    label: "Guaporema (PR)",
  },
  {
    value: "Guaporé RS",
    label: "Guaporé (RS)",
  },
  {
    value: "Guapé MG",
    label: "Guapé (MG)",
  },
  {
    value: "Guapó GO",
    label: "Guapó (GO)",
  },
  {
    value: "Guarabira PB",
    label: "Guarabira (PB)",
  },
  {
    value: "Guaraci PR",
    label: "Guaraci (PR)",
  },
  {
    value: "Guaraci SP",
    label: "Guaraci (SP)",
  },
  {
    value: "Guaraciaba MG",
    label: "Guaraciaba (MG)",
  },
  {
    value: "Guaraciaba SC",
    label: "Guaraciaba (SC)",
  },
  {
    value: "Guaraciaba do Norte CE",
    label: "Guaraciaba do Norte (CE)",
  },
  {
    value: "Guaraciama MG",
    label: "Guaraciama (MG)",
  },
  {
    value: "Guaramiranga CE",
    label: "Guaramiranga (CE)",
  },
  {
    value: "Guaramirim SC",
    label: "Guaramirim (SC)",
  },
  {
    value: "Guarani MG",
    label: "Guarani (MG)",
  },
  {
    value: "Guarani Das Missơes RS",
    label: "Guarani Das Missơes (RS)",
  },
  {
    value: "Guarani D´oeste SP",
    label: "Guarani D´oeste (SP)",
  },
  {
    value: "Guarani de Goiás GO",
    label: "Guarani de Goiás (GO)",
  },
  {
    value: "Guaraniaçu PR",
    label: "Guaraniaçu (PR)",
  },
  {
    value: "Guarantă SP",
    label: "Guarantă (SP)",
  },
  {
    value: "Guarantă do Norte MT",
    label: "Guarantă do Norte (MT)",
  },
  {
    value: "Guaranésia MG",
    label: "Guaranésia (MG)",
  },
  {
    value: "Guarapari ES",
    label: "Guarapari (ES)",
  },
  {
    value: "Guarapuava PR",
    label: "Guarapuava (PR)",
  },
  {
    value: "Guaraqueçaba PR",
    label: "Guaraqueçaba (PR)",
  },
  {
    value: "Guararapes SP",
    label: "Guararapes (SP)",
  },
  {
    value: "Guararema SP",
    label: "Guararema (SP)",
  },
  {
    value: "Guarará MG",
    label: "Guarará (MG)",
  },
  {
    value: "Guaratinga BA",
    label: "Guaratinga (BA)",
  },
  {
    value: "Guaratinguetá SP",
    label: "Guaratinguetá (SP)",
  },
  {
    value: "Guaratuba PR",
    label: "Guaratuba (PR)",
  },
  {
    value: "Guaraçaí SP",
    label: "Guaraçaí (SP)",
  },
  {
    value: "Guaraí TO",
    label: "Guaraí (TO)",
  },
  {
    value: "Guaraíta GO",
    label: "Guaraíta (GO)",
  },
  {
    value: "Guarda-mor MG",
    label: "Guarda-mor (MG)",
  },
  {
    value: "Guareí SP",
    label: "Guareí (SP)",
  },
  {
    value: "Guariba SP",
    label: "Guariba (SP)",
  },
  {
    value: "Guaribas PI",
    label: "Guaribas (PI)",
  },
  {
    value: "Guarinos GO",
    label: "Guarinos (GO)",
  },
  {
    value: "Guarujá SP",
    label: "Guarujá (SP)",
  },
  {
    value: "Guarujá do Sul SC",
    label: "Guarujá do Sul (SC)",
  },
  {
    value: "Guarulhos SP",
    label: "Guarulhos (SP)",
  },
  {
    value: "Guará SP",
    label: "Guará (SP)",
  },
  {
    value: "Guatambú SC",
    label: "Guatambú (SC)",
  },
  {
    value: "Guatapará SP",
    label: "Guatapará (SP)",
  },
  {
    value: "Guaxupé MG",
    label: "Guaxupé (MG)",
  },
  {
    value: "Guaçuí ES",
    label: "Guaçuí (ES)",
  },
  {
    value: "Guaíba RS",
    label: "Guaíba (RS)",
  },
  {
    value: "Guaíra PR",
    label: "Guaíra (PR)",
  },
  {
    value: "Guaíra SP",
    label: "Guaíra (SP)",
  },
  {
    value: "Guia Lopes da Laguna MS",
    label: "Guia Lopes da Laguna (MS)",
  },
  {
    value: "Guidoval MG",
    label: "Guidoval (MG)",
  },
  {
    value: "Guimarânia MG",
    label: "Guimarânia (MG)",
  },
  {
    value: "Guimarăes MA",
    label: "Guimarăes (MA)",
  },
  {
    value: "Guiratinga MT",
    label: "Guiratinga (MT)",
  },
  {
    value: "Guiricema MG",
    label: "Guiricema (MG)",
  },
  {
    value: "Gurinhată MG",
    label: "Gurinhată (MG)",
  },
  {
    value: "Gurinhém PB",
    label: "Gurinhém (PB)",
  },
  {
    value: "Gurjăo PB",
    label: "Gurjăo (PB)",
  },
  {
    value: "Gurupi TO",
    label: "Gurupi (TO)",
  },
  {
    value: "Gurupá PA",
    label: "Gurupá (PA)",
  },
  {
    value: "Guzolândia SP",
    label: "Guzolândia (SP)",
  },
  {
    value: "Gália SP",
    label: "Gália (SP)",
  },
  {
    value: "Harmonia RS",
    label: "Harmonia (RS)",
  },
  {
    value: "Heitoraí GO",
    label: "Heitoraí (GO)",
  },
  {
    value: "Heliodora MG",
    label: "Heliodora (MG)",
  },
  {
    value: "Heliópolis BA",
    label: "Heliópolis (BA)",
  },
  {
    value: "Herculândia SP",
    label: "Herculândia (SP)",
  },
  {
    value: "Herval RS",
    label: "Herval (RS)",
  },
  {
    value: "Herval D´oeste SC",
    label: "Herval D´oeste (SC)",
  },
  {
    value: "Herveiras RS",
    label: "Herveiras (RS)",
  },
  {
    value: "Hidrolina GO",
    label: "Hidrolina (GO)",
  },
  {
    value: "Hidrolândia CE",
    label: "Hidrolândia (CE)",
  },
  {
    value: "Hidrolândia GO",
    label: "Hidrolândia (GO)",
  },
  {
    value: "Holambra SP",
    label: "Holambra (SP)",
  },
  {
    value: "Honório Serpa PR",
    label: "Honório Serpa (PR)",
  },
  {
    value: "Horizonte CE",
    label: "Horizonte (CE)",
  },
  {
    value: "Horizontina RS",
    label: "Horizontina (RS)",
  },
  {
    value: "Hortolândia SP",
    label: "Hortolândia (SP)",
  },
  {
    value: "Hugo Napoleăo PI",
    label: "Hugo Napoleăo (PI)",
  },
  {
    value: "Hulha Negra RS",
    label: "Hulha Negra (RS)",
  },
  {
    value: "Humaitá AM",
    label: "Humaitá (AM)",
  },
  {
    value: "Humaitá RS",
    label: "Humaitá (RS)",
  },
  {
    value: "Humberto de Campos MA",
    label: "Humberto de Campos (MA)",
  },
  {
    value: "Iacanga SP",
    label: "Iacanga (SP)",
  },
  {
    value: "Iaciara GO",
    label: "Iaciara (GO)",
  },
  {
    value: "Iacri SP",
    label: "Iacri (SP)",
  },
  {
    value: "Iapu MG",
    label: "Iapu (MG)",
  },
  {
    value: "Iaras SP",
    label: "Iaras (SP)",
  },
  {
    value: "Iati PE",
    label: "Iati (PE)",
  },
  {
    value: "Iaçu BA",
    label: "Iaçu (BA)",
  },
  {
    value: "Ibaiti PR",
    label: "Ibaiti (PR)",
  },
  {
    value: "Ibarama RS",
    label: "Ibarama (RS)",
  },
  {
    value: "Ibaretama CE",
    label: "Ibaretama (CE)",
  },
  {
    value: "Ibateguara AL",
    label: "Ibateguara (AL)",
  },
  {
    value: "Ibatiba ES",
    label: "Ibatiba (ES)",
  },
  {
    value: "Ibaté SP",
    label: "Ibaté (SP)",
  },
  {
    value: "Ibema PR",
    label: "Ibema (PR)",
  },
  {
    value: "Ibertioga MG",
    label: "Ibertioga (MG)",
  },
  {
    value: "Ibiam SC",
    label: "Ibiam (SC)",
  },
  {
    value: "Ibiapina CE",
    label: "Ibiapina (CE)",
  },
  {
    value: "Ibiara PB",
    label: "Ibiara (PB)",
  },
  {
    value: "Ibiassucê BA",
    label: "Ibiassucê (BA)",
  },
  {
    value: "Ibiaçá RS",
    label: "Ibiaçá (RS)",
  },
  {
    value: "Ibiaí MG",
    label: "Ibiaí (MG)",
  },
  {
    value: "Ibicaraí BA",
    label: "Ibicaraí (BA)",
  },
  {
    value: "Ibicaré SC",
    label: "Ibicaré (SC)",
  },
  {
    value: "Ibicoara BA",
    label: "Ibicoara (BA)",
  },
  {
    value: "Ibicuitinga CE",
    label: "Ibicuitinga (CE)",
  },
  {
    value: "Ibicuí BA",
    label: "Ibicuí (BA)",
  },
  {
    value: "Ibimirim PE",
    label: "Ibimirim (PE)",
  },
  {
    value: "Ibipeba BA",
    label: "Ibipeba (BA)",
  },
  {
    value: "Ibipitanga BA",
    label: "Ibipitanga (BA)",
  },
  {
    value: "Ibiporă PR",
    label: "Ibiporă (PR)",
  },
  {
    value: "Ibiquera BA",
    label: "Ibiquera (BA)",
  },
  {
    value: "Ibiracatu MG",
    label: "Ibiracatu (MG)",
  },
  {
    value: "Ibiraci MG",
    label: "Ibiraci (MG)",
  },
  {
    value: "Ibiraiaras RS",
    label: "Ibiraiaras (RS)",
  },
  {
    value: "Ibirajuba PE",
    label: "Ibirajuba (PE)",
  },
  {
    value: "Ibirama SC",
    label: "Ibirama (SC)",
  },
  {
    value: "Ibirapitanga BA",
    label: "Ibirapitanga (BA)",
  },
  {
    value: "Ibirapuită RS",
    label: "Ibirapuită (RS)",
  },
  {
    value: "Ibirapuă BA",
    label: "Ibirapuă (BA)",
  },
  {
    value: "Ibirarema SP",
    label: "Ibirarema (SP)",
  },
  {
    value: "Ibirataia BA",
    label: "Ibirataia (BA)",
  },
  {
    value: "Ibiraçu ES",
    label: "Ibiraçu (ES)",
  },
  {
    value: "Ibirité MG",
    label: "Ibirité (MG)",
  },
  {
    value: "Ibirubá RS",
    label: "Ibirubá (RS)",
  },
  {
    value: "Ibirá SP",
    label: "Ibirá (SP)",
  },
  {
    value: "Ibitiara BA",
    label: "Ibitiara (BA)",
  },
  {
    value: "Ibitinga SP",
    label: "Ibitinga (SP)",
  },
  {
    value: "Ibitirama ES",
    label: "Ibitirama (ES)",
  },
  {
    value: "Ibititá BA",
    label: "Ibititá (BA)",
  },
  {
    value: "Ibitiúra de Minas MG",
    label: "Ibitiúra de Minas (MG)",
  },
  {
    value: "Ibituruna MG",
    label: "Ibituruna (MG)",
  },
  {
    value: "Ibiá MG",
    label: "Ibiá (MG)",
  },
  {
    value: "Ibiúna SP",
    label: "Ibiúna (SP)",
  },
  {
    value: "Ibotirama BA",
    label: "Ibotirama (BA)",
  },
  {
    value: "Icapuí CE",
    label: "Icapuí (CE)",
  },
  {
    value: "Icaraí de Minas MG",
    label: "Icaraí de Minas (MG)",
  },
  {
    value: "Icaraíma PR",
    label: "Icaraíma (PR)",
  },
  {
    value: "Icatu MA",
    label: "Icatu (MA)",
  },
  {
    value: "Ichu BA",
    label: "Ichu (BA)",
  },
  {
    value: "Iconha ES",
    label: "Iconha (ES)",
  },
  {
    value: "Icém SP",
    label: "Icém (SP)",
  },
  {
    value: "Icó CE",
    label: "Icó (CE)",
  },
  {
    value: "Ielmo Marinho RN",
    label: "Ielmo Marinho (RN)",
  },
  {
    value: "Iepê SP",
    label: "Iepê (SP)",
  },
  {
    value: "Igaci AL",
    label: "Igaci (AL)",
  },
  {
    value: "Igaporă BA",
    label: "Igaporă (BA)",
  },
  {
    value: "Igaracy PB",
    label: "Igaracy (PB)",
  },
  {
    value: "Igarapava SP",
    label: "Igarapava (SP)",
  },
  {
    value: "Igarapé MG",
    label: "Igarapé (MG)",
  },
  {
    value: "Igarapé Grande MA",
    label: "Igarapé Grande (MA)",
  },
  {
    value: "Igarapé do Meio MA",
    label: "Igarapé do Meio (MA)",
  },
  {
    value: "Igarapé-açu PA",
    label: "Igarapé-açu (PA)",
  },
  {
    value: "Igarapé-miri PA",
    label: "Igarapé-miri (PA)",
  },
  {
    value: "Igarassu PE",
    label: "Igarassu (PE)",
  },
  {
    value: "Igaratinga MG",
    label: "Igaratinga (MG)",
  },
  {
    value: "Igaratá SP",
    label: "Igaratá (SP)",
  },
  {
    value: "Igaraçu do Tietê SP",
    label: "Igaraçu do Tietê (SP)",
  },
  {
    value: "Igrapiúna BA",
    label: "Igrapiúna (BA)",
  },
  {
    value: "Igreja Nova AL",
    label: "Igreja Nova (AL)",
  },
  {
    value: "Igrejinha RS",
    label: "Igrejinha (RS)",
  },
  {
    value: "Iguaba Grande RJ",
    label: "Iguaba Grande (RJ)",
  },
  {
    value: "Iguape SP",
    label: "Iguape (SP)",
  },
  {
    value: "Iguaraci PE",
    label: "Iguaraci (PE)",
  },
  {
    value: "Iguaraçu PR",
    label: "Iguaraçu (PR)",
  },
  {
    value: "Iguatama MG",
    label: "Iguatama (MG)",
  },
  {
    value: "Iguatemi MS",
    label: "Iguatemi (MS)",
  },
  {
    value: "Iguatu CE",
    label: "Iguatu (CE)",
  },
  {
    value: "Iguatu PR",
    label: "Iguatu (PR)",
  },
  {
    value: "Iguaí BA",
    label: "Iguaí (BA)",
  },
  {
    value: "Ijaci MG",
    label: "Ijaci (MG)",
  },
  {
    value: "Ijuí RS",
    label: "Ijuí (RS)",
  },
  {
    value: "Ilha Comprida SP",
    label: "Ilha Comprida (SP)",
  },
  {
    value: "Ilha Das Flores SE",
    label: "Ilha Das Flores (SE)",
  },
  {
    value: "Ilha Grande PI",
    label: "Ilha Grande (PI)",
  },
  {
    value: "Ilha Solteira SP",
    label: "Ilha Solteira (SP)",
  },
  {
    value: "Ilha de Itamaracá PE",
    label: "Ilha de Itamaracá (PE)",
  },
  {
    value: "Ilhabela SP",
    label: "Ilhabela (SP)",
  },
  {
    value: "Ilhota SC",
    label: "Ilhota (SC)",
  },
  {
    value: "Ilhéus BA",
    label: "Ilhéus (BA)",
  },
  {
    value: "Ilicínea MG",
    label: "Ilicínea (MG)",
  },
  {
    value: "Ilópolis RS",
    label: "Ilópolis (RS)",
  },
  {
    value: "Imaculada PB",
    label: "Imaculada (PB)",
  },
  {
    value: "Imaruí SC",
    label: "Imaruí (SC)",
  },
  {
    value: "Imbaú PR",
    label: "Imbaú (PR)",
  },
  {
    value: "Imbituba SC",
    label: "Imbituba (SC)",
  },
  {
    value: "Imbituva PR",
    label: "Imbituva (PR)",
  },
  {
    value: "Imbuia SC",
    label: "Imbuia (SC)",
  },
  {
    value: "Imbé RS",
    label: "Imbé (RS)",
  },
  {
    value: "Imbé de Minas MG",
    label: "Imbé de Minas (MG)",
  },
  {
    value: "Imigrante RS",
    label: "Imigrante (RS)",
  },
  {
    value: "Imperatriz MA",
    label: "Imperatriz (MA)",
  },
  {
    value: "Inaciolândia GO",
    label: "Inaciolândia (GO)",
  },
  {
    value: "Inajá PE",
    label: "Inajá (PE)",
  },
  {
    value: "Inajá PR",
    label: "Inajá (PR)",
  },
  {
    value: "Inconfidentes MG",
    label: "Inconfidentes (MG)",
  },
  {
    value: "Indaiabira MG",
    label: "Indaiabira (MG)",
  },
  {
    value: "Indaial SC",
    label: "Indaial (SC)",
  },
  {
    value: "Indaiatuba SP",
    label: "Indaiatuba (SP)",
  },
  {
    value: "Independência CE",
    label: "Independência (CE)",
  },
  {
    value: "Independência RS",
    label: "Independência (RS)",
  },
  {
    value: "Indiana SP",
    label: "Indiana (SP)",
  },
  {
    value: "Indianópolis MG",
    label: "Indianópolis (MG)",
  },
  {
    value: "Indianópolis PR",
    label: "Indianópolis (PR)",
  },
  {
    value: "Indiaporă SP",
    label: "Indiaporă (SP)",
  },
  {
    value: "Indiara GO",
    label: "Indiara (GO)",
  },
  {
    value: "Indiaroba SE",
    label: "Indiaroba (SE)",
  },
  {
    value: "Indiavaí MT",
    label: "Indiavaí (MT)",
  },
  {
    value: "Ingazeira PE",
    label: "Ingazeira (PE)",
  },
  {
    value: "Ingaí MG",
    label: "Ingaí (MG)",
  },
  {
    value: "Ingá PB",
    label: "Ingá (PB)",
  },
  {
    value: "Inhacorá RS",
    label: "Inhacorá (RS)",
  },
  {
    value: "Inhambupe BA",
    label: "Inhambupe (BA)",
  },
  {
    value: "Inhangapi PA",
    label: "Inhangapi (PA)",
  },
  {
    value: "Inhapi AL",
    label: "Inhapi (AL)",
  },
  {
    value: "Inhapim MG",
    label: "Inhapim (MG)",
  },
  {
    value: "Inhaúma MG",
    label: "Inhaúma (MG)",
  },
  {
    value: "Inhuma PI",
    label: "Inhuma (PI)",
  },
  {
    value: "Inhumas GO",
    label: "Inhumas (GO)",
  },
  {
    value: "Inimutaba MG",
    label: "Inimutaba (MG)",
  },
  {
    value: "Inocência MS",
    label: "Inocência (MS)",
  },
  {
    value: "Inácio Martins PR",
    label: "Inácio Martins (PR)",
  },
  {
    value: "Inúbia Paulista SP",
    label: "Inúbia Paulista (SP)",
  },
  {
    value: "Iomerê SC",
    label: "Iomerê (SC)",
  },
  {
    value: "Ipaba MG",
    label: "Ipaba (MG)",
  },
  {
    value: "Ipameri GO",
    label: "Ipameri (GO)",
  },
  {
    value: "Ipanema MG",
    label: "Ipanema (MG)",
  },
  {
    value: "Ipanguaçu RN",
    label: "Ipanguaçu (RN)",
  },
  {
    value: "Ipaporanga CE",
    label: "Ipaporanga (CE)",
  },
  {
    value: "Ipatinga MG",
    label: "Ipatinga (MG)",
  },
  {
    value: "Ipaumirim CE",
    label: "Ipaumirim (CE)",
  },
  {
    value: "Ipaussu SP",
    label: "Ipaussu (SP)",
  },
  {
    value: "Ipecaetá BA",
    label: "Ipecaetá (BA)",
  },
  {
    value: "Iperó SP",
    label: "Iperó (SP)",
  },
  {
    value: "Ipeúna SP",
    label: "Ipeúna (SP)",
  },
  {
    value: "Ipiaçu MG",
    label: "Ipiaçu (MG)",
  },
  {
    value: "Ipiaú BA",
    label: "Ipiaú (BA)",
  },
  {
    value: "Ipiguá SP",
    label: "Ipiguá (SP)",
  },
  {
    value: "Ipira SC",
    label: "Ipira (SC)",
  },
  {
    value: "Ipiranga PR",
    label: "Ipiranga (PR)",
  },
  {
    value: "Ipiranga de Goiás GO",
    label: "Ipiranga de Goiás (GO)",
  },
  {
    value: "Ipiranga do Norte MT",
    label: "Ipiranga do Norte (MT)",
  },
  {
    value: "Ipiranga do Piauí PI",
    label: "Ipiranga do Piauí (PI)",
  },
  {
    value: "Ipiranga do Sul RS",
    label: "Ipiranga do Sul (RS)",
  },
  {
    value: "Ipirá BA",
    label: "Ipirá (BA)",
  },
  {
    value: "Ipixuna AM",
    label: "Ipixuna (AM)",
  },
  {
    value: "Ipixuna do Pará PA",
    label: "Ipixuna do Pará (PA)",
  },
  {
    value: "Ipojuca PE",
    label: "Ipojuca (PE)",
  },
  {
    value: "Iporanga SP",
    label: "Iporanga (SP)",
  },
  {
    value: "Iporá GO",
    label: "Iporá (GO)",
  },
  {
    value: "Iporă PR",
    label: "Iporă (PR)",
  },
  {
    value: "Iporă do Oeste SC",
    label: "Iporă do Oeste (SC)",
  },
  {
    value: "Ipu CE",
    label: "Ipu (CE)",
  },
  {
    value: "Ipuaçu SC",
    label: "Ipuaçu (SC)",
  },
  {
    value: "Ipubi PE",
    label: "Ipubi (PE)",
  },
  {
    value: "Ipueira RN",
    label: "Ipueira (RN)",
  },
  {
    value: "Ipueiras CE",
    label: "Ipueiras (CE)",
  },
  {
    value: "Ipueiras TO",
    label: "Ipueiras (TO)",
  },
  {
    value: "Ipuiúna MG",
    label: "Ipuiúna (MG)",
  },
  {
    value: "Ipumirim SC",
    label: "Ipumirim (SC)",
  },
  {
    value: "Ipupiara BA",
    label: "Ipupiara (BA)",
  },
  {
    value: "Ipuă SP",
    label: "Ipuă (SP)",
  },
  {
    value: "Ipê RS",
    label: "Ipê (RS)",
  },
  {
    value: "Iracema CE",
    label: "Iracema (CE)",
  },
  {
    value: "Iracema RR",
    label: "Iracema (RR)",
  },
  {
    value: "Iracema do Oeste PR",
    label: "Iracema do Oeste (PR)",
  },
  {
    value: "Iraceminha SC",
    label: "Iraceminha (SC)",
  },
  {
    value: "Iracemápolis SP",
    label: "Iracemápolis (SP)",
  },
  {
    value: "Irajuba BA",
    label: "Irajuba (BA)",
  },
  {
    value: "Iramaia BA",
    label: "Iramaia (BA)",
  },
  {
    value: "Iranduba AM",
    label: "Iranduba (AM)",
  },
  {
    value: "Irani SC",
    label: "Irani (SC)",
  },
  {
    value: "Irapuru SP",
    label: "Irapuru (SP)",
  },
  {
    value: "Irapuă SP",
    label: "Irapuă (SP)",
  },
  {
    value: "Iraquara BA",
    label: "Iraquara (BA)",
  },
  {
    value: "Irará BA",
    label: "Irará (BA)",
  },
  {
    value: "Irati PR",
    label: "Irati (PR)",
  },
  {
    value: "Irati SC",
    label: "Irati (SC)",
  },
  {
    value: "Irauçuba CE",
    label: "Irauçuba (CE)",
  },
  {
    value: "Iraí RS",
    label: "Iraí (RS)",
  },
  {
    value: "Iraí de Minas MG",
    label: "Iraí de Minas (MG)",
  },
  {
    value: "Irecê BA",
    label: "Irecê (BA)",
  },
  {
    value: "Iretama PR",
    label: "Iretama (PR)",
  },
  {
    value: "Irineópolis SC",
    label: "Irineópolis (SC)",
  },
  {
    value: "Irituia PA",
    label: "Irituia (PA)",
  },
  {
    value: "Irupi ES",
    label: "Irupi (ES)",
  },
  {
    value: "Isaías Coelho PI",
    label: "Isaías Coelho (PI)",
  },
  {
    value: "Israelândia GO",
    label: "Israelândia (GO)",
  },
  {
    value: "Itaara RS",
    label: "Itaara (RS)",
  },
  {
    value: "Itabaiana PB",
    label: "Itabaiana (PB)",
  },
  {
    value: "Itabaiana SE",
    label: "Itabaiana (SE)",
  },
  {
    value: "Itabaianinha SE",
    label: "Itabaianinha (SE)",
  },
  {
    value: "Itabela BA",
    label: "Itabela (BA)",
  },
  {
    value: "Itaberaba BA",
    label: "Itaberaba (BA)",
  },
  {
    value: "Itaberaí GO",
    label: "Itaberaí (GO)",
  },
  {
    value: "Itaberá SP",
    label: "Itaberá (SP)",
  },
  {
    value: "Itabi SE",
    label: "Itabi (SE)",
  },
  {
    value: "Itabira MG",
    label: "Itabira (MG)",
  },
  {
    value: "Itabirinha MG",
    label: "Itabirinha (MG)",
  },
  {
    value: "Itabirito MG",
    label: "Itabirito (MG)",
  },
  {
    value: "Itaboraí RJ",
    label: "Itaboraí (RJ)",
  },
  {
    value: "Itabuna BA",
    label: "Itabuna (BA)",
  },
  {
    value: "Itacajá TO",
    label: "Itacajá (TO)",
  },
  {
    value: "Itacambira MG",
    label: "Itacambira (MG)",
  },
  {
    value: "Itacarambi MG",
    label: "Itacarambi (MG)",
  },
  {
    value: "Itacaré BA",
    label: "Itacaré (BA)",
  },
  {
    value: "Itacoatiara AM",
    label: "Itacoatiara (AM)",
  },
  {
    value: "Itacuruba PE",
    label: "Itacuruba (PE)",
  },
  {
    value: "Itacurubi RS",
    label: "Itacurubi (RS)",
  },
  {
    value: "Itaeté BA",
    label: "Itaeté (BA)",
  },
  {
    value: "Itagi BA",
    label: "Itagi (BA)",
  },
  {
    value: "Itagibá BA",
    label: "Itagibá (BA)",
  },
  {
    value: "Itagimirim BA",
    label: "Itagimirim (BA)",
  },
  {
    value: "Itaguajé PR",
    label: "Itaguajé (PR)",
  },
  {
    value: "Itaguara MG",
    label: "Itaguara (MG)",
  },
  {
    value: "Itaguari GO",
    label: "Itaguari (GO)",
  },
  {
    value: "Itaguaru GO",
    label: "Itaguaru (GO)",
  },
  {
    value: "Itaguatins TO",
    label: "Itaguatins (TO)",
  },
  {
    value: "Itaguaçu ES",
    label: "Itaguaçu (ES)",
  },
  {
    value: "Itaguaçu da Bahia BA",
    label: "Itaguaçu da Bahia (BA)",
  },
  {
    value: "Itaguaí RJ",
    label: "Itaguaí (RJ)",
  },
  {
    value: "Itainópolis PI",
    label: "Itainópolis (PI)",
  },
  {
    value: "Itaipava do Grajaú MA",
    label: "Itaipava do Grajaú (MA)",
  },
  {
    value: "Itaipulândia PR",
    label: "Itaipulândia (PR)",
  },
  {
    value: "Itaipé MG",
    label: "Itaipé (MG)",
  },
  {
    value: "Itaitinga CE",
    label: "Itaitinga (CE)",
  },
  {
    value: "Itaituba PA",
    label: "Itaituba (PA)",
  },
  {
    value: "Itaiçaba CE",
    label: "Itaiçaba (CE)",
  },
  {
    value: "Itaiópolis SC",
    label: "Itaiópolis (SC)",
  },
  {
    value: "Itajaí SC",
    label: "Itajaí (SC)",
  },
  {
    value: "Itajobi SP",
    label: "Itajobi (SP)",
  },
  {
    value: "Itaju SP",
    label: "Itaju (SP)",
  },
  {
    value: "Itaju do Colônia BA",
    label: "Itaju do Colônia (BA)",
  },
  {
    value: "Itajubá MG",
    label: "Itajubá (MG)",
  },
  {
    value: "Itajuípe BA",
    label: "Itajuípe (BA)",
  },
  {
    value: "Itajá GO",
    label: "Itajá (GO)",
  },
  {
    value: "Itajá RN",
    label: "Itajá (RN)",
  },
  {
    value: "Italva RJ",
    label: "Italva (RJ)",
  },
  {
    value: "Itamaraju BA",
    label: "Itamaraju (BA)",
  },
  {
    value: "Itamarandiba MG",
    label: "Itamarandiba (MG)",
  },
  {
    value: "Itamarati AM",
    label: "Itamarati (AM)",
  },
  {
    value: "Itamarati de Minas MG",
    label: "Itamarati de Minas (MG)",
  },
  {
    value: "Itamari BA",
    label: "Itamari (BA)",
  },
  {
    value: "Itambacuri MG",
    label: "Itambacuri (MG)",
  },
  {
    value: "Itambaracá PR",
    label: "Itambaracá (PR)",
  },
  {
    value: "Itambé BA",
    label: "Itambé (BA)",
  },
  {
    value: "Itambé PE",
    label: "Itambé (PE)",
  },
  {
    value: "Itambé PR",
    label: "Itambé (PR)",
  },
  {
    value: "Itambé do Mato Dentro MG",
    label: "Itambé do Mato Dentro (MG)",
  },
  {
    value: "Itamogi MG",
    label: "Itamogi (MG)",
  },
  {
    value: "Itamonte MG",
    label: "Itamonte (MG)",
  },
  {
    value: "Itanagra BA",
    label: "Itanagra (BA)",
  },
  {
    value: "Itanhandu MG",
    label: "Itanhandu (MG)",
  },
  {
    value: "Itanhangá MT",
    label: "Itanhangá (MT)",
  },
  {
    value: "Itanhaém SP",
    label: "Itanhaém (SP)",
  },
  {
    value: "Itanhomi MG",
    label: "Itanhomi (MG)",
  },
  {
    value: "Itanhém BA",
    label: "Itanhém (BA)",
  },
  {
    value: "Itaobim MG",
    label: "Itaobim (MG)",
  },
  {
    value: "Itaocara RJ",
    label: "Itaocara (RJ)",
  },
  {
    value: "Itapaci GO",
    label: "Itapaci (GO)",
  },
  {
    value: "Itapagipe MG",
    label: "Itapagipe (MG)",
  },
  {
    value: "Itapagé CE",
    label: "Itapagé (CE)",
  },
  {
    value: "Itaparica BA",
    label: "Itaparica (BA)",
  },
  {
    value: "Itapebi BA",
    label: "Itapebi (BA)",
  },
  {
    value: "Itapecerica MG",
    label: "Itapecerica (MG)",
  },
  {
    value: "Itapecerica da Serra SP",
    label: "Itapecerica da Serra (SP)",
  },
  {
    value: "Itapecuru Mirim MA",
    label: "Itapecuru Mirim (MA)",
  },
  {
    value: "Itapejara D´oeste PR",
    label: "Itapejara D´oeste (PR)",
  },
  {
    value: "Itapema SC",
    label: "Itapema (SC)",
  },
  {
    value: "Itapemirim ES",
    label: "Itapemirim (ES)",
  },
  {
    value: "Itaperuna RJ",
    label: "Itaperuna (RJ)",
  },
  {
    value: "Itaperuçu PR",
    label: "Itaperuçu (PR)",
  },
  {
    value: "Itapetim PE",
    label: "Itapetim (PE)",
  },
  {
    value: "Itapetinga BA",
    label: "Itapetinga (BA)",
  },
  {
    value: "Itapetininga SP",
    label: "Itapetininga (SP)",
  },
  {
    value: "Itapeva MG",
    label: "Itapeva (MG)",
  },
  {
    value: "Itapeva SP",
    label: "Itapeva (SP)",
  },
  {
    value: "Itapevi SP",
    label: "Itapevi (SP)",
  },
  {
    value: "Itapicuru BA",
    label: "Itapicuru (BA)",
  },
  {
    value: "Itapipoca CE",
    label: "Itapipoca (CE)",
  },
  {
    value: "Itapira SP",
    label: "Itapira (SP)",
  },
  {
    value: "Itapiranga AM",
    label: "Itapiranga (AM)",
  },
  {
    value: "Itapiranga SC",
    label: "Itapiranga (SC)",
  },
  {
    value: "Itapirapuă GO",
    label: "Itapirapuă (GO)",
  },
  {
    value: "Itapirapuă Paulista SP",
    label: "Itapirapuă Paulista (SP)",
  },
  {
    value: "Itapiratins TO",
    label: "Itapiratins (TO)",
  },
  {
    value: "Itapissuma PE",
    label: "Itapissuma (PE)",
  },
  {
    value: "Itapitanga BA",
    label: "Itapitanga (BA)",
  },
  {
    value: "Itapiúna CE",
    label: "Itapiúna (CE)",
  },
  {
    value: "Itaporanga PB",
    label: "Itaporanga (PB)",
  },
  {
    value: "Itaporanga SP",
    label: "Itaporanga (SP)",
  },
  {
    value: "Itaporanga D´ajuda SE",
    label: "Itaporanga D´ajuda (SE)",
  },
  {
    value: "Itapororoca PB",
    label: "Itapororoca (PB)",
  },
  {
    value: "Itaporă MS",
    label: "Itaporă (MS)",
  },
  {
    value: "Itaporă do Tocantins TO",
    label: "Itaporă do Tocantins (TO)",
  },
  {
    value: "Itapoá SC",
    label: "Itapoá (SC)",
  },
  {
    value: "Itapuca RS",
    label: "Itapuca (RS)",
  },
  {
    value: "Itapura SP",
    label: "Itapura (SP)",
  },
  {
    value: "Itapuranga GO",
    label: "Itapuranga (GO)",
  },
  {
    value: "Itapuí SP",
    label: "Itapuí (SP)",
  },
  {
    value: "Itapuă do Oeste RO",
    label: "Itapuă do Oeste (RO)",
  },
  {
    value: "Itapé BA",
    label: "Itapé (BA)",
  },
  {
    value: "Itaquaquecetuba SP",
    label: "Itaquaquecetuba (SP)",
  },
  {
    value: "Itaquara BA",
    label: "Itaquara (BA)",
  },
  {
    value: "Itaqui RS",
    label: "Itaqui (RS)",
  },
  {
    value: "Itaquiraí MS",
    label: "Itaquiraí (MS)",
  },
  {
    value: "Itaquitinga PE",
    label: "Itaquitinga (PE)",
  },
  {
    value: "Itarana ES",
    label: "Itarana (ES)",
  },
  {
    value: "Itarantim BA",
    label: "Itarantim (BA)",
  },
  {
    value: "Itararé SP",
    label: "Itararé (SP)",
  },
  {
    value: "Itarema CE",
    label: "Itarema (CE)",
  },
  {
    value: "Itariri SP",
    label: "Itariri (SP)",
  },
  {
    value: "Itarumă GO",
    label: "Itarumă (GO)",
  },
  {
    value: "Itati RS",
    label: "Itati (RS)",
  },
  {
    value: "Itatiaia RJ",
    label: "Itatiaia (RJ)",
  },
  {
    value: "Itatiaiuçu MG",
    label: "Itatiaiuçu (MG)",
  },
  {
    value: "Itatiba SP",
    label: "Itatiba (SP)",
  },
  {
    value: "Itatiba do Sul RS",
    label: "Itatiba do Sul (RS)",
  },
  {
    value: "Itatim BA",
    label: "Itatim (BA)",
  },
  {
    value: "Itatinga SP",
    label: "Itatinga (SP)",
  },
  {
    value: "Itatira CE",
    label: "Itatira (CE)",
  },
  {
    value: "Itatuba PB",
    label: "Itatuba (PB)",
  },
  {
    value: "Itaubal AP",
    label: "Itaubal (AP)",
  },
  {
    value: "Itaueira PI",
    label: "Itaueira (PI)",
  },
  {
    value: "Itauçu GO",
    label: "Itauçu (GO)",
  },
  {
    value: "Itaverava MG",
    label: "Itaverava (MG)",
  },
  {
    value: "Itaí SP",
    label: "Itaí (SP)",
  },
  {
    value: "Itaíba PE",
    label: "Itaíba (PE)",
  },
  {
    value: "Itaóca SP",
    label: "Itaóca (SP)",
  },
  {
    value: "Itaú RN",
    label: "Itaú (RN)",
  },
  {
    value: "Itaú de Minas MG",
    label: "Itaú de Minas (MG)",
  },
  {
    value: "Itaúba MT",
    label: "Itaúba (MT)",
  },
  {
    value: "Itaúna MG",
    label: "Itaúna (MG)",
  },
  {
    value: "Itaúna do Sul PR",
    label: "Itaúna do Sul (PR)",
  },
  {
    value: "Itinga MG",
    label: "Itinga (MG)",
  },
  {
    value: "Itinga do Maranhăo MA",
    label: "Itinga do Maranhăo (MA)",
  },
  {
    value: "Itiquira MT",
    label: "Itiquira (MT)",
  },
  {
    value: "Itirapina SP",
    label: "Itirapina (SP)",
  },
  {
    value: "Itirapuă SP",
    label: "Itirapuă (SP)",
  },
  {
    value: "Itiruçu BA",
    label: "Itiruçu (BA)",
  },
  {
    value: "Itiúba BA",
    label: "Itiúba (BA)",
  },
  {
    value: "Itobi SP",
    label: "Itobi (SP)",
  },
  {
    value: "Itororó BA",
    label: "Itororó (BA)",
  },
  {
    value: "Itu SP",
    label: "Itu (SP)",
  },
  {
    value: "Ituaçu BA",
    label: "Ituaçu (BA)",
  },
  {
    value: "Ituberá BA",
    label: "Ituberá (BA)",
  },
  {
    value: "Itueta MG",
    label: "Itueta (MG)",
  },
  {
    value: "Ituiutaba MG",
    label: "Ituiutaba (MG)",
  },
  {
    value: "Itumbiara GO",
    label: "Itumbiara (GO)",
  },
  {
    value: "Itumirim MG",
    label: "Itumirim (MG)",
  },
  {
    value: "Itupeva SP",
    label: "Itupeva (SP)",
  },
  {
    value: "Itupiranga PA",
    label: "Itupiranga (PA)",
  },
  {
    value: "Ituporanga SC",
    label: "Ituporanga (SC)",
  },
  {
    value: "Iturama MG",
    label: "Iturama (MG)",
  },
  {
    value: "Itutinga MG",
    label: "Itutinga (MG)",
  },
  {
    value: "Ituverava SP",
    label: "Ituverava (SP)",
  },
  {
    value: "Itá SC",
    label: "Itá (SC)",
  },
  {
    value: "Itápolis SP",
    label: "Itápolis (SP)",
  },
  {
    value: "Iuiú BA",
    label: "Iuiú (BA)",
  },
  {
    value: "Ivaiporă PR",
    label: "Ivaiporă (PR)",
  },
  {
    value: "Ivatuba PR",
    label: "Ivatuba (PR)",
  },
  {
    value: "Ivaté PR",
    label: "Ivaté (PR)",
  },
  {
    value: "Ivaí PR",
    label: "Ivaí (PR)",
  },
  {
    value: "Ivinhema MS",
    label: "Ivinhema (MS)",
  },
  {
    value: "Ivolândia GO",
    label: "Ivolândia (GO)",
  },
  {
    value: "Ivorá RS",
    label: "Ivorá (RS)",
  },
  {
    value: "Ivoti RS",
    label: "Ivoti (RS)",
  },
  {
    value: "Içara SC",
    label: "Içara (SC)",
  },
  {
    value: "Iúna ES",
    label: "Iúna (ES)",
  },
  {
    value: "Jaboatăo Dos Guararape PE",
    label: "Jaboatăo Dos Guararapes (PE)",
  },
  {
    value: "Jaborandi BA",
    label: "Jaborandi (BA)",
  },
  {
    value: "Jaborandi SP",
    label: "Jaborandi (SP)",
  },
  {
    value: "Jaborá SC",
    label: "Jaborá (SC)",
  },
  {
    value: "Jaboti PR",
    label: "Jaboti (PR)",
  },
  {
    value: "Jaboticaba RS",
    label: "Jaboticaba (RS)",
  },
  {
    value: "Jaboticabal SP",
    label: "Jaboticabal (SP)",
  },
  {
    value: "Jaboticatubas MG",
    label: "Jaboticatubas (MG)",
  },
  {
    value: "Jacaraci BA",
    label: "Jacaraci (BA)",
  },
  {
    value: "Jacaraú PB",
    label: "Jacaraú (PB)",
  },
  {
    value: "Jacareacanga PA",
    label: "Jacareacanga (PA)",
  },
  {
    value: "Jacarezinho PR",
    label: "Jacarezinho (PR)",
  },
  {
    value: "Jacareí SP",
    label: "Jacareí (SP)",
  },
  {
    value: "Jacaré Dos Homens AL",
    label: "Jacaré Dos Homens (AL)",
  },
  {
    value: "Jaci SP",
    label: "Jaci (SP)",
  },
  {
    value: "Jaciara MT",
    label: "Jaciara (MT)",
  },
  {
    value: "Jacinto MG",
    label: "Jacinto (MG)",
  },
  {
    value: "Jacinto Machado SC",
    label: "Jacinto Machado (SC)",
  },
  {
    value: "Jacobina BA",
    label: "Jacobina (BA)",
  },
  {
    value: "Jacobina do Piauí PI",
    label: "Jacobina do Piauí (PI)",
  },
  {
    value: "Jacuizinho RS",
    label: "Jacuizinho (RS)",
  },
  {
    value: "Jacundá PA",
    label: "Jacundá (PA)",
  },
  {
    value: "Jacupiranga SP",
    label: "Jacupiranga (SP)",
  },
  {
    value: "Jacutinga MG",
    label: "Jacutinga (MG)",
  },
  {
    value: "Jacutinga RS",
    label: "Jacutinga (RS)",
  },
  {
    value: "Jacuí MG",
    label: "Jacuí (MG)",
  },
  {
    value: "Jacuípe AL",
    label: "Jacuípe (AL)",
  },
  {
    value: "Jaguapită PR",
    label: "Jaguapită (PR)",
  },
  {
    value: "Jaguaquara BA",
    label: "Jaguaquara (BA)",
  },
  {
    value: "Jaguarari BA",
    label: "Jaguarari (BA)",
  },
  {
    value: "Jaguaraçu MG",
    label: "Jaguaraçu (MG)",
  },
  {
    value: "Jaguaretama CE",
    label: "Jaguaretama (CE)",
  },
  {
    value: "Jaguari RS",
    label: "Jaguari (RS)",
  },
  {
    value: "Jaguariaíva PR",
    label: "Jaguariaíva (PR)",
  },
  {
    value: "Jaguaribara CE",
    label: "Jaguaribara (CE)",
  },
  {
    value: "Jaguaribe CE",
    label: "Jaguaribe (CE)",
  },
  {
    value: "Jaguaripe BA",
    label: "Jaguaripe (BA)",
  },
  {
    value: "Jaguariúna SP",
    label: "Jaguariúna (SP)",
  },
  {
    value: "Jaguaruana CE",
    label: "Jaguaruana (CE)",
  },
  {
    value: "Jaguaruna SC",
    label: "Jaguaruna (SC)",
  },
  {
    value: "Jaguaré ES",
    label: "Jaguaré (ES)",
  },
  {
    value: "Jaguarăo RS",
    label: "Jaguarăo (RS)",
  },
  {
    value: "Jaicós PI",
    label: "Jaicós (PI)",
  },
  {
    value: "Jales SP",
    label: "Jales (SP)",
  },
  {
    value: "Jambeiro SP",
    label: "Jambeiro (SP)",
  },
  {
    value: "Jampruca MG",
    label: "Jampruca (MG)",
  },
  {
    value: "Janaúba MG",
    label: "Janaúba (MG)",
  },
  {
    value: "Jandaia GO",
    label: "Jandaia (GO)",
  },
  {
    value: "Jandaia do Sul PR",
    label: "Jandaia do Sul (PR)",
  },
  {
    value: "Jandaíra BA",
    label: "Jandaíra (BA)",
  },
  {
    value: "Jandaíra RN",
    label: "Jandaíra (RN)",
  },
  {
    value: "Jandira SP",
    label: "Jandira (SP)",
  },
  {
    value: "Janduís RN",
    label: "Janduís (RN)",
  },
  {
    value: "Jangada MT",
    label: "Jangada (MT)",
  },
  {
    value: "Janiópolis PR",
    label: "Janiópolis (PR)",
  },
  {
    value: "Januária MG",
    label: "Januária (MG)",
  },
  {
    value: "Januário Cicco RN",
    label: "Januário Cicco (RN)",
  },
  {
    value: "Japaratinga AL",
    label: "Japaratinga (AL)",
  },
  {
    value: "Japaratuba SE",
    label: "Japaratuba (SE)",
  },
  {
    value: "Japaraíba MG",
    label: "Japaraíba (MG)",
  },
  {
    value: "Japeri RJ",
    label: "Japeri (RJ)",
  },
  {
    value: "Japi RN",
    label: "Japi (RN)",
  },
  {
    value: "Japira PR",
    label: "Japira (PR)",
  },
  {
    value: "Japoată SE",
    label: "Japoată (SE)",
  },
  {
    value: "Japonvar MG",
    label: "Japonvar (MG)",
  },
  {
    value: "Japoră MS",
    label: "Japoră (MS)",
  },
  {
    value: "Japurá AM",
    label: "Japurá (AM)",
  },
  {
    value: "Japurá PR",
    label: "Japurá (PR)",
  },
  {
    value: "Jaqueira PE",
    label: "Jaqueira (PE)",
  },
  {
    value: "Jaquirana RS",
    label: "Jaquirana (RS)",
  },
  {
    value: "Jaraguari MS",
    label: "Jaraguari (MS)",
  },
  {
    value: "Jaraguá GO",
    label: "Jaraguá (GO)",
  },
  {
    value: "Jaraguá do Sul SC",
    label: "Jaraguá do Sul (SC)",
  },
  {
    value: "Jaramataia AL",
    label: "Jaramataia (AL)",
  },
  {
    value: "Jardim CE",
    label: "Jardim (CE)",
  },
  {
    value: "Jardim MS",
    label: "Jardim (MS)",
  },
  {
    value: "Jardim Alegre PR",
    label: "Jardim Alegre (PR)",
  },
  {
    value: "Jardim Olinda PR",
    label: "Jardim Olinda (PR)",
  },
  {
    value: "Jardim de Angicos RN",
    label: "Jardim de Angicos (RN)",
  },
  {
    value: "Jardim de Piranhas RN",
    label: "Jardim de Piranhas (RN)",
  },
  {
    value: "Jardim do Mulato PI",
    label: "Jardim do Mulato (PI)",
  },
  {
    value: "Jardim do Seridó RN",
    label: "Jardim do Seridó (RN)",
  },
  {
    value: "Jardinópolis SC",
    label: "Jardinópolis (SC)",
  },
  {
    value: "Jardinópolis SP",
    label: "Jardinópolis (SP)",
  },
  {
    value: "Jari RS",
    label: "Jari (RS)",
  },
  {
    value: "Jarinu SP",
    label: "Jarinu (SP)",
  },
  {
    value: "Jaru RO",
    label: "Jaru (RO)",
  },
  {
    value: "Jataizinho PR",
    label: "Jataizinho (PR)",
  },
  {
    value: "Jataí GO",
    label: "Jataí (GO)",
  },
  {
    value: "Jataúba PE",
    label: "Jataúba (PE)",
  },
  {
    value: "Jateí MS",
    label: "Jateí (MS)",
  },
  {
    value: "Jati CE",
    label: "Jati (CE)",
  },
  {
    value: "Jatobá MA",
    label: "Jatobá (MA)",
  },
  {
    value: "Jatobá PE",
    label: "Jatobá (PE)",
  },
  {
    value: "Jatobá do Piauí PI",
    label: "Jatobá do Piauí (PI)",
  },
  {
    value: "Jaupaci GO",
    label: "Jaupaci (GO)",
  },
  {
    value: "Jauru MT",
    label: "Jauru (MT)",
  },
  {
    value: "Jaçană RN",
    label: "Jaçană (RN)",
  },
  {
    value: "Jaíba MG",
    label: "Jaíba (MG)",
  },
  {
    value: "Jaú SP",
    label: "Jaú (SP)",
  },
  {
    value: "Jaú do Tocantins TO",
    label: "Jaú do Tocantins (TO)",
  },
  {
    value: "Jeceaba MG",
    label: "Jeceaba (MG)",
  },
  {
    value: "Jenipapo Dos Vieiras MA",
    label: "Jenipapo Dos Vieiras (MA)",
  },
  {
    value: "Jenipapo de Minas MG",
    label: "Jenipapo de Minas (MG)",
  },
  {
    value: "Jequeri MG",
    label: "Jequeri (MG)",
  },
  {
    value: "Jequitaí MG",
    label: "Jequitaí (MG)",
  },
  {
    value: "Jequitibá MG",
    label: "Jequitibá (MG)",
  },
  {
    value: "Jequitinhonha MG",
    label: "Jequitinhonha (MG)",
  },
  {
    value: "Jequiá da Praia AL",
    label: "Jequiá da Praia (AL)",
  },
  {
    value: "Jequié BA",
    label: "Jequié (BA)",
  },
  {
    value: "Jeremoabo BA",
    label: "Jeremoabo (BA)",
  },
  {
    value: "Jericó PB",
    label: "Jericó (PB)",
  },
  {
    value: "Jeriquara SP",
    label: "Jeriquara (SP)",
  },
  {
    value: "Jerumenha PI",
    label: "Jerumenha (PI)",
  },
  {
    value: "Jerônimo Monteiro ES",
    label: "Jerônimo Monteiro (ES)",
  },
  {
    value: "Jesuânia MG",
    label: "Jesuânia (MG)",
  },
  {
    value: "Jesuítas PR",
    label: "Jesuítas (PR)",
  },
  {
    value: "Jesúpolis GO",
    label: "Jesúpolis (GO)",
  },
  {
    value: "Ji-paraná RO",
    label: "Ji-paraná (RO)",
  },
  {
    value: "Jijoca de Jericoacoara CE",
    label: "Jijoca de Jericoacoara (CE)",
  },
  {
    value: "Jiquiriçá BA",
    label: "Jiquiriçá (BA)",
  },
  {
    value: "Jitaúna BA",
    label: "Jitaúna (BA)",
  },
  {
    value: "Joanésia MG",
    label: "Joanésia (MG)",
  },
  {
    value: "Joanópolis SP",
    label: "Joanópolis (SP)",
  },
  {
    value: "Joaquim Felício MG",
    label: "Joaquim Felício (MG)",
  },
  {
    value: "Joaquim Gomes AL",
    label: "Joaquim Gomes (AL)",
  },
  {
    value: "Joaquim Nabuco PE",
    label: "Joaquim Nabuco (PE)",
  },
  {
    value: "Joaquim Pires PI",
    label: "Joaquim Pires (PI)",
  },
  {
    value: "Joaquim Távora PR",
    label: "Joaquim Távora (PR)",
  },
  {
    value: "Joaçaba SC",
    label: "Joaçaba (SC)",
  },
  {
    value: "Joaíma MG",
    label: "Joaíma (MG)",
  },
  {
    value: "Joca Marques PI",
    label: "Joca Marques (PI)",
  },
  {
    value: "Joinville SC",
    label: "Joinville (SC)",
  },
  {
    value: "Jordânia MG",
    label: "Jordânia (MG)",
  },
  {
    value: "Jordăo AC",
    label: "Jordăo (AC)",
  },
  {
    value: "Joselândia MA",
    label: "Joselândia (MA)",
  },
  {
    value: "Josenópolis MG",
    label: "Josenópolis (MG)",
  },
  {
    value: "José Boiteux SC",
    label: "José Boiteux (SC)",
  },
  {
    value: "José Bonifácio SP",
    label: "José Bonifácio (SP)",
  },
  {
    value: "José Gonçalves de Mina MG",
    label: "José Gonçalves de Minas (MG)",
  },
  {
    value: "José Raydan MG",
    label: "José Raydan (MG)",
  },
  {
    value: "José da Penha RN",
    label: "José da Penha (RN)",
  },
  {
    value: "José de Freitas PI",
    label: "José de Freitas (PI)",
  },
  {
    value: "Joviânia GO",
    label: "Joviânia (GO)",
  },
  {
    value: "Joăo Alfredo PE",
    label: "Joăo Alfredo (PE)",
  },
  {
    value: "Joăo Costa PI",
    label: "Joăo Costa (PI)",
  },
  {
    value: "Joăo Câmara RN",
    label: "Joăo Câmara (RN)",
  },
  {
    value: "Joăo Dias RN",
    label: "Joăo Dias (RN)",
  },
  {
    value: "Joăo Dourado BA",
    label: "Joăo Dourado (BA)",
  },
  {
    value: "Joăo Lisboa MA",
    label: "Joăo Lisboa (MA)",
  },
  {
    value: "Joăo Monlevade MG",
    label: "Joăo Monlevade (MG)",
  },
  {
    value: "Joăo Neiva ES",
    label: "Joăo Neiva (ES)",
  },
  {
    value: "Joăo Pessoa PB",
    label: "Joăo Pessoa (PB)",
  },
  {
    value: "Joăo Pinheiro MG",
    label: "Joăo Pinheiro (MG)",
  },
  {
    value: "Joăo Ramalho SP",
    label: "Joăo Ramalho (SP)",
  },
  {
    value: "Juara MT",
    label: "Juara (MT)",
  },
  {
    value: "Juarez Távora PB",
    label: "Juarez Távora (PB)",
  },
  {
    value: "Juarina TO",
    label: "Juarina (TO)",
  },
  {
    value: "Juatuba MG",
    label: "Juatuba (MG)",
  },
  {
    value: "Juazeirinho PB",
    label: "Juazeirinho (PB)",
  },
  {
    value: "Juazeiro BA",
    label: "Juazeiro (BA)",
  },
  {
    value: "Juazeiro do Norte CE",
    label: "Juazeiro do Norte (CE)",
  },
  {
    value: "Juazeiro do Piauí PI",
    label: "Juazeiro do Piauí (PI)",
  },
  {
    value: "Jucati PE",
    label: "Jucati (PE)",
  },
  {
    value: "Jucurutu RN",
    label: "Jucurutu (RN)",
  },
  {
    value: "Jucuruçu BA",
    label: "Jucuruçu (BA)",
  },
  {
    value: "Jucás CE",
    label: "Jucás (CE)",
  },
  {
    value: "Juiz de Fora MG",
    label: "Juiz de Fora (MG)",
  },
  {
    value: "Jumirim SP",
    label: "Jumirim (SP)",
  },
  {
    value: "Junco do Maranhăo MA",
    label: "Junco do Maranhăo (MA)",
  },
  {
    value: "Junco do Seridó PB",
    label: "Junco do Seridó (PB)",
  },
  {
    value: "Jundiaí SP",
    label: "Jundiaí (SP)",
  },
  {
    value: "Jundiaí do Sul PR",
    label: "Jundiaí do Sul (PR)",
  },
  {
    value: "Jundiá AL",
    label: "Jundiá (AL)",
  },
  {
    value: "Jundiá RN",
    label: "Jundiá (RN)",
  },
  {
    value: "Junqueiro AL",
    label: "Junqueiro (AL)",
  },
  {
    value: "Junqueirópolis SP",
    label: "Junqueirópolis (SP)",
  },
  {
    value: "Jupi PE",
    label: "Jupi (PE)",
  },
  {
    value: "Jupiá SC",
    label: "Jupiá (SC)",
  },
  {
    value: "Juquitiba SP",
    label: "Juquitiba (SP)",
  },
  {
    value: "Juquiá SP",
    label: "Juquiá (SP)",
  },
  {
    value: "Juramento MG",
    label: "Juramento (MG)",
  },
  {
    value: "Juranda PR",
    label: "Juranda (PR)",
  },
  {
    value: "Jurema PE",
    label: "Jurema (PE)",
  },
  {
    value: "Jurema PI",
    label: "Jurema (PI)",
  },
  {
    value: "Juripiranga PB",
    label: "Juripiranga (PB)",
  },
  {
    value: "Juru PB",
    label: "Juru (PB)",
  },
  {
    value: "Juruaia MG",
    label: "Juruaia (MG)",
  },
  {
    value: "Juruena MT",
    label: "Juruena (MT)",
  },
  {
    value: "Juruti PA",
    label: "Juruti (PA)",
  },
  {
    value: "Juruá AM",
    label: "Juruá (AM)",
  },
  {
    value: "Juscimeira MT",
    label: "Juscimeira (MT)",
  },
  {
    value: "Jussara BA",
    label: "Jussara (BA)",
  },
  {
    value: "Jussara GO",
    label: "Jussara (GO)",
  },
  {
    value: "Jussara PR",
    label: "Jussara (PR)",
  },
  {
    value: "Jussari BA",
    label: "Jussari (BA)",
  },
  {
    value: "Jussiape BA",
    label: "Jussiape (BA)",
  },
  {
    value: "Jutaí AM",
    label: "Jutaí (AM)",
  },
  {
    value: "Juti MS",
    label: "Juti (MS)",
  },
  {
    value: "Juvenília MG",
    label: "Juvenília (MG)",
  },
  {
    value: "Juína MT",
    label: "Juína (MT)",
  },
  {
    value: "Jóia RS",
    label: "Jóia (RS)",
  },
  {
    value: "Júlio Borges PI",
    label: "Júlio Borges (PI)",
  },
  {
    value: "Júlio Mesquita SP",
    label: "Júlio Mesquita (SP)",
  },
  {
    value: "Júlio de Castilhos RS",
    label: "Júlio de Castilhos (RS)",
  },
  {
    value: "Kaloré PR",
    label: "Kaloré (PR)",
  },
  {
    value: "Lacerdópolis SC",
    label: "Lacerdópolis (SC)",
  },
  {
    value: "Ladainha MG",
    label: "Ladainha (MG)",
  },
  {
    value: "Ladário MS",
    label: "Ladário (MS)",
  },
  {
    value: "Lafaiete Coutinho BA",
    label: "Lafaiete Coutinho (BA)",
  },
  {
    value: "Lagamar MG",
    label: "Lagamar (MG)",
  },
  {
    value: "Lagarto SE",
    label: "Lagarto (SE)",
  },
  {
    value: "Lages SC",
    label: "Lages (SC)",
  },
  {
    value: "Lago Dos Rodrigues MA",
    label: "Lago Dos Rodrigues (MA)",
  },
  {
    value: "Lago Verde MA",
    label: "Lago Verde (MA)",
  },
  {
    value: "Lago da Pedra MA",
    label: "Lago da Pedra (MA)",
  },
  {
    value: "Lago do Junco MA",
    label: "Lago do Junco (MA)",
  },
  {
    value: "Lagoa PB",
    label: "Lagoa (PB)",
  },
  {
    value: "Lagoa Alegre PI",
    label: "Lagoa Alegre (PI)",
  },
  {
    value: "Lagoa Bonita do Sul RS",
    label: "Lagoa Bonita do Sul (RS)",
  },
  {
    value: "Lagoa Dos Gatos PE",
    label: "Lagoa Dos Gatos (PE)",
  },
  {
    value: "Lagoa Dos Patos MG",
    label: "Lagoa Dos Patos (MG)",
  },
  {
    value: "Lagoa Dos Três Cantos RS",
    label: "Lagoa Dos Três Cantos (RS)",
  },
  {
    value: "Lagoa Dourada MG",
    label: "Lagoa Dourada (MG)",
  },
  {
    value: "Lagoa D´anta RN",
    label: "Lagoa D´anta (RN)",
  },
  {
    value: "Lagoa Formosa MG",
    label: "Lagoa Formosa (MG)",
  },
  {
    value: "Lagoa Grande MG",
    label: "Lagoa Grande (MG)",
  },
  {
    value: "Lagoa Grande PE",
    label: "Lagoa Grande (PE)",
  },
  {
    value: "Lagoa Grande do Maranh MA",
    label: "Lagoa Grande do Maranhăo (MA)",
  },
  {
    value: "Lagoa Nova RN",
    label: "Lagoa Nova (RN)",
  },
  {
    value: "Lagoa Real BA",
    label: "Lagoa Real (BA)",
  },
  {
    value: "Lagoa Salgada RN",
    label: "Lagoa Salgada (RN)",
  },
  {
    value: "Lagoa Santa GO",
    label: "Lagoa Santa (GO)",
  },
  {
    value: "Lagoa Santa MG",
    label: "Lagoa Santa (MG)",
  },
  {
    value: "Lagoa Seca PB",
    label: "Lagoa Seca (PB)",
  },
  {
    value: "Lagoa Vermelha RS",
    label: "Lagoa Vermelha (RS)",
  },
  {
    value: "Lagoa da Canoa AL",
    label: "Lagoa da Canoa (AL)",
  },
  {
    value: "Lagoa da Confusăo TO",
    label: "Lagoa da Confusăo (TO)",
  },
  {
    value: "Lagoa da Prata MG",
    label: "Lagoa da Prata (MG)",
  },
  {
    value: "Lagoa de Dentro PB",
    label: "Lagoa de Dentro (PB)",
  },
  {
    value: "Lagoa de Pedras RN",
    label: "Lagoa de Pedras (RN)",
  },
  {
    value: "Lagoa de Săo Francisco PI",
    label: "Lagoa de Săo Francisco (PI)",
  },
  {
    value: "Lagoa de Velhos RN",
    label: "Lagoa de Velhos (RN)",
  },
  {
    value: "Lagoa do Barro do Piau PI",
    label: "Lagoa do Barro do Piauí (PI)",
  },
  {
    value: "Lagoa do Carro PE",
    label: "Lagoa do Carro (PE)",
  },
  {
    value: "Lagoa do Itaenga PE",
    label: "Lagoa do Itaenga (PE)",
  },
  {
    value: "Lagoa do Mato MA",
    label: "Lagoa do Mato (MA)",
  },
  {
    value: "Lagoa do Ouro PE",
    label: "Lagoa do Ouro (PE)",
  },
  {
    value: "Lagoa do Piauí PI",
    label: "Lagoa do Piauí (PI)",
  },
  {
    value: "Lagoa do Sítio PI",
    label: "Lagoa do Sítio (PI)",
  },
  {
    value: "Lagoa do Tocantins TO",
    label: "Lagoa do Tocantins (TO)",
  },
  {
    value: "Lagoinha SP",
    label: "Lagoinha (SP)",
  },
  {
    value: "Lagoinha do Piauí PI",
    label: "Lagoinha do Piauí (PI)",
  },
  {
    value: "Lagoăo RS",
    label: "Lagoăo (RS)",
  },
  {
    value: "Laguna SC",
    label: "Laguna (SC)",
  },
  {
    value: "Laguna Carapă MS",
    label: "Laguna Carapă (MS)",
  },
  {
    value: "Laje BA",
    label: "Laje (BA)",
  },
  {
    value: "Laje do Muriaé RJ",
    label: "Laje do Muriaé (RJ)",
  },
  {
    value: "Lajeado RS",
    label: "Lajeado (RS)",
  },
  {
    value: "Lajeado TO",
    label: "Lajeado (TO)",
  },
  {
    value: "Lajeado Grande SC",
    label: "Lajeado Grande (SC)",
  },
  {
    value: "Lajeado Novo MA",
    label: "Lajeado Novo (MA)",
  },
  {
    value: "Lajeado do Bugre RS",
    label: "Lajeado do Bugre (RS)",
  },
  {
    value: "Lajedinho BA",
    label: "Lajedinho (BA)",
  },
  {
    value: "Lajedo PE",
    label: "Lajedo (PE)",
  },
  {
    value: "Lajedo do Tabocal BA",
    label: "Lajedo do Tabocal (BA)",
  },
  {
    value: "Lajedăo BA",
    label: "Lajedăo (BA)",
  },
  {
    value: "Lajes RN",
    label: "Lajes (RN)",
  },
  {
    value: "Lajes Pintadas RN",
    label: "Lajes Pintadas (RN)",
  },
  {
    value: "Lajinha MG",
    label: "Lajinha (MG)",
  },
  {
    value: "Lamarăo BA",
    label: "Lamarăo (BA)",
  },
  {
    value: "Lambari MG",
    label: "Lambari (MG)",
  },
  {
    value: "Lambari D´oeste MT",
    label: "Lambari D´oeste (MT)",
  },
  {
    value: "Lamim MG",
    label: "Lamim (MG)",
  },
  {
    value: "Landri Sales PI",
    label: "Landri Sales (PI)",
  },
  {
    value: "Lapa PR",
    label: "Lapa (PR)",
  },
  {
    value: "Lapăo BA",
    label: "Lapăo (BA)",
  },
  {
    value: "Laranja da Terra ES",
    label: "Laranja da Terra (ES)",
  },
  {
    value: "Laranjal MG",
    label: "Laranjal (MG)",
  },
  {
    value: "Laranjal PR",
    label: "Laranjal (PR)",
  },
  {
    value: "Laranjal Paulista SP",
    label: "Laranjal Paulista (SP)",
  },
  {
    value: "Laranjal do Jari AP",
    label: "Laranjal do Jari (AP)",
  },
  {
    value: "Laranjeiras SE",
    label: "Laranjeiras (SE)",
  },
  {
    value: "Laranjeiras do Sul PR",
    label: "Laranjeiras do Sul (PR)",
  },
  {
    value: "Lassance MG",
    label: "Lassance (MG)",
  },
  {
    value: "Lastro PB",
    label: "Lastro (PB)",
  },
  {
    value: "Laurentino SC",
    label: "Laurentino (SC)",
  },
  {
    value: "Lauro Muller SC",
    label: "Lauro Muller (SC)",
  },
  {
    value: "Lauro de Freitas BA",
    label: "Lauro de Freitas (BA)",
  },
  {
    value: "Lavandeira TO",
    label: "Lavandeira (TO)",
  },
  {
    value: "Lavras MG",
    label: "Lavras (MG)",
  },
  {
    value: "Lavras da Mangabeira CE",
    label: "Lavras da Mangabeira (CE)",
  },
  {
    value: "Lavras do Sul RS",
    label: "Lavras do Sul (RS)",
  },
  {
    value: "Lavrinhas SP",
    label: "Lavrinhas (SP)",
  },
  {
    value: "Lavínia SP",
    label: "Lavínia (SP)",
  },
  {
    value: "Leandro Ferreira MG",
    label: "Leandro Ferreira (MG)",
  },
  {
    value: "Lebon Régis SC",
    label: "Lebon Régis (SC)",
  },
  {
    value: "Leme SP",
    label: "Leme (SP)",
  },
  {
    value: "Leme do Prado MG",
    label: "Leme do Prado (MG)",
  },
  {
    value: "Lençóis BA",
    label: "Lençóis (BA)",
  },
  {
    value: "Lençóis Paulista SP",
    label: "Lençóis Paulista (SP)",
  },
  {
    value: "Leoberto Leal SC",
    label: "Leoberto Leal (SC)",
  },
  {
    value: "Leopoldina MG",
    label: "Leopoldina (MG)",
  },
  {
    value: "Leopoldo de Bulhơes GO",
    label: "Leopoldo de Bulhơes (GO)",
  },
  {
    value: "Leópolis PR",
    label: "Leópolis (PR)",
  },
  {
    value: "Liberato Salzano RS",
    label: "Liberato Salzano (RS)",
  },
  {
    value: "Liberdade MG",
    label: "Liberdade (MG)",
  },
  {
    value: "Licínio de Almeida BA",
    label: "Licínio de Almeida (BA)",
  },
  {
    value: "Lidianópolis PR",
    label: "Lidianópolis (PR)",
  },
  {
    value: "Lima Campos MA",
    label: "Lima Campos (MA)",
  },
  {
    value: "Lima Duarte MG",
    label: "Lima Duarte (MG)",
  },
  {
    value: "Limeira SP",
    label: "Limeira (SP)",
  },
  {
    value: "Limeira do Oeste MG",
    label: "Limeira do Oeste (MG)",
  },
  {
    value: "Limoeiro PE",
    label: "Limoeiro (PE)",
  },
  {
    value: "Limoeiro de Anadia AL",
    label: "Limoeiro de Anadia (AL)",
  },
  {
    value: "Limoeiro do Ajuru PA",
    label: "Limoeiro do Ajuru (PA)",
  },
  {
    value: "Limoeiro do Norte CE",
    label: "Limoeiro do Norte (CE)",
  },
  {
    value: "Lindoeste PR",
    label: "Lindoeste (PR)",
  },
  {
    value: "Lindolfo Collor RS",
    label: "Lindolfo Collor (RS)",
  },
  {
    value: "Lindóia SP",
    label: "Lindóia (SP)",
  },
  {
    value: "Lindóia do Sul SC",
    label: "Lindóia do Sul (SC)",
  },
  {
    value: "Linha Nova RS",
    label: "Linha Nova (RS)",
  },
  {
    value: "Linhares ES",
    label: "Linhares (ES)",
  },
  {
    value: "Lins SP",
    label: "Lins (SP)",
  },
  {
    value: "Livramento PB",
    label: "Livramento (PB)",
  },
  {
    value: "Livramento de Nossa Se BA",
    label: "Livramento de Nossa Senhora (BA)",
  },
  {
    value: "Lizarda TO",
    label: "Lizarda (TO)",
  },
  {
    value: "Loanda PR",
    label: "Loanda (PR)",
  },
  {
    value: "Lobato PR",
    label: "Lobato (PR)",
  },
  {
    value: "Logradouro PB",
    label: "Logradouro (PB)",
  },
  {
    value: "Londrina PR",
    label: "Londrina (PR)",
  },
  {
    value: "Lontra MG",
    label: "Lontra (MG)",
  },
  {
    value: "Lontras SC",
    label: "Lontras (SC)",
  },
  {
    value: "Lorena SP",
    label: "Lorena (SP)",
  },
  {
    value: "Loreto MA",
    label: "Loreto (MA)",
  },
  {
    value: "Lourdes SP",
    label: "Lourdes (SP)",
  },
  {
    value: "Louveira SP",
    label: "Louveira (SP)",
  },
  {
    value: "Lucas do Rio Verde MT",
    label: "Lucas do Rio Verde (MT)",
  },
  {
    value: "Lucena PB",
    label: "Lucena (PB)",
  },
  {
    value: "Lucianópolis SP",
    label: "Lucianópolis (SP)",
  },
  {
    value: "Luciára MT",
    label: "Luciára (MT)",
  },
  {
    value: "Lucrécia RN",
    label: "Lucrécia (RN)",
  },
  {
    value: "Lucélia SP",
    label: "Lucélia (SP)",
  },
  {
    value: "Luisburgo MG",
    label: "Luisburgo (MG)",
  },
  {
    value: "Luislândia MG",
    label: "Luislândia (MG)",
  },
  {
    value: "Luiz Alves SC",
    label: "Luiz Alves (SC)",
  },
  {
    value: "Luiziana PR",
    label: "Luiziana (PR)",
  },
  {
    value: "Luiziânia SP",
    label: "Luiziânia (SP)",
  },
  {
    value: "Luminárias MG",
    label: "Luminárias (MG)",
  },
  {
    value: "Lunardelli PR",
    label: "Lunardelli (PR)",
  },
  {
    value: "Lupionópolis PR",
    label: "Lupionópolis (PR)",
  },
  {
    value: "Lupércio SP",
    label: "Lupércio (SP)",
  },
  {
    value: "Lutécia SP",
    label: "Lutécia (SP)",
  },
  {
    value: "Luz MG",
    label: "Luz (MG)",
  },
  {
    value: "Luzerna SC",
    label: "Luzerna (SC)",
  },
  {
    value: "Luzilândia PI",
    label: "Luzilândia (PI)",
  },
  {
    value: "Luzinópolis TO",
    label: "Luzinópolis (TO)",
  },
  {
    value: "Luziânia GO",
    label: "Luziânia (GO)",
  },
  {
    value: "Luís Antônio SP",
    label: "Luís Antônio (SP)",
  },
  {
    value: "Luís Correia PI",
    label: "Luís Correia (PI)",
  },
  {
    value: "Luís Domingues MA",
    label: "Luís Domingues (MA)",
  },
  {
    value: "Luís Eduardo Magalhăes BA",
    label: "Luís Eduardo Magalhăes (BA)",
  },
  {
    value: "Luís Gomes RN",
    label: "Luís Gomes (RN)",
  },
  {
    value: "Lábrea AM",
    label: "Lábrea (AM)",
  },
  {
    value: "Macajuba BA",
    label: "Macajuba (BA)",
  },
  {
    value: "Macambira SE",
    label: "Macambira (SE)",
  },
  {
    value: "Macaparana PE",
    label: "Macaparana (PE)",
  },
  {
    value: "Macapá AP",
    label: "Macapá (AP)",
  },
  {
    value: "Macarani BA",
    label: "Macarani (BA)",
  },
  {
    value: "Macatuba SP",
    label: "Macatuba (SP)",
  },
  {
    value: "Macau RN",
    label: "Macau (RN)",
  },
  {
    value: "Macaubal SP",
    label: "Macaubal (SP)",
  },
  {
    value: "Macaé RJ",
    label: "Macaé (RJ)",
  },
  {
    value: "Macaíba RN",
    label: "Macaíba (RN)",
  },
  {
    value: "Macaúbas BA",
    label: "Macaúbas (BA)",
  },
  {
    value: "Macedônia SP",
    label: "Macedônia (SP)",
  },
  {
    value: "Maceió AL",
    label: "Maceió (AL)",
  },
  {
    value: "Machacalis MG",
    label: "Machacalis (MG)",
  },
  {
    value: "Machadinho RS",
    label: "Machadinho (RS)",
  },
  {
    value: "Machadinho D´oeste RO",
    label: "Machadinho D´oeste (RO)",
  },
  {
    value: "Machado MG",
    label: "Machado (MG)",
  },
  {
    value: "Machados PE",
    label: "Machados (PE)",
  },
  {
    value: "Macieira SC",
    label: "Macieira (SC)",
  },
  {
    value: "Macuco RJ",
    label: "Macuco (RJ)",
  },
  {
    value: "Macururé BA",
    label: "Macururé (BA)",
  },
  {
    value: "Madalena CE",
    label: "Madalena (CE)",
  },
  {
    value: "Madeiro PI",
    label: "Madeiro (PI)",
  },
  {
    value: "Madre de Deus BA",
    label: "Madre de Deus (BA)",
  },
  {
    value: "Madre de Deus de Minas MG",
    label: "Madre de Deus de Minas (MG)",
  },
  {
    value: "Maetinga BA",
    label: "Maetinga (BA)",
  },
  {
    value: "Mafra SC",
    label: "Mafra (SC)",
  },
  {
    value: "Magalhăes Barata PA",
    label: "Magalhăes Barata (PA)",
  },
  {
    value: "Magalhăes de Almeida MA",
    label: "Magalhăes de Almeida (MA)",
  },
  {
    value: "Magda SP",
    label: "Magda (SP)",
  },
  {
    value: "Magé RJ",
    label: "Magé (RJ)",
  },
  {
    value: "Maiquinique BA",
    label: "Maiquinique (BA)",
  },
  {
    value: "Mairi BA",
    label: "Mairi (BA)",
  },
  {
    value: "Mairinque SP",
    label: "Mairinque (SP)",
  },
  {
    value: "Mairiporă SP",
    label: "Mairiporă (SP)",
  },
  {
    value: "Mairipotaba GO",
    label: "Mairipotaba (GO)",
  },
  {
    value: "Major Gercino SC",
    label: "Major Gercino (SC)",
  },
  {
    value: "Major Isidoro AL",
    label: "Major Isidoro (AL)",
  },
  {
    value: "Major Sales RN",
    label: "Major Sales (RN)",
  },
  {
    value: "Major Vieira SC",
    label: "Major Vieira (SC)",
  },
  {
    value: "Malacacheta MG",
    label: "Malacacheta (MG)",
  },
  {
    value: "Malhada BA",
    label: "Malhada (BA)",
  },
  {
    value: "Malhada Dos Bois SE",
    label: "Malhada Dos Bois (SE)",
  },
  {
    value: "Malhada de Pedras BA",
    label: "Malhada de Pedras (BA)",
  },
  {
    value: "Malhador SE",
    label: "Malhador (SE)",
  },
  {
    value: "Mallet PR",
    label: "Mallet (PR)",
  },
  {
    value: "Malta PB",
    label: "Malta (PB)",
  },
  {
    value: "Mamanguape PB",
    label: "Mamanguape (PB)",
  },
  {
    value: "Mambaí GO",
    label: "Mambaí (GO)",
  },
  {
    value: "Mamborê PR",
    label: "Mamborê (PR)",
  },
  {
    value: "Mamonas MG",
    label: "Mamonas (MG)",
  },
  {
    value: "Mampituba RS",
    label: "Mampituba (RS)",
  },
  {
    value: "Manacapuru AM",
    label: "Manacapuru (AM)",
  },
  {
    value: "Manaquiri AM",
    label: "Manaquiri (AM)",
  },
  {
    value: "Manari PE",
    label: "Manari (PE)",
  },
  {
    value: "Manaus AM",
    label: "Manaus (AM)",
  },
  {
    value: "Manaíra PB",
    label: "Manaíra (PB)",
  },
  {
    value: "Mandaguari PR",
    label: "Mandaguari (PR)",
  },
  {
    value: "Mandaguaçu PR",
    label: "Mandaguaçu (PR)",
  },
  {
    value: "Mandirituba PR",
    label: "Mandirituba (PR)",
  },
  {
    value: "Manduri SP",
    label: "Manduri (SP)",
  },
  {
    value: "Manfrinópolis PR",
    label: "Manfrinópolis (PR)",
  },
  {
    value: "Manga MG",
    label: "Manga (MG)",
  },
  {
    value: "Mangaratiba RJ",
    label: "Mangaratiba (RJ)",
  },
  {
    value: "Mangueirinha PR",
    label: "Mangueirinha (PR)",
  },
  {
    value: "Manhuaçu MG",
    label: "Manhuaçu (MG)",
  },
  {
    value: "Manhumirim MG",
    label: "Manhumirim (MG)",
  },
  {
    value: "Manicoré AM",
    label: "Manicoré (AM)",
  },
  {
    value: "Manoel Emídio PI",
    label: "Manoel Emídio (PI)",
  },
  {
    value: "Manoel Ribas PR",
    label: "Manoel Ribas (PR)",
  },
  {
    value: "Manoel Urbano AC",
    label: "Manoel Urbano (AC)",
  },
  {
    value: "Manoel Viana RS",
    label: "Manoel Viana (RS)",
  },
  {
    value: "Manoel Vitorino BA",
    label: "Manoel Vitorino (BA)",
  },
  {
    value: "Mansidăo BA",
    label: "Mansidăo (BA)",
  },
  {
    value: "Mantena MG",
    label: "Mantena (MG)",
  },
  {
    value: "Mantenópolis ES",
    label: "Mantenópolis (ES)",
  },
  {
    value: "Maquiné RS",
    label: "Maquiné (RS)",
  },
  {
    value: "Mar Vermelho AL",
    label: "Mar Vermelho (AL)",
  },
  {
    value: "Mar de Espanha MG",
    label: "Mar de Espanha (MG)",
  },
  {
    value: "Mara Rosa GO",
    label: "Mara Rosa (GO)",
  },
  {
    value: "Marabá PA",
    label: "Marabá (PA)",
  },
  {
    value: "Marabá Paulista SP",
    label: "Marabá Paulista (SP)",
  },
  {
    value: "Maracaju MS",
    label: "Maracaju (MS)",
  },
  {
    value: "Maracajá SC",
    label: "Maracajá (SC)",
  },
  {
    value: "Maracanaú CE",
    label: "Maracanaú (CE)",
  },
  {
    value: "Maracană PA",
    label: "Maracană (PA)",
  },
  {
    value: "Maracaçumé MA",
    label: "Maracaçumé (MA)",
  },
  {
    value: "Maracaí SP",
    label: "Maracaí (SP)",
  },
  {
    value: "Maracás BA",
    label: "Maracás (BA)",
  },
  {
    value: "Maragogi AL",
    label: "Maragogi (AL)",
  },
  {
    value: "Maragogipe BA",
    label: "Maragogipe (BA)",
  },
  {
    value: "Maraial PE",
    label: "Maraial (PE)",
  },
  {
    value: "Marajá do Sena MA",
    label: "Marajá do Sena (MA)",
  },
  {
    value: "Maranguape CE",
    label: "Maranguape (CE)",
  },
  {
    value: "Maranhăozinho MA",
    label: "Maranhăozinho (MA)",
  },
  {
    value: "Marapanim PA",
    label: "Marapanim (PA)",
  },
  {
    value: "Marapoama SP",
    label: "Marapoama (SP)",
  },
  {
    value: "Marataízes ES",
    label: "Marataízes (ES)",
  },
  {
    value: "Maratá RS",
    label: "Maratá (RS)",
  },
  {
    value: "Marau RS",
    label: "Marau (RS)",
  },
  {
    value: "Maravilha AL",
    label: "Maravilha (AL)",
  },
  {
    value: "Maravilha SC",
    label: "Maravilha (SC)",
  },
  {
    value: "Maravilhas MG",
    label: "Maravilhas (MG)",
  },
  {
    value: "Maraú BA",
    label: "Maraú (BA)",
  },
  {
    value: "Maraă AM",
    label: "Maraă (AM)",
  },
  {
    value: "Marcaçăo PB",
    label: "Marcaçăo (PB)",
  },
  {
    value: "Marcelino Ramos RS",
    label: "Marcelino Ramos (RS)",
  },
  {
    value: "Marcelino Vieira RN",
    label: "Marcelino Vieira (RN)",
  },
  {
    value: "Marcelândia MT",
    label: "Marcelândia (MT)",
  },
  {
    value: "Marcionílio Souza BA",
    label: "Marcionílio Souza (BA)",
  },
  {
    value: "Marco CE",
    label: "Marco (CE)",
  },
  {
    value: "Marcolândia PI",
    label: "Marcolândia (PI)",
  },
  {
    value: "Marcos Parente PI",
    label: "Marcos Parente (PI)",
  },
  {
    value: "Marechal Cândido Rondo PR",
    label: "Marechal Cândido Rondon (PR)",
  },
  {
    value: "Marechal Deodoro AL",
    label: "Marechal Deodoro (AL)",
  },
  {
    value: "Marechal Floriano ES",
    label: "Marechal Floriano (ES)",
  },
  {
    value: "Marechal Thaumaturgo AC",
    label: "Marechal Thaumaturgo (AC)",
  },
  {
    value: "Marema SC",
    label: "Marema (SC)",
  },
  {
    value: "Mari PB",
    label: "Mari (PB)",
  },
  {
    value: "Maria Helena PR",
    label: "Maria Helena (PR)",
  },
  {
    value: "Maria da fé MG",
    label: "Maria da fé (MG)",
  },
  {
    value: "Marialva PR",
    label: "Marialva (PR)",
  },
  {
    value: "Mariana MG",
    label: "Mariana (MG)",
  },
  {
    value: "Mariana Pimentel RS",
    label: "Mariana Pimentel (RS)",
  },
  {
    value: "Mariano Moro RS",
    label: "Mariano Moro (RS)",
  },
  {
    value: "Marianópolis do Tocant TO",
    label: "Marianópolis do Tocantins (TO)",
  },
  {
    value: "Maribondo AL",
    label: "Maribondo (AL)",
  },
  {
    value: "Maricá RJ",
    label: "Maricá (RJ)",
  },
  {
    value: "Marilac MG",
    label: "Marilac (MG)",
  },
  {
    value: "Marilena PR",
    label: "Marilena (PR)",
  },
  {
    value: "Mariluz PR",
    label: "Mariluz (PR)",
  },
  {
    value: "Marilândia ES",
    label: "Marilândia (ES)",
  },
  {
    value: "Marilândia do Sul PR",
    label: "Marilândia do Sul (PR)",
  },
  {
    value: "Maringá PR",
    label: "Maringá (PR)",
  },
  {
    value: "Marinópolis SP",
    label: "Marinópolis (SP)",
  },
  {
    value: "Maripá PR",
    label: "Maripá (PR)",
  },
  {
    value: "Maripá de Minas MG",
    label: "Maripá de Minas (MG)",
  },
  {
    value: "Marituba PA",
    label: "Marituba (PA)",
  },
  {
    value: "Marizópolis PB",
    label: "Marizópolis (PB)",
  },
  {
    value: "Mariápolis SP",
    label: "Mariápolis (SP)",
  },
  {
    value: "Mariópolis PR",
    label: "Mariópolis (PR)",
  },
  {
    value: "Marliéria MG",
    label: "Marliéria (MG)",
  },
  {
    value: "Marmeleiro PR",
    label: "Marmeleiro (PR)",
  },
  {
    value: "Marmelópolis MG",
    label: "Marmelópolis (MG)",
  },
  {
    value: "Marques de Souza RS",
    label: "Marques de Souza (RS)",
  },
  {
    value: "Marquinho PR",
    label: "Marquinho (PR)",
  },
  {
    value: "Martinho Campos MG",
    label: "Martinho Campos (MG)",
  },
  {
    value: "Martins RN",
    label: "Martins (RN)",
  },
  {
    value: "Martins Soares MG",
    label: "Martins Soares (MG)",
  },
  {
    value: "Martinópole CE",
    label: "Martinópole (CE)",
  },
  {
    value: "Martinópolis SP",
    label: "Martinópolis (SP)",
  },
  {
    value: "Maruim SE",
    label: "Maruim (SE)",
  },
  {
    value: "Marumbi PR",
    label: "Marumbi (PR)",
  },
  {
    value: "Marzagăo GO",
    label: "Marzagăo (GO)",
  },
  {
    value: "Marília SP",
    label: "Marília (SP)",
  },
  {
    value: "Mascote BA",
    label: "Mascote (BA)",
  },
  {
    value: "Massapê CE",
    label: "Massapê (CE)",
  },
  {
    value: "Massapê do Piauí PI",
    label: "Massapê do Piauí (PI)",
  },
  {
    value: "Massaranduba PB",
    label: "Massaranduba (PB)",
  },
  {
    value: "Massaranduba SC",
    label: "Massaranduba (SC)",
  },
  {
    value: "Mata RS",
    label: "Mata (RS)",
  },
  {
    value: "Mata Grande AL",
    label: "Mata Grande (AL)",
  },
  {
    value: "Mata Roma MA",
    label: "Mata Roma (MA)",
  },
  {
    value: "Mata Verde MG",
    label: "Mata Verde (MG)",
  },
  {
    value: "Mata de Săo Joăo BA",
    label: "Mata de Săo Joăo (BA)",
  },
  {
    value: "Mataraca PB",
    label: "Mataraca (PB)",
  },
  {
    value: "Mateiros TO",
    label: "Mateiros (TO)",
  },
  {
    value: "Matelândia PR",
    label: "Matelândia (PR)",
  },
  {
    value: "Materlândia MG",
    label: "Materlândia (MG)",
  },
  {
    value: "Mateus Leme MG",
    label: "Mateus Leme (MG)",
  },
  {
    value: "Mathias Lobato MG",
    label: "Mathias Lobato (MG)",
  },
  {
    value: "Matias Barbosa MG",
    label: "Matias Barbosa (MG)",
  },
  {
    value: "Matias Cardoso MG",
    label: "Matias Cardoso (MG)",
  },
  {
    value: "Matias Olímpio PI",
    label: "Matias Olímpio (PI)",
  },
  {
    value: "Matina BA",
    label: "Matina (BA)",
  },
  {
    value: "Matinha MA",
    label: "Matinha (MA)",
  },
  {
    value: "Matinhas PB",
    label: "Matinhas (PB)",
  },
  {
    value: "Matinhos PR",
    label: "Matinhos (PR)",
  },
  {
    value: "Matipó MG",
    label: "Matipó (MG)",
  },
  {
    value: "Mato Castelhano RS",
    label: "Mato Castelhano (RS)",
  },
  {
    value: "Mato Grosso PB",
    label: "Mato Grosso (PB)",
  },
  {
    value: "Mato Leităo RS",
    label: "Mato Leităo (RS)",
  },
  {
    value: "Mato Queimado RS",
    label: "Mato Queimado (RS)",
  },
  {
    value: "Mato Rico PR",
    label: "Mato Rico (PR)",
  },
  {
    value: "Mato Verde MG",
    label: "Mato Verde (MG)",
  },
  {
    value: "Matos Costa SC",
    label: "Matos Costa (SC)",
  },
  {
    value: "Matozinhos MG",
    label: "Matozinhos (MG)",
  },
  {
    value: "Matrinchă GO",
    label: "Matrinchă (GO)",
  },
  {
    value: "Matriz de Camaragibe AL",
    label: "Matriz de Camaragibe (AL)",
  },
  {
    value: "Matupá MT",
    label: "Matupá (MT)",
  },
  {
    value: "Maturéia PB",
    label: "Maturéia (PB)",
  },
  {
    value: "Matutina MG",
    label: "Matutina (MG)",
  },
  {
    value: "Matăo SP",
    label: "Matăo (SP)",
  },
  {
    value: "Matơes MA",
    label: "Matơes (MA)",
  },
  {
    value: "Matơes do Norte MA",
    label: "Matơes do Norte (MA)",
  },
  {
    value: "Maurilândia GO",
    label: "Maurilândia (GO)",
  },
  {
    value: "Maurilândia do Tocanti TO",
    label: "Maurilândia do Tocantins (TO)",
  },
  {
    value: "Mauriti CE",
    label: "Mauriti (CE)",
  },
  {
    value: "Mauá SP",
    label: "Mauá (SP)",
  },
  {
    value: "Mauá da Serra PR",
    label: "Mauá da Serra (PR)",
  },
  {
    value: "Maués AM",
    label: "Maués (AM)",
  },
  {
    value: "Maxaranguape RN",
    label: "Maxaranguape (RN)",
  },
  {
    value: "Maximiliano de Almeida RS",
    label: "Maximiliano de Almeida (RS)",
  },
  {
    value: "Mazagăo AP",
    label: "Mazagăo (AP)",
  },
  {
    value: "Maçambara RS",
    label: "Maçambara (RS)",
  },
  {
    value: "Medeiros MG",
    label: "Medeiros (MG)",
  },
  {
    value: "Medeiros Neto BA",
    label: "Medeiros Neto (BA)",
  },
  {
    value: "Medianeira PR",
    label: "Medianeira (PR)",
  },
  {
    value: "Medicilândia PA",
    label: "Medicilândia (PA)",
  },
  {
    value: "Medina MG",
    label: "Medina (MG)",
  },
  {
    value: "Meleiro SC",
    label: "Meleiro (SC)",
  },
  {
    value: "Melgaço PA",
    label: "Melgaço (PA)",
  },
  {
    value: "Mendes RJ",
    label: "Mendes (RJ)",
  },
  {
    value: "Mendes Pimentel MG",
    label: "Mendes Pimentel (MG)",
  },
  {
    value: "Mendonça SP",
    label: "Mendonça (SP)",
  },
  {
    value: "Mercedes PR",
    label: "Mercedes (PR)",
  },
  {
    value: "Mercês MG",
    label: "Mercês (MG)",
  },
  {
    value: "Meridiano SP",
    label: "Meridiano (SP)",
  },
  {
    value: "Meruoca CE",
    label: "Meruoca (CE)",
  },
  {
    value: "Mesquita MG",
    label: "Mesquita (MG)",
  },
  {
    value: "Mesquita RJ",
    label: "Mesquita (RJ)",
  },
  {
    value: "Messias AL",
    label: "Messias (AL)",
  },
  {
    value: "Messias Targino RN",
    label: "Messias Targino (RN)",
  },
  {
    value: "Mesópolis SP",
    label: "Mesópolis (SP)",
  },
  {
    value: "Miguel Alves PI",
    label: "Miguel Alves (PI)",
  },
  {
    value: "Miguel Calmon BA",
    label: "Miguel Calmon (BA)",
  },
  {
    value: "Miguel Leăo PI",
    label: "Miguel Leăo (PI)",
  },
  {
    value: "Miguel Pereira RJ",
    label: "Miguel Pereira (RJ)",
  },
  {
    value: "Miguelópolis SP",
    label: "Miguelópolis (SP)",
  },
  {
    value: "Milagres BA",
    label: "Milagres (BA)",
  },
  {
    value: "Milagres CE",
    label: "Milagres (CE)",
  },
  {
    value: "Milagres do Maranhăo MA",
    label: "Milagres do Maranhăo (MA)",
  },
  {
    value: "Milhă CE",
    label: "Milhă (CE)",
  },
  {
    value: "Milton Brandăo PI",
    label: "Milton Brandăo (PI)",
  },
  {
    value: "Mimoso de Goiás GO",
    label: "Mimoso de Goiás (GO)",
  },
  {
    value: "Mimoso do Sul ES",
    label: "Mimoso do Sul (ES)",
  },
  {
    value: "Minador do Negrăo AL",
    label: "Minador do Negrăo (AL)",
  },
  {
    value: "Minas Novas MG",
    label: "Minas Novas (MG)",
  },
  {
    value: "Minas do Leăo RS",
    label: "Minas do Leăo (RS)",
  },
  {
    value: "Minaçu GO",
    label: "Minaçu (GO)",
  },
  {
    value: "Minduri MG",
    label: "Minduri (MG)",
  },
  {
    value: "Mineiros GO",
    label: "Mineiros (GO)",
  },
  {
    value: "Mineiros do Tietê SP",
    label: "Mineiros do Tietê (SP)",
  },
  {
    value: "Ministro Andreazza RO",
    label: "Ministro Andreazza (RO)",
  },
  {
    value: "Mira Estrela SP",
    label: "Mira Estrela (SP)",
  },
  {
    value: "Mirabela MG",
    label: "Mirabela (MG)",
  },
  {
    value: "Miracatu SP",
    label: "Miracatu (SP)",
  },
  {
    value: "Miracema RJ",
    label: "Miracema (RJ)",
  },
  {
    value: "Miracema do Tocantins TO",
    label: "Miracema do Tocantins (TO)",
  },
  {
    value: "Mirador MA",
    label: "Mirador (MA)",
  },
  {
    value: "Mirador PR",
    label: "Mirador (PR)",
  },
  {
    value: "Miradouro MG",
    label: "Miradouro (MG)",
  },
  {
    value: "Miraguaí RS",
    label: "Miraguaí (RS)",
  },
  {
    value: "Miranda MS",
    label: "Miranda (MS)",
  },
  {
    value: "Miranda do Norte MA",
    label: "Miranda do Norte (MA)",
  },
  {
    value: "Mirandiba PE",
    label: "Mirandiba (PE)",
  },
  {
    value: "Mirandópolis SP",
    label: "Mirandópolis (SP)",
  },
  {
    value: "Mirangaba BA",
    label: "Mirangaba (BA)",
  },
  {
    value: "Miranorte TO",
    label: "Miranorte (TO)",
  },
  {
    value: "Mirante BA",
    label: "Mirante (BA)",
  },
  {
    value: "Mirante da Serra RO",
    label: "Mirante da Serra (RO)",
  },
  {
    value: "Mirante do Paranapanem SP",
    label: "Mirante do Paranapanema (SP)",
  },
  {
    value: "Miraselva PR",
    label: "Miraselva (PR)",
  },
  {
    value: "Mirassol SP",
    label: "Mirassol (SP)",
  },
  {
    value: "Mirassol D´oeste MT",
    label: "Mirassol D´oeste (MT)",
  },
  {
    value: "Mirassolândia SP",
    label: "Mirassolândia (SP)",
  },
  {
    value: "Miravânia MG",
    label: "Miravânia (MG)",
  },
  {
    value: "Miraí MG",
    label: "Miraí (MG)",
  },
  {
    value: "Miraíma CE",
    label: "Miraíma (CE)",
  },
  {
    value: "Mirim Doce SC",
    label: "Mirim Doce (SC)",
  },
  {
    value: "Mirinzal MA",
    label: "Mirinzal (MA)",
  },
  {
    value: "Missal PR",
    label: "Missal (PR)",
  },
  {
    value: "Missăo Velha CE",
    label: "Missăo Velha (CE)",
  },
  {
    value: "Mocajuba PA",
    label: "Mocajuba (PA)",
  },
  {
    value: "Mococa SP",
    label: "Mococa (SP)",
  },
  {
    value: "Modelo SC",
    label: "Modelo (SC)",
  },
  {
    value: "Moeda MG",
    label: "Moeda (MG)",
  },
  {
    value: "Moema MG",
    label: "Moema (MG)",
  },
  {
    value: "Mogeiro PB",
    label: "Mogeiro (PB)",
  },
  {
    value: "Mogi Guaçu SP",
    label: "Mogi Guaçu (SP)",
  },
  {
    value: "Moiporá GO",
    label: "Moiporá (GO)",
  },
  {
    value: "Moita Bonita SE",
    label: "Moita Bonita (SE)",
  },
  {
    value: "Moji Das Cruzes SP",
    label: "Moji Das Cruzes (SP)",
  },
  {
    value: "Moji-mirim SP",
    label: "Moji-mirim (SP)",
  },
  {
    value: "Moju PA",
    label: "Moju (PA)",
  },
  {
    value: "Mojuí dos Campos PA",
    label: "Mojuí dos Campos (PA)",
  },
  {
    value: "Mombaça CE",
    label: "Mombaça (CE)",
  },
  {
    value: "Mombuca SP",
    label: "Mombuca (SP)",
  },
  {
    value: "Mondaí SC",
    label: "Mondaí (SC)",
  },
  {
    value: "Mongaguá SP",
    label: "Mongaguá (SP)",
  },
  {
    value: "Monjolos MG",
    label: "Monjolos (MG)",
  },
  {
    value: "Monsenhor Gil PI",
    label: "Monsenhor Gil (PI)",
  },
  {
    value: "Monsenhor Hipólito PI",
    label: "Monsenhor Hipólito (PI)",
  },
  {
    value: "Monsenhor Paulo MG",
    label: "Monsenhor Paulo (MG)",
  },
  {
    value: "Monsenhor Tabosa CE",
    label: "Monsenhor Tabosa (CE)",
  },
  {
    value: "Montadas PB",
    label: "Montadas (PB)",
  },
  {
    value: "Montalvânia MG",
    label: "Montalvânia (MG)",
  },
  {
    value: "Montanha ES",
    label: "Montanha (ES)",
  },
  {
    value: "Montanhas RN",
    label: "Montanhas (RN)",
  },
  {
    value: "Montauri RS",
    label: "Montauri (RS)",
  },
  {
    value: "Monte Alegre PA",
    label: "Monte Alegre (PA)",
  },
  {
    value: "Monte Alegre RN",
    label: "Monte Alegre (RN)",
  },
  {
    value: "Monte Alegre Dos Campo RS",
    label: "Monte Alegre Dos Campos (RS)",
  },
  {
    value: "Monte Alegre de Goiás GO",
    label: "Monte Alegre de Goiás (GO)",
  },
  {
    value: "Monte Alegre de Minas MG",
    label: "Monte Alegre de Minas (MG)",
  },
  {
    value: "Monte Alegre de Sergip SE",
    label: "Monte Alegre de Sergipe (SE)",
  },
  {
    value: "Monte Alegre do Piauí PI",
    label: "Monte Alegre do Piauí (PI)",
  },
  {
    value: "Monte Alegre do Sul SP",
    label: "Monte Alegre do Sul (SP)",
  },
  {
    value: "Monte Alto SP",
    label: "Monte Alto (SP)",
  },
  {
    value: "Monte Aprazível SP",
    label: "Monte Aprazível (SP)",
  },
  {
    value: "Monte Azul MG",
    label: "Monte Azul (MG)",
  },
  {
    value: "Monte Azul Paulista SP",
    label: "Monte Azul Paulista (SP)",
  },
  {
    value: "Monte Belo MG",
    label: "Monte Belo (MG)",
  },
  {
    value: "Monte Belo do Sul RS",
    label: "Monte Belo do Sul (RS)",
  },
  {
    value: "Monte Carlo SC",
    label: "Monte Carlo (SC)",
  },
  {
    value: "Monte Carmelo MG",
    label: "Monte Carmelo (MG)",
  },
  {
    value: "Monte Castelo SC",
    label: "Monte Castelo (SC)",
  },
  {
    value: "Monte Castelo SP",
    label: "Monte Castelo (SP)",
  },
  {
    value: "Monte Das Gameleiras RN",
    label: "Monte Das Gameleiras (RN)",
  },
  {
    value: "Monte Formoso MG",
    label: "Monte Formoso (MG)",
  },
  {
    value: "Monte Horebe PB",
    label: "Monte Horebe (PB)",
  },
  {
    value: "Monte Mor SP",
    label: "Monte Mor (SP)",
  },
  {
    value: "Monte Negro RO",
    label: "Monte Negro (RO)",
  },
  {
    value: "Monte Santo BA",
    label: "Monte Santo (BA)",
  },
  {
    value: "Monte Santo de Minas MG",
    label: "Monte Santo de Minas (MG)",
  },
  {
    value: "Monte Santo do Tocanti TO",
    label: "Monte Santo do Tocantins (TO)",
  },
  {
    value: "Monte Siăo MG",
    label: "Monte Siăo (MG)",
  },
  {
    value: "Monte do Carmo TO",
    label: "Monte do Carmo (TO)",
  },
  {
    value: "Monteiro PB",
    label: "Monteiro (PB)",
  },
  {
    value: "Monteiro Lobato SP",
    label: "Monteiro Lobato (SP)",
  },
  {
    value: "Monteirópolis AL",
    label: "Monteirópolis (AL)",
  },
  {
    value: "Montenegro RS",
    label: "Montenegro (RS)",
  },
  {
    value: "Montes Altos MA",
    label: "Montes Altos (MA)",
  },
  {
    value: "Montes Claros MG",
    label: "Montes Claros (MG)",
  },
  {
    value: "Montes Claros de Goiás GO",
    label: "Montes Claros de Goiás (GO)",
  },
  {
    value: "Montezuma MG",
    label: "Montezuma (MG)",
  },
  {
    value: "Montividiu GO",
    label: "Montividiu (GO)",
  },
  {
    value: "Montividiu do Norte GO",
    label: "Montividiu do Norte (GO)",
  },
  {
    value: "Monçăo MA",
    label: "Monçăo (MA)",
  },
  {
    value: "Monçơes SP",
    label: "Monçơes (SP)",
  },
  {
    value: "Morada Nova CE",
    label: "Morada Nova (CE)",
  },
  {
    value: "Morada Nova de Minas MG",
    label: "Morada Nova de Minas (MG)",
  },
  {
    value: "Moraújo CE",
    label: "Moraújo (CE)",
  },
  {
    value: "Moreilândia PE",
    label: "Moreilândia (PE)",
  },
  {
    value: "Moreira Sales PR",
    label: "Moreira Sales (PR)",
  },
  {
    value: "Moreno PE",
    label: "Moreno (PE)",
  },
  {
    value: "Mormaço RS",
    label: "Mormaço (RS)",
  },
  {
    value: "Morpará BA",
    label: "Morpará (BA)",
  },
  {
    value: "Morretes PR",
    label: "Morretes (PR)",
  },
  {
    value: "Morrinhos CE",
    label: "Morrinhos (CE)",
  },
  {
    value: "Morrinhos GO",
    label: "Morrinhos (GO)",
  },
  {
    value: "Morrinhos do Sul RS",
    label: "Morrinhos do Sul (RS)",
  },
  {
    value: "Morro Agudo SP",
    label: "Morro Agudo (SP)",
  },
  {
    value: "Morro Agudo de Goiás GO",
    label: "Morro Agudo de Goiás (GO)",
  },
  {
    value: "Morro Cabeça no Tempo PI",
    label: "Morro Cabeça no Tempo (PI)",
  },
  {
    value: "Morro Grande SC",
    label: "Morro Grande (SC)",
  },
  {
    value: "Morro Redondo RS",
    label: "Morro Redondo (RS)",
  },
  {
    value: "Morro Reuter RS",
    label: "Morro Reuter (RS)",
  },
  {
    value: "Morro da Fumaça SC",
    label: "Morro da Fumaça (SC)",
  },
  {
    value: "Morro da Garça MG",
    label: "Morro da Garça (MG)",
  },
  {
    value: "Morro do Chapéu BA",
    label: "Morro do Chapéu (BA)",
  },
  {
    value: "Morro do Chapéu do Pia PI",
    label: "Morro do Chapéu do Piauí (PI)",
  },
  {
    value: "Morro do Pilar MG",
    label: "Morro do Pilar (MG)",
  },
  {
    value: "Morros MA",
    label: "Morros (MA)",
  },
  {
    value: "Mortugaba BA",
    label: "Mortugaba (BA)",
  },
  {
    value: "Morungaba SP",
    label: "Morungaba (SP)",
  },
  {
    value: "Mossoró RN",
    label: "Mossoró (RN)",
  },
  {
    value: "Mossâmedes GO",
    label: "Mossâmedes (GO)",
  },
  {
    value: "Mostardas RS",
    label: "Mostardas (RS)",
  },
  {
    value: "Motuca SP",
    label: "Motuca (SP)",
  },
  {
    value: "Mozarlândia GO",
    label: "Mozarlândia (GO)",
  },
  {
    value: "Muaná PA",
    label: "Muaná (PA)",
  },
  {
    value: "Mucajaí RR",
    label: "Mucajaí (RR)",
  },
  {
    value: "Mucambo CE",
    label: "Mucambo (CE)",
  },
  {
    value: "Mucugê BA",
    label: "Mucugê (BA)",
  },
  {
    value: "Mucuri BA",
    label: "Mucuri (BA)",
  },
  {
    value: "Mucurici ES",
    label: "Mucurici (ES)",
  },
  {
    value: "Muitos Capơes RS",
    label: "Muitos Capơes (RS)",
  },
  {
    value: "Muliterno RS",
    label: "Muliterno (RS)",
  },
  {
    value: "Mulungu CE",
    label: "Mulungu (CE)",
  },
  {
    value: "Mulungu PB",
    label: "Mulungu (PB)",
  },
  {
    value: "Mulungu do Morro BA",
    label: "Mulungu do Morro (BA)",
  },
  {
    value: "Mundo Novo BA",
    label: "Mundo Novo (BA)",
  },
  {
    value: "Mundo Novo GO",
    label: "Mundo Novo (GO)",
  },
  {
    value: "Mundo Novo MS",
    label: "Mundo Novo (MS)",
  },
  {
    value: "Munhoz MG",
    label: "Munhoz (MG)",
  },
  {
    value: "Munhoz de Melo PR",
    label: "Munhoz de Melo (PR)",
  },
  {
    value: "Muniz Ferreira BA",
    label: "Muniz Ferreira (BA)",
  },
  {
    value: "Muniz Freire ES",
    label: "Muniz Freire (ES)",
  },
  {
    value: "Muqui ES",
    label: "Muqui (ES)",
  },
  {
    value: "Muquém de Săo Francisc BA",
    label: "Muquém de Săo Francisco (BA)",
  },
  {
    value: "Muriaé MG",
    label: "Muriaé (MG)",
  },
  {
    value: "Muribeca SE",
    label: "Muribeca (SE)",
  },
  {
    value: "Murici AL",
    label: "Murici (AL)",
  },
  {
    value: "Murici Dos Portelas PI",
    label: "Murici Dos Portelas (PI)",
  },
  {
    value: "Muricilândia TO",
    label: "Muricilândia (TO)",
  },
  {
    value: "Muritiba BA",
    label: "Muritiba (BA)",
  },
  {
    value: "Murutinga do Sul SP",
    label: "Murutinga do Sul (SP)",
  },
  {
    value: "Mutum MG",
    label: "Mutum (MG)",
  },
  {
    value: "Mutunópolis GO",
    label: "Mutunópolis (GO)",
  },
  {
    value: "Mutuípe BA",
    label: "Mutuípe (BA)",
  },
  {
    value: "Muzambinho MG",
    label: "Muzambinho (MG)",
  },
  {
    value: "Muçum RS",
    label: "Muçum (RS)",
  },
  {
    value: "Mário Campos MG",
    label: "Mário Campos (MG)",
  },
  {
    value: "Mâncio Lima AC",
    label: "Mâncio Lima (AC)",
  },
  {
    value: "Măe D´água PB",
    label: "Măe D´água (PB)",
  },
  {
    value: "Măe do Rio PA",
    label: "Măe do Rio (PA)",
  },
  {
    value: "Nacip Raydan MG",
    label: "Nacip Raydan (MG)",
  },
  {
    value: "Nantes SP",
    label: "Nantes (SP)",
  },
  {
    value: "Nanuque MG",
    label: "Nanuque (MG)",
  },
  {
    value: "Naque MG",
    label: "Naque (MG)",
  },
  {
    value: "Narandiba SP",
    label: "Narandiba (SP)",
  },
  {
    value: "Natal RN",
    label: "Natal (RN)",
  },
  {
    value: "Natalândia MG",
    label: "Natalândia (MG)",
  },
  {
    value: "Natividade RJ",
    label: "Natividade (RJ)",
  },
  {
    value: "Natividade TO",
    label: "Natividade (TO)",
  },
  {
    value: "Natividade da Serra SP",
    label: "Natividade da Serra (SP)",
  },
  {
    value: "Natuba PB",
    label: "Natuba (PB)",
  },
  {
    value: "Natércia MG",
    label: "Natércia (MG)",
  },
  {
    value: "Navegantes SC",
    label: "Navegantes (SC)",
  },
  {
    value: "Naviraí MS",
    label: "Naviraí (MS)",
  },
  {
    value: "Nazareno MG",
    label: "Nazareno (MG)",
  },
  {
    value: "Nazarezinho PB",
    label: "Nazarezinho (PB)",
  },
  {
    value: "Nazaré BA",
    label: "Nazaré (BA)",
  },
  {
    value: "Nazaré TO",
    label: "Nazaré (TO)",
  },
  {
    value: "Nazaré Paulista SP",
    label: "Nazaré Paulista (SP)",
  },
  {
    value: "Nazaré da Mata PE",
    label: "Nazaré da Mata (PE)",
  },
  {
    value: "Nazaré do Piauí PI",
    label: "Nazaré do Piauí (PI)",
  },
  {
    value: "Nazária PI",
    label: "Nazária (PI)",
  },
  {
    value: "Nazário GO",
    label: "Nazário (GO)",
  },
  {
    value: "Nepomuceno MG",
    label: "Nepomuceno (MG)",
  },
  {
    value: "Nerópolis GO",
    label: "Nerópolis (GO)",
  },
  {
    value: "Neves Paulista SP",
    label: "Neves Paulista (SP)",
  },
  {
    value: "Neópolis SE",
    label: "Neópolis (SE)",
  },
  {
    value: "Nhamundá AM",
    label: "Nhamundá (AM)",
  },
  {
    value: "Nhandeara SP",
    label: "Nhandeara (SP)",
  },
  {
    value: "Nicolau Vergueiro RS",
    label: "Nicolau Vergueiro (RS)",
  },
  {
    value: "Nilo Peçanha BA",
    label: "Nilo Peçanha (BA)",
  },
  {
    value: "Nilópolis RJ",
    label: "Nilópolis (RJ)",
  },
  {
    value: "Nina Rodrigues MA",
    label: "Nina Rodrigues (MA)",
  },
  {
    value: "Ninheira MG",
    label: "Ninheira (MG)",
  },
  {
    value: "Nioaque MS",
    label: "Nioaque (MS)",
  },
  {
    value: "Nipoă SP",
    label: "Nipoă (SP)",
  },
  {
    value: "Niquelândia GO",
    label: "Niquelândia (GO)",
  },
  {
    value: "Niterói RJ",
    label: "Niterói (RJ)",
  },
  {
    value: "Nobres MT",
    label: "Nobres (MT)",
  },
  {
    value: "Nonoai RS",
    label: "Nonoai (RS)",
  },
  {
    value: "Nordestina BA",
    label: "Nordestina (BA)",
  },
  {
    value: "Normandia RR",
    label: "Normandia (RR)",
  },
  {
    value: "Nortelândia MT",
    label: "Nortelândia (MT)",
  },
  {
    value: "Nossa Senhora Aparecid SE",
    label: "Nossa Senhora Aparecida (SE)",
  },
  {
    value: "Nossa Senhora Das Dore SE",
    label: "Nossa Senhora Das Dores (SE)",
  },
  {
    value: "Nossa Senhora Das Graç PR",
    label: "Nossa Senhora Das Graças (PR)",
  },
  {
    value: "Nossa Senhora Dos Remé PI",
    label: "Nossa Senhora Dos Remédios (PI)",
  },
  {
    value: "Nossa Senhora da Glóri SE",
    label: "Nossa Senhora da Glória (SE)",
  },
  {
    value: "Nossa Senhora de Lourd SE",
    label: "Nossa Senhora de Lourdes (SE)",
  },
  {
    value: "Nossa Senhora de Nazar PI",
    label: "Nossa Senhora de Nazaré (PI)",
  },
  {
    value: "Nossa Senhora do Livra MT",
    label: "Nossa Senhora do Livramento (MT)",
  },
  {
    value: "Nossa Senhora do Socor SE",
    label: "Nossa Senhora do Socorro (SE)",
  },
  {
    value: "Nova Aliança SP",
    label: "Nova Aliança (SP)",
  },
  {
    value: "Nova Aliança do Ivaí PR",
    label: "Nova Aliança do Ivaí (PR)",
  },
  {
    value: "Nova Alvorada RS",
    label: "Nova Alvorada (RS)",
  },
  {
    value: "Nova Alvorada do Sul MS",
    label: "Nova Alvorada do Sul (MS)",
  },
  {
    value: "Nova América GO",
    label: "Nova América (GO)",
  },
  {
    value: "Nova América da Colina PR",
    label: "Nova América da Colina (PR)",
  },
  {
    value: "Nova Andradina MS",
    label: "Nova Andradina (MS)",
  },
  {
    value: "Nova Araçá RS",
    label: "Nova Araçá (RS)",
  },
  {
    value: "Nova Aurora GO",
    label: "Nova Aurora (GO)",
  },
  {
    value: "Nova Aurora PR",
    label: "Nova Aurora (PR)",
  },
  {
    value: "Nova Bandeirantes MT",
    label: "Nova Bandeirantes (MT)",
  },
  {
    value: "Nova Bassano RS",
    label: "Nova Bassano (RS)",
  },
  {
    value: "Nova Belém MG",
    label: "Nova Belém (MG)",
  },
  {
    value: "Nova Boa Vista RS",
    label: "Nova Boa Vista (RS)",
  },
  {
    value: "Nova Brasilândia MT",
    label: "Nova Brasilândia (MT)",
  },
  {
    value: "Nova Brasilândia D´oes RO",
    label: "Nova Brasilândia D´oeste (RO)",
  },
  {
    value: "Nova Bréscia RS",
    label: "Nova Bréscia (RS)",
  },
  {
    value: "Nova Campina SP",
    label: "Nova Campina (SP)",
  },
  {
    value: "Nova Canaă BA",
    label: "Nova Canaă (BA)",
  },
  {
    value: "Nova Canaă Paulista SP",
    label: "Nova Canaă Paulista (SP)",
  },
  {
    value: "Nova Canaă do Norte MT",
    label: "Nova Canaă do Norte (MT)",
  },
  {
    value: "Nova Candelária RS",
    label: "Nova Candelária (RS)",
  },
  {
    value: "Nova Cantu PR",
    label: "Nova Cantu (PR)",
  },
  {
    value: "Nova Castilho SP",
    label: "Nova Castilho (SP)",
  },
  {
    value: "Nova Colinas MA",
    label: "Nova Colinas (MA)",
  },
  {
    value: "Nova Crixás GO",
    label: "Nova Crixás (GO)",
  },
  {
    value: "Nova Cruz RN",
    label: "Nova Cruz (RN)",
  },
  {
    value: "Nova Era MG",
    label: "Nova Era (MG)",
  },
  {
    value: "Nova Erechim SC",
    label: "Nova Erechim (SC)",
  },
  {
    value: "Nova Esperança PR",
    label: "Nova Esperança (PR)",
  },
  {
    value: "Nova Esperança do Piri PA",
    label: "Nova Esperança do Piriá (PA)",
  },
  {
    value: "Nova Esperança do Sudo PR",
    label: "Nova Esperança do Sudoeste (PR)",
  },
  {
    value: "Nova Esperança do Sul RS",
    label: "Nova Esperança do Sul (RS)",
  },
  {
    value: "Nova Europa SP",
    label: "Nova Europa (SP)",
  },
  {
    value: "Nova Floresta PB",
    label: "Nova Floresta (PB)",
  },
  {
    value: "Nova Friburgo RJ",
    label: "Nova Friburgo (RJ)",
  },
  {
    value: "Nova Fátima BA",
    label: "Nova Fátima (BA)",
  },
  {
    value: "Nova Fátima PR",
    label: "Nova Fátima (PR)",
  },
  {
    value: "Nova Glória GO",
    label: "Nova Glória (GO)",
  },
  {
    value: "Nova Granada SP",
    label: "Nova Granada (SP)",
  },
  {
    value: "Nova Guarita MT",
    label: "Nova Guarita (MT)",
  },
  {
    value: "Nova Guataporanga SP",
    label: "Nova Guataporanga (SP)",
  },
  {
    value: "Nova Hartz RS",
    label: "Nova Hartz (RS)",
  },
  {
    value: "Nova Ibiá BA",
    label: "Nova Ibiá (BA)",
  },
  {
    value: "Nova Iguaçu RJ",
    label: "Nova Iguaçu (RJ)",
  },
  {
    value: "Nova Iguaçu de Goiás GO",
    label: "Nova Iguaçu de Goiás (GO)",
  },
  {
    value: "Nova Independência SP",
    label: "Nova Independência (SP)",
  },
  {
    value: "Nova Iorque MA",
    label: "Nova Iorque (MA)",
  },
  {
    value: "Nova Ipixuna PA",
    label: "Nova Ipixuna (PA)",
  },
  {
    value: "Nova Itaberaba SC",
    label: "Nova Itaberaba (SC)",
  },
  {
    value: "Nova Itarana BA",
    label: "Nova Itarana (BA)",
  },
  {
    value: "Nova Lacerda MT",
    label: "Nova Lacerda (MT)",
  },
  {
    value: "Nova Laranjeiras PR",
    label: "Nova Laranjeiras (PR)",
  },
  {
    value: "Nova Lima MG",
    label: "Nova Lima (MG)",
  },
  {
    value: "Nova Londrina PR",
    label: "Nova Londrina (PR)",
  },
  {
    value: "Nova Luzitânia SP",
    label: "Nova Luzitânia (SP)",
  },
  {
    value: "Nova Mamoré RO",
    label: "Nova Mamoré (RO)",
  },
  {
    value: "Nova Marilândia MT",
    label: "Nova Marilândia (MT)",
  },
  {
    value: "Nova Maringá MT",
    label: "Nova Maringá (MT)",
  },
  {
    value: "Nova Monte Verde MT",
    label: "Nova Monte Verde (MT)",
  },
  {
    value: "Nova Mutum MT",
    label: "Nova Mutum (MT)",
  },
  {
    value: "Nova Módica MG",
    label: "Nova Módica (MG)",
  },
  {
    value: "Nova Nazaré MT",
    label: "Nova Nazaré (MT)",
  },
  {
    value: "Nova Odessa SP",
    label: "Nova Odessa (SP)",
  },
  {
    value: "Nova Olinda CE",
    label: "Nova Olinda (CE)",
  },
  {
    value: "Nova Olinda PB",
    label: "Nova Olinda (PB)",
  },
  {
    value: "Nova Olinda TO",
    label: "Nova Olinda (TO)",
  },
  {
    value: "Nova Olinda do Maranhă MA",
    label: "Nova Olinda do Maranhăo (MA)",
  },
  {
    value: "Nova Olinda do Norte AM",
    label: "Nova Olinda do Norte (AM)",
  },
  {
    value: "Nova Olímpia MT",
    label: "Nova Olímpia (MT)",
  },
  {
    value: "Nova Olímpia PR",
    label: "Nova Olímpia (PR)",
  },
  {
    value: "Nova Palma RS",
    label: "Nova Palma (RS)",
  },
  {
    value: "Nova Palmeira PB",
    label: "Nova Palmeira (PB)",
  },
  {
    value: "Nova Petrópolis RS",
    label: "Nova Petrópolis (RS)",
  },
  {
    value: "Nova Ponte MG",
    label: "Nova Ponte (MG)",
  },
  {
    value: "Nova Porteirinha MG",
    label: "Nova Porteirinha (MG)",
  },
  {
    value: "Nova Prata RS",
    label: "Nova Prata (RS)",
  },
  {
    value: "Nova Prata do Iguaçu PR",
    label: "Nova Prata do Iguaçu (PR)",
  },
  {
    value: "Nova Pádua RS",
    label: "Nova Pádua (RS)",
  },
  {
    value: "Nova Ramada RS",
    label: "Nova Ramada (RS)",
  },
  {
    value: "Nova Redençăo BA",
    label: "Nova Redençăo (BA)",
  },
  {
    value: "Nova Resende MG",
    label: "Nova Resende (MG)",
  },
  {
    value: "Nova Roma GO",
    label: "Nova Roma (GO)",
  },
  {
    value: "Nova Roma do Sul RS",
    label: "Nova Roma do Sul (RS)",
  },
  {
    value: "Nova Rosalândia TO",
    label: "Nova Rosalândia (TO)",
  },
  {
    value: "Nova Russas CE",
    label: "Nova Russas (CE)",
  },
  {
    value: "Nova Santa Bárbara PR",
    label: "Nova Santa Bárbara (PR)",
  },
  {
    value: "Nova Santa Helena MT",
    label: "Nova Santa Helena (MT)",
  },
  {
    value: "Nova Santa Rita PI",
    label: "Nova Santa Rita (PI)",
  },
  {
    value: "Nova Santa Rita RS",
    label: "Nova Santa Rita (RS)",
  },
  {
    value: "Nova Santa Rosa PR",
    label: "Nova Santa Rosa (PR)",
  },
  {
    value: "Nova Serrana MG",
    label: "Nova Serrana (MG)",
  },
  {
    value: "Nova Soure BA",
    label: "Nova Soure (BA)",
  },
  {
    value: "Nova Tebas PR",
    label: "Nova Tebas (PR)",
  },
  {
    value: "Nova Timboteua PA",
    label: "Nova Timboteua (PA)",
  },
  {
    value: "Nova Trento SC",
    label: "Nova Trento (SC)",
  },
  {
    value: "Nova Ubirată MT",
    label: "Nova Ubirată (MT)",
  },
  {
    value: "Nova Uniăo MG",
    label: "Nova Uniăo (MG)",
  },
  {
    value: "Nova Uniăo RO",
    label: "Nova Uniăo (RO)",
  },
  {
    value: "Nova Veneza GO",
    label: "Nova Veneza (GO)",
  },
  {
    value: "Nova Veneza SC",
    label: "Nova Veneza (SC)",
  },
  {
    value: "Nova Venécia ES",
    label: "Nova Venécia (ES)",
  },
  {
    value: "Nova Viçosa BA",
    label: "Nova Viçosa (BA)",
  },
  {
    value: "Nova Xavantina MT",
    label: "Nova Xavantina (MT)",
  },
  {
    value: "Novais SP",
    label: "Novais (SP)",
  },
  {
    value: "Novo Acordo TO",
    label: "Novo Acordo (TO)",
  },
  {
    value: "Novo Airăo AM",
    label: "Novo Airăo (AM)",
  },
  {
    value: "Novo Alegre TO",
    label: "Novo Alegre (TO)",
  },
  {
    value: "Novo Aripuană AM",
    label: "Novo Aripuană (AM)",
  },
  {
    value: "Novo Barreiro RS",
    label: "Novo Barreiro (RS)",
  },
  {
    value: "Novo Brasil GO",
    label: "Novo Brasil (GO)",
  },
  {
    value: "Novo Cabrais RS",
    label: "Novo Cabrais (RS)",
  },
  {
    value: "Novo Cruzeiro MG",
    label: "Novo Cruzeiro (MG)",
  },
  {
    value: "Novo Gama GO",
    label: "Novo Gama (GO)",
  },
  {
    value: "Novo Hamburgo RS",
    label: "Novo Hamburgo (RS)",
  },
  {
    value: "Novo Horizonte BA",
    label: "Novo Horizonte (BA)",
  },
  {
    value: "Novo Horizonte SC",
    label: "Novo Horizonte (SC)",
  },
  {
    value: "Novo Horizonte SP",
    label: "Novo Horizonte (SP)",
  },
  {
    value: "Novo Horizonte do Nort MT",
    label: "Novo Horizonte do Norte (MT)",
  },
  {
    value: "Novo Horizonte do Oest RO",
    label: "Novo Horizonte do Oeste (RO)",
  },
  {
    value: "Novo Horizonte do Sul MS",
    label: "Novo Horizonte do Sul (MS)",
  },
  {
    value: "Novo Itacolomi PR",
    label: "Novo Itacolomi (PR)",
  },
  {
    value: "Novo Jardim TO",
    label: "Novo Jardim (TO)",
  },
  {
    value: "Novo Lino AL",
    label: "Novo Lino (AL)",
  },
  {
    value: "Novo Machado RS",
    label: "Novo Machado (RS)",
  },
  {
    value: "Novo Mundo MT",
    label: "Novo Mundo (MT)",
  },
  {
    value: "Novo Oriente CE",
    label: "Novo Oriente (CE)",
  },
  {
    value: "Novo Oriente de Minas MG",
    label: "Novo Oriente de Minas (MG)",
  },
  {
    value: "Novo Oriente do Piauí PI",
    label: "Novo Oriente do Piauí (PI)",
  },
  {
    value: "Novo Planalto GO",
    label: "Novo Planalto (GO)",
  },
  {
    value: "Novo Progresso PA",
    label: "Novo Progresso (PA)",
  },
  {
    value: "Novo Repartimento PA",
    label: "Novo Repartimento (PA)",
  },
  {
    value: "Novo Santo Antônio MT",
    label: "Novo Santo Antônio (MT)",
  },
  {
    value: "Novo Santo Antônio PI",
    label: "Novo Santo Antônio (PI)",
  },
  {
    value: "Novo Săo Joaquim MT",
    label: "Novo Săo Joaquim (MT)",
  },
  {
    value: "Novo Tiradentes RS",
    label: "Novo Tiradentes (RS)",
  },
  {
    value: "Novo Triunfo BA",
    label: "Novo Triunfo (BA)",
  },
  {
    value: "Novo Xingu RS",
    label: "Novo Xingu (RS)",
  },
  {
    value: "Novorizonte MG",
    label: "Novorizonte (MG)",
  },
  {
    value: "Nuporanga SP",
    label: "Nuporanga (SP)",
  },
  {
    value: "Nísia Floresta RN",
    label: "Nísia Floresta (RN)",
  },
  {
    value: "Năo-me-toque RS",
    label: "Năo-me-toque (RS)",
  },
  {
    value: "Ocara CE",
    label: "Ocara (CE)",
  },
  {
    value: "Ocauçu SP",
    label: "Ocauçu (SP)",
  },
  {
    value: "Oeiras PI",
    label: "Oeiras (PI)",
  },
  {
    value: "Oeiras do Pará PA",
    label: "Oeiras do Pará (PA)",
  },
  {
    value: "Oiapoque AP",
    label: "Oiapoque (AP)",
  },
  {
    value: "Olaria MG",
    label: "Olaria (MG)",
  },
  {
    value: "Olho D´água PB",
    label: "Olho D´água (PB)",
  },
  {
    value: "Olho D´água Das Cunhăs MA",
    label: "Olho D´água Das Cunhăs (MA)",
  },
  {
    value: "Olho D´água Das Flores AL",
    label: "Olho D´água Das Flores (AL)",
  },
  {
    value: "Olho D´água Grande AL",
    label: "Olho D´água Grande (AL)",
  },
  {
    value: "Olho D´água do Casado AL",
    label: "Olho D´água do Casado (AL)",
  },
  {
    value: "Olho D´água do Piauí PI",
    label: "Olho D´água do Piauí (PI)",
  },
  {
    value: "Olho-d´água do Borges RN",
    label: "Olho-d´água do Borges (RN)",
  },
  {
    value: "Olhos-d´água MG",
    label: "Olhos-d´água (MG)",
  },
  {
    value: "Olinda PE",
    label: "Olinda (PE)",
  },
  {
    value: "Olinda Nova do Maranhă MA",
    label: "Olinda Nova do Maranhăo (MA)",
  },
  {
    value: "Olindina BA",
    label: "Olindina (BA)",
  },
  {
    value: "Olivedos PB",
    label: "Olivedos (PB)",
  },
  {
    value: "Oliveira MG",
    label: "Oliveira (MG)",
  },
  {
    value: "Oliveira Dos Brejinhos BA",
    label: "Oliveira Dos Brejinhos (BA)",
  },
  {
    value: "Oliveira Fortes MG",
    label: "Oliveira Fortes (MG)",
  },
  {
    value: "Oliveira de Fátima TO",
    label: "Oliveira de Fátima (TO)",
  },
  {
    value: "Olivença AL",
    label: "Olivença (AL)",
  },
  {
    value: "Olímpia SP",
    label: "Olímpia (SP)",
  },
  {
    value: "Olímpio Noronha MG",
    label: "Olímpio Noronha (MG)",
  },
  {
    value: "Onda Verde SP",
    label: "Onda Verde (SP)",
  },
  {
    value: "Onça de Pitangui MG",
    label: "Onça de Pitangui (MG)",
  },
  {
    value: "Oratórios MG",
    label: "Oratórios (MG)",
  },
  {
    value: "Oriente SP",
    label: "Oriente (SP)",
  },
  {
    value: "Orindiúva SP",
    label: "Orindiúva (SP)",
  },
  {
    value: "Oriximiná PA",
    label: "Oriximiná (PA)",
  },
  {
    value: "Orizona GO",
    label: "Orizona (GO)",
  },
  {
    value: "Orizânia MG",
    label: "Orizânia (MG)",
  },
  {
    value: "Orleans SC",
    label: "Orleans (SC)",
  },
  {
    value: "Orlândia SP",
    label: "Orlândia (SP)",
  },
  {
    value: "Orobó PE",
    label: "Orobó (PE)",
  },
  {
    value: "Orocó PE",
    label: "Orocó (PE)",
  },
  {
    value: "Ortigueira PR",
    label: "Ortigueira (PR)",
  },
  {
    value: "Orós CE",
    label: "Orós (CE)",
  },
  {
    value: "Osasco SP",
    label: "Osasco (SP)",
  },
  {
    value: "Oscar Bressane SP",
    label: "Oscar Bressane (SP)",
  },
  {
    value: "Osvaldo Cruz SP",
    label: "Osvaldo Cruz (SP)",
  },
  {
    value: "Osório RS",
    label: "Osório (RS)",
  },
  {
    value: "Otacílio Costa SC",
    label: "Otacílio Costa (SC)",
  },
  {
    value: "Ouricuri PE",
    label: "Ouricuri (PE)",
  },
  {
    value: "Ourilândia do Norte PA",
    label: "Ourilândia do Norte (PA)",
  },
  {
    value: "Ourinhos SP",
    label: "Ourinhos (SP)",
  },
  {
    value: "Ourizona PR",
    label: "Ourizona (PR)",
  },
  {
    value: "Ouriçangas BA",
    label: "Ouriçangas (BA)",
  },
  {
    value: "Ouro SC",
    label: "Ouro (SC)",
  },
  {
    value: "Ouro Branco AL",
    label: "Ouro Branco (AL)",
  },
  {
    value: "Ouro Branco MG",
    label: "Ouro Branco (MG)",
  },
  {
    value: "Ouro Branco RN",
    label: "Ouro Branco (RN)",
  },
  {
    value: "Ouro Fino MG",
    label: "Ouro Fino (MG)",
  },
  {
    value: "Ouro Preto MG",
    label: "Ouro Preto (MG)",
  },
  {
    value: "Ouro Preto do Oeste RO",
    label: "Ouro Preto do Oeste (RO)",
  },
  {
    value: "Ouro Velho PB",
    label: "Ouro Velho (PB)",
  },
  {
    value: "Ouro Verde SC",
    label: "Ouro Verde (SC)",
  },
  {
    value: "Ouro Verde SP",
    label: "Ouro Verde (SP)",
  },
  {
    value: "Ouro Verde de Goiás GO",
    label: "Ouro Verde de Goiás (GO)",
  },
  {
    value: "Ouro Verde de Minas MG",
    label: "Ouro Verde de Minas (MG)",
  },
  {
    value: "Ouro Verde do Oeste PR",
    label: "Ouro Verde do Oeste (PR)",
  },
  {
    value: "Ouroeste SP",
    label: "Ouroeste (SP)",
  },
  {
    value: "Ourolândia BA",
    label: "Ourolândia (BA)",
  },
  {
    value: "Ourém PA",
    label: "Ourém (PA)",
  },
  {
    value: "Ouvidor GO",
    label: "Ouvidor (GO)",
  },
  {
    value: "Pacaembu SP",
    label: "Pacaembu (SP)",
  },
  {
    value: "Pacajus CE",
    label: "Pacajus (CE)",
  },
  {
    value: "Pacajá PA",
    label: "Pacajá (PA)",
  },
  {
    value: "Pacaraima RR",
    label: "Pacaraima (RR)",
  },
  {
    value: "Pacatuba CE",
    label: "Pacatuba (CE)",
  },
  {
    value: "Pacatuba SE",
    label: "Pacatuba (SE)",
  },
  {
    value: "Pacoti CE",
    label: "Pacoti (CE)",
  },
  {
    value: "Pacujá CE",
    label: "Pacujá (CE)",
  },
  {
    value: "Padre Bernardo GO",
    label: "Padre Bernardo (GO)",
  },
  {
    value: "Padre Carvalho MG",
    label: "Padre Carvalho (MG)",
  },
  {
    value: "Padre Marcos PI",
    label: "Padre Marcos (PI)",
  },
  {
    value: "Padre Paraíso MG",
    label: "Padre Paraíso (MG)",
  },
  {
    value: "Paes Landim PI",
    label: "Paes Landim (PI)",
  },
  {
    value: "Pai Pedro MG",
    label: "Pai Pedro (MG)",
  },
  {
    value: "Paial SC",
    label: "Paial (SC)",
  },
  {
    value: "Paim Filho RS",
    label: "Paim Filho (RS)",
  },
  {
    value: "Paineiras MG",
    label: "Paineiras (MG)",
  },
  {
    value: "Painel SC",
    label: "Painel (SC)",
  },
  {
    value: "Pains MG",
    label: "Pains (MG)",
  },
  {
    value: "Paiva MG",
    label: "Paiva (MG)",
  },
  {
    value: "Paiçandu PR",
    label: "Paiçandu (PR)",
  },
  {
    value: "Pajeú do Piauí PI",
    label: "Pajeú do Piauí (PI)",
  },
  {
    value: "Palestina AL",
    label: "Palestina (AL)",
  },
  {
    value: "Palestina SP",
    label: "Palestina (SP)",
  },
  {
    value: "Palestina de Goiás GO",
    label: "Palestina de Goiás (GO)",
  },
  {
    value: "Palestina do Pará PA",
    label: "Palestina do Pará (PA)",
  },
  {
    value: "Palhano CE",
    label: "Palhano (CE)",
  },
  {
    value: "Palhoça SC",
    label: "Palhoça (SC)",
  },
  {
    value: "Palma MG",
    label: "Palma (MG)",
  },
  {
    value: "Palma Sola SC",
    label: "Palma Sola (SC)",
  },
  {
    value: "Palmares PE",
    label: "Palmares (PE)",
  },
  {
    value: "Palmares Paulista SP",
    label: "Palmares Paulista (SP)",
  },
  {
    value: "Palmares do Sul RS",
    label: "Palmares do Sul (RS)",
  },
  {
    value: "Palmas PR",
    label: "Palmas (PR)",
  },
  {
    value: "Palmas TO",
    label: "Palmas (TO)",
  },
  {
    value: "Palmas de Monte Alto BA",
    label: "Palmas de Monte Alto (BA)",
  },
  {
    value: "Palmeira PR",
    label: "Palmeira (PR)",
  },
  {
    value: "Palmeira SC",
    label: "Palmeira (SC)",
  },
  {
    value: "Palmeira Das Missơes RS",
    label: "Palmeira Das Missơes (RS)",
  },
  {
    value: "Palmeira Dos Índios AL",
    label: "Palmeira Dos Índios (AL)",
  },
  {
    value: "Palmeira D´oeste SP",
    label: "Palmeira D´oeste (SP)",
  },
  {
    value: "Palmeira do Piauí PI",
    label: "Palmeira do Piauí (PI)",
  },
  {
    value: "Palmeirais PI",
    label: "Palmeirais (PI)",
  },
  {
    value: "Palmeirante TO",
    label: "Palmeirante (TO)",
  },
  {
    value: "Palmeiras BA",
    label: "Palmeiras (BA)",
  },
  {
    value: "Palmeiras de Goiás GO",
    label: "Palmeiras de Goiás (GO)",
  },
  {
    value: "Palmeiras do Tocantins TO",
    label: "Palmeiras do Tocantins (TO)",
  },
  {
    value: "Palmeirina PE",
    label: "Palmeirina (PE)",
  },
  {
    value: "Palmeirândia MA",
    label: "Palmeirândia (MA)",
  },
  {
    value: "Palmeirópolis TO",
    label: "Palmeirópolis (TO)",
  },
  {
    value: "Palmelo GO",
    label: "Palmelo (GO)",
  },
  {
    value: "Palminópolis GO",
    label: "Palminópolis (GO)",
  },
  {
    value: "Palmital PR",
    label: "Palmital (PR)",
  },
  {
    value: "Palmital SP",
    label: "Palmital (SP)",
  },
  {
    value: "Palmitinho RS",
    label: "Palmitinho (RS)",
  },
  {
    value: "Palmitos SC",
    label: "Palmitos (SC)",
  },
  {
    value: "Palmácia CE",
    label: "Palmácia (CE)",
  },
  {
    value: "Palmópolis MG",
    label: "Palmópolis (MG)",
  },
  {
    value: "Palotina PR",
    label: "Palotina (PR)",
  },
  {
    value: "Panambi RS",
    label: "Panambi (RS)",
  },
  {
    value: "Panamá GO",
    label: "Panamá (GO)",
  },
  {
    value: "Pancas ES",
    label: "Pancas (ES)",
  },
  {
    value: "Panelas PE",
    label: "Panelas (PE)",
  },
  {
    value: "Panorama SP",
    label: "Panorama (SP)",
  },
  {
    value: "Pantano Grande RS",
    label: "Pantano Grande (RS)",
  },
  {
    value: "Papagaios MG",
    label: "Papagaios (MG)",
  },
  {
    value: "Papanduva SC",
    label: "Papanduva (SC)",
  },
  {
    value: "Paquetá PI",
    label: "Paquetá (PI)",
  },
  {
    value: "Paracambi RJ",
    label: "Paracambi (RJ)",
  },
  {
    value: "Paracatu MG",
    label: "Paracatu (MG)",
  },
  {
    value: "Paracuru CE",
    label: "Paracuru (CE)",
  },
  {
    value: "Paragominas PA",
    label: "Paragominas (PA)",
  },
  {
    value: "Paraguaçu MG",
    label: "Paraguaçu (MG)",
  },
  {
    value: "Paraguaçu Paulista SP",
    label: "Paraguaçu Paulista (SP)",
  },
  {
    value: "Paraibano MA",
    label: "Paraibano (MA)",
  },
  {
    value: "Paraibuna SP",
    label: "Paraibuna (SP)",
  },
  {
    value: "Paraipaba CE",
    label: "Paraipaba (CE)",
  },
  {
    value: "Paraisópolis MG",
    label: "Paraisópolis (MG)",
  },
  {
    value: "Parambu CE",
    label: "Parambu (CE)",
  },
  {
    value: "Paramirim BA",
    label: "Paramirim (BA)",
  },
  {
    value: "Paramoti CE",
    label: "Paramoti (CE)",
  },
  {
    value: "Paranacity PR",
    label: "Paranacity (PR)",
  },
  {
    value: "Paranaguá PR",
    label: "Paranaguá (PR)",
  },
  {
    value: "Paranaiguara GO",
    label: "Paranaiguara (GO)",
  },
  {
    value: "Paranapanema SP",
    label: "Paranapanema (SP)",
  },
  {
    value: "Paranapoema PR",
    label: "Paranapoema (PR)",
  },
  {
    value: "Paranapuă SP",
    label: "Paranapuă (SP)",
  },
  {
    value: "Paranatama PE",
    label: "Paranatama (PE)",
  },
  {
    value: "Paranatinga MT",
    label: "Paranatinga (MT)",
  },
  {
    value: "Paranavaí PR",
    label: "Paranavaí (PR)",
  },
  {
    value: "Paranaíba MS",
    label: "Paranaíba (MS)",
  },
  {
    value: "Paranaíta MT",
    label: "Paranaíta (MT)",
  },
  {
    value: "Paranhos MS",
    label: "Paranhos (MS)",
  },
  {
    value: "Paraná RN",
    label: "Paraná (RN)",
  },
  {
    value: "Parană TO",
    label: "Parană (TO)",
  },
  {
    value: "Paraopeba MG",
    label: "Paraopeba (MG)",
  },
  {
    value: "Parapuă SP",
    label: "Parapuă (SP)",
  },
  {
    value: "Parari PB",
    label: "Parari (PB)",
  },
  {
    value: "Parati RJ",
    label: "Parati (RJ)",
  },
  {
    value: "Paratinga BA",
    label: "Paratinga (BA)",
  },
  {
    value: "Parauapebas PA",
    label: "Parauapebas (PA)",
  },
  {
    value: "Parazinho RN",
    label: "Parazinho (RN)",
  },
  {
    value: "Paraí RS",
    label: "Paraí (RS)",
  },
  {
    value: "Paraíba do Sul RJ",
    label: "Paraíba do Sul (RJ)",
  },
  {
    value: "Paraíso SC",
    label: "Paraíso (SC)",
  },
  {
    value: "Paraíso SP",
    label: "Paraíso (SP)",
  },
  {
    value: "Paraíso das Águas MS",
    label: "Paraíso das Águas (MS)",
  },
  {
    value: "Paraíso do Norte PR",
    label: "Paraíso do Norte (PR)",
  },
  {
    value: "Paraíso do Sul RS",
    label: "Paraíso do Sul (RS)",
  },
  {
    value: "Paraíso do Tocantins TO",
    label: "Paraíso do Tocantins (TO)",
  },
  {
    value: "Paraú RN",
    label: "Paraú (RN)",
  },
  {
    value: "Paraúna GO",
    label: "Paraúna (GO)",
  },
  {
    value: "Pardinho SP",
    label: "Pardinho (SP)",
  },
  {
    value: "Pareci Novo RS",
    label: "Pareci Novo (RS)",
  },
  {
    value: "Parecis RO",
    label: "Parecis (RO)",
  },
  {
    value: "Parelhas RN",
    label: "Parelhas (RN)",
  },
  {
    value: "Pariconha AL",
    label: "Pariconha (AL)",
  },
  {
    value: "Parintins AM",
    label: "Parintins (AM)",
  },
  {
    value: "Paripiranga BA",
    label: "Paripiranga (BA)",
  },
  {
    value: "Paripueira AL",
    label: "Paripueira (AL)",
  },
  {
    value: "Pariquera-açu SP",
    label: "Pariquera-açu (SP)",
  },
  {
    value: "Parisi SP",
    label: "Parisi (SP)",
  },
  {
    value: "Parnaguá PI",
    label: "Parnaguá (PI)",
  },
  {
    value: "Parnamirim PE",
    label: "Parnamirim (PE)",
  },
  {
    value: "Parnamirim RN",
    label: "Parnamirim (RN)",
  },
  {
    value: "Parnarama MA",
    label: "Parnarama (MA)",
  },
  {
    value: "Parnaíba PI",
    label: "Parnaíba (PI)",
  },
  {
    value: "Parobé RS",
    label: "Parobé (RS)",
  },
  {
    value: "Pará de Minas MG",
    label: "Pará de Minas (MG)",
  },
  {
    value: "Passa Quatro MG",
    label: "Passa Quatro (MG)",
  },
  {
    value: "Passa Sete RS",
    label: "Passa Sete (RS)",
  },
  {
    value: "Passa Tempo MG",
    label: "Passa Tempo (MG)",
  },
  {
    value: "Passa e Fica RN",
    label: "Passa e Fica (RN)",
  },
  {
    value: "Passa-vinte MG",
    label: "Passa-vinte (MG)",
  },
  {
    value: "Passabém MG",
    label: "Passabém (MG)",
  },
  {
    value: "Passagem PB",
    label: "Passagem (PB)",
  },
  {
    value: "Passagem RN",
    label: "Passagem (RN)",
  },
  {
    value: "Passagem Franca MA",
    label: "Passagem Franca (MA)",
  },
  {
    value: "Passagem Franca do Pia PI",
    label: "Passagem Franca do Piauí (PI)",
  },
  {
    value: "Passira PE",
    label: "Passira (PE)",
  },
  {
    value: "Passo Fundo RS",
    label: "Passo Fundo (RS)",
  },
  {
    value: "Passo de Camaragibe AL",
    label: "Passo de Camaragibe (AL)",
  },
  {
    value: "Passo de Torres SC",
    label: "Passo de Torres (SC)",
  },
  {
    value: "Passo do Sobrado RS",
    label: "Passo do Sobrado (RS)",
  },
  {
    value: "Passos MG",
    label: "Passos (MG)",
  },
  {
    value: "Passos Maia SC",
    label: "Passos Maia (SC)",
  },
  {
    value: "Pastos Bons MA",
    label: "Pastos Bons (MA)",
  },
  {
    value: "Patis MG",
    label: "Patis (MG)",
  },
  {
    value: "Pato Bragado PR",
    label: "Pato Bragado (PR)",
  },
  {
    value: "Pato Branco PR",
    label: "Pato Branco (PR)",
  },
  {
    value: "Patos PB",
    label: "Patos (PB)",
  },
  {
    value: "Patos de Minas MG",
    label: "Patos de Minas (MG)",
  },
  {
    value: "Patos do Piauí PI",
    label: "Patos do Piauí (PI)",
  },
  {
    value: "Patrocínio MG",
    label: "Patrocínio (MG)",
  },
  {
    value: "Patrocínio Paulista SP",
    label: "Patrocínio Paulista (SP)",
  },
  {
    value: "Patrocínio do Muriaé MG",
    label: "Patrocínio do Muriaé (MG)",
  },
  {
    value: "Patu RN",
    label: "Patu (RN)",
  },
  {
    value: "Paty do Alferes RJ",
    label: "Paty do Alferes (RJ)",
  },
  {
    value: "Pau Brasil BA",
    label: "Pau Brasil (BA)",
  },
  {
    value: "Pau Dos Ferros RN",
    label: "Pau Dos Ferros (RN)",
  },
  {
    value: "Pau D´arco PA",
    label: "Pau D´arco (PA)",
  },
  {
    value: "Pau D´arco TO",
    label: "Pau D´arco (TO)",
  },
  {
    value: "Pau D´arco do Piauí PI",
    label: "Pau D´arco do Piauí (PI)",
  },
  {
    value: "Paudalho PE",
    label: "Paudalho (PE)",
  },
  {
    value: "Pauini AM",
    label: "Pauini (AM)",
  },
  {
    value: "Paula Cândido MG",
    label: "Paula Cândido (MG)",
  },
  {
    value: "Paula Freitas PR",
    label: "Paula Freitas (PR)",
  },
  {
    value: "Paulicéia SP",
    label: "Paulicéia (SP)",
  },
  {
    value: "Paulino Neves MA",
    label: "Paulino Neves (MA)",
  },
  {
    value: "Paulista PB",
    label: "Paulista (PB)",
  },
  {
    value: "Paulista PE",
    label: "Paulista (PE)",
  },
  {
    value: "Paulistana PI",
    label: "Paulistana (PI)",
  },
  {
    value: "Paulistas MG",
    label: "Paulistas (MG)",
  },
  {
    value: "Paulistânia SP",
    label: "Paulistânia (SP)",
  },
  {
    value: "Paulo Afonso BA",
    label: "Paulo Afonso (BA)",
  },
  {
    value: "Paulo Bento RS",
    label: "Paulo Bento (RS)",
  },
  {
    value: "Paulo Frontin PR",
    label: "Paulo Frontin (PR)",
  },
  {
    value: "Paulo Jacinto AL",
    label: "Paulo Jacinto (AL)",
  },
  {
    value: "Paulo Lopes SC",
    label: "Paulo Lopes (SC)",
  },
  {
    value: "Paulo Ramos MA",
    label: "Paulo Ramos (MA)",
  },
  {
    value: "Paulo de Faria SP",
    label: "Paulo de Faria (SP)",
  },
  {
    value: "Paulínia SP",
    label: "Paulínia (SP)",
  },
  {
    value: "Paverama RS",
    label: "Paverama (RS)",
  },
  {
    value: "Pavussu PI",
    label: "Pavussu (PI)",
  },
  {
    value: "Pavăo MG",
    label: "Pavăo (MG)",
  },
  {
    value: "Paço do Lumiar MA",
    label: "Paço do Lumiar (MA)",
  },
  {
    value: "Peabiru PR",
    label: "Peabiru (PR)",
  },
  {
    value: "Pederneiras SP",
    label: "Pederneiras (SP)",
  },
  {
    value: "Pedra PE",
    label: "Pedra (PE)",
  },
  {
    value: "Pedra Azul MG",
    label: "Pedra Azul (MG)",
  },
  {
    value: "Pedra Bela SP",
    label: "Pedra Bela (SP)",
  },
  {
    value: "Pedra Bonita MG",
    label: "Pedra Bonita (MG)",
  },
  {
    value: "Pedra Branca CE",
    label: "Pedra Branca (CE)",
  },
  {
    value: "Pedra Branca PB",
    label: "Pedra Branca (PB)",
  },
  {
    value: "Pedra Branca do Amapar AP",
    label: "Pedra Branca do Amapari (AP)",
  },
  {
    value: "Pedra Dourada MG",
    label: "Pedra Dourada (MG)",
  },
  {
    value: "Pedra Grande RN",
    label: "Pedra Grande (RN)",
  },
  {
    value: "Pedra Lavrada PB",
    label: "Pedra Lavrada (PB)",
  },
  {
    value: "Pedra Mole SE",
    label: "Pedra Mole (SE)",
  },
  {
    value: "Pedra Preta MT",
    label: "Pedra Preta (MT)",
  },
  {
    value: "Pedra Preta RN",
    label: "Pedra Preta (RN)",
  },
  {
    value: "Pedra do Anta MG",
    label: "Pedra do Anta (MG)",
  },
  {
    value: "Pedra do Indaiá MG",
    label: "Pedra do Indaiá (MG)",
  },
  {
    value: "Pedralva MG",
    label: "Pedralva (MG)",
  },
  {
    value: "Pedranópolis SP",
    label: "Pedranópolis (SP)",
  },
  {
    value: "Pedras Altas RS",
    label: "Pedras Altas (RS)",
  },
  {
    value: "Pedras Grandes SC",
    label: "Pedras Grandes (SC)",
  },
  {
    value: "Pedras de Fogo PB",
    label: "Pedras de Fogo (PB)",
  },
  {
    value: "Pedras de Maria da Cru MG",
    label: "Pedras de Maria da Cruz (MG)",
  },
  {
    value: "Pedregulho SP",
    label: "Pedregulho (SP)",
  },
  {
    value: "Pedreira SP",
    label: "Pedreira (SP)",
  },
  {
    value: "Pedreiras MA",
    label: "Pedreiras (MA)",
  },
  {
    value: "Pedrinhas SE",
    label: "Pedrinhas (SE)",
  },
  {
    value: "Pedrinhas Paulista SP",
    label: "Pedrinhas Paulista (SP)",
  },
  {
    value: "Pedrinópolis MG",
    label: "Pedrinópolis (MG)",
  },
  {
    value: "Pedro Afonso TO",
    label: "Pedro Afonso (TO)",
  },
  {
    value: "Pedro Alexandre BA",
    label: "Pedro Alexandre (BA)",
  },
  {
    value: "Pedro Avelino RN",
    label: "Pedro Avelino (RN)",
  },
  {
    value: "Pedro Canário ES",
    label: "Pedro Canário (ES)",
  },
  {
    value: "Pedro Gomes MS",
    label: "Pedro Gomes (MS)",
  },
  {
    value: "Pedro Laurentino PI",
    label: "Pedro Laurentino (PI)",
  },
  {
    value: "Pedro Leopoldo MG",
    label: "Pedro Leopoldo (MG)",
  },
  {
    value: "Pedro Osório RS",
    label: "Pedro Osório (RS)",
  },
  {
    value: "Pedro Régis PB",
    label: "Pedro Régis (PB)",
  },
  {
    value: "Pedro Teixeira MG",
    label: "Pedro Teixeira (MG)",
  },
  {
    value: "Pedro Velho RN",
    label: "Pedro Velho (RN)",
  },
  {
    value: "Pedro de Toledo SP",
    label: "Pedro de Toledo (SP)",
  },
  {
    value: "Pedro do Rosário MA",
    label: "Pedro do Rosário (MA)",
  },
  {
    value: "Pedro ii PI",
    label: "Pedro ii (PI)",
  },
  {
    value: "Pedrăo BA",
    label: "Pedrăo (BA)",
  },
  {
    value: "Peixe TO",
    label: "Peixe (TO)",
  },
  {
    value: "Peixe-boi PA",
    label: "Peixe-boi (PA)",
  },
  {
    value: "Peixoto de Azevedo MT",
    label: "Peixoto de Azevedo (MT)",
  },
  {
    value: "Pejuçara RS",
    label: "Pejuçara (RS)",
  },
  {
    value: "Pelotas RS",
    label: "Pelotas (RS)",
  },
  {
    value: "Penaforte CE",
    label: "Penaforte (CE)",
  },
  {
    value: "Penalva MA",
    label: "Penalva (MA)",
  },
  {
    value: "Pendências RN",
    label: "Pendências (RN)",
  },
  {
    value: "Penedo AL",
    label: "Penedo (AL)",
  },
  {
    value: "Penha SC",
    label: "Penha (SC)",
  },
  {
    value: "Pentecoste CE",
    label: "Pentecoste (CE)",
  },
  {
    value: "Penápolis SP",
    label: "Penápolis (SP)",
  },
  {
    value: "Pequeri MG",
    label: "Pequeri (MG)",
  },
  {
    value: "Pequi MG",
    label: "Pequi (MG)",
  },
  {
    value: "Pequizeiro TO",
    label: "Pequizeiro (TO)",
  },
  {
    value: "Perdigăo MG",
    label: "Perdigăo (MG)",
  },
  {
    value: "Perdizes MG",
    label: "Perdizes (MG)",
  },
  {
    value: "Perdơes MG",
    label: "Perdơes (MG)",
  },
  {
    value: "Pereira Barreto SP",
    label: "Pereira Barreto (SP)",
  },
  {
    value: "Pereiras SP",
    label: "Pereiras (SP)",
  },
  {
    value: "Pereiro CE",
    label: "Pereiro (CE)",
  },
  {
    value: "Peri Mirim MA",
    label: "Peri Mirim (MA)",
  },
  {
    value: "Periquito MG",
    label: "Periquito (MG)",
  },
  {
    value: "Peritiba SC",
    label: "Peritiba (SC)",
  },
  {
    value: "Peritoró MA",
    label: "Peritoró (MA)",
  },
  {
    value: "Perobal PR",
    label: "Perobal (PR)",
  },
  {
    value: "Perolândia GO",
    label: "Perolândia (GO)",
  },
  {
    value: "Peruíbe SP",
    label: "Peruíbe (SP)",
  },
  {
    value: "Pescador MG",
    label: "Pescador (MG)",
  },
  {
    value: "Pescaria Brava SC",
    label: "Pescaria Brava (SC)",
  },
  {
    value: "Pesqueira PE",
    label: "Pesqueira (PE)",
  },
  {
    value: "Petrolina PE",
    label: "Petrolina (PE)",
  },
  {
    value: "Petrolina de Goiás GO",
    label: "Petrolina de Goiás (GO)",
  },
  {
    value: "Petrolândia PE",
    label: "Petrolândia (PE)",
  },
  {
    value: "Petrolândia SC",
    label: "Petrolândia (SC)",
  },
  {
    value: "Petrópolis RJ",
    label: "Petrópolis (RJ)",
  },
  {
    value: "Peçanha MG",
    label: "Peçanha (MG)",
  },
  {
    value: "Piacatu SP",
    label: "Piacatu (SP)",
  },
  {
    value: "Piancó PB",
    label: "Piancó (PB)",
  },
  {
    value: "Piată BA",
    label: "Piată (BA)",
  },
  {
    value: "Piau MG",
    label: "Piau (MG)",
  },
  {
    value: "Piaçabuçu AL",
    label: "Piaçabuçu (AL)",
  },
  {
    value: "Picada Café RS",
    label: "Picada Café (RS)",
  },
  {
    value: "Picos PI",
    label: "Picos (PI)",
  },
  {
    value: "Picuí PB",
    label: "Picuí (PB)",
  },
  {
    value: "Piedade SP",
    label: "Piedade (SP)",
  },
  {
    value: "Piedade Dos Gerais MG",
    label: "Piedade Dos Gerais (MG)",
  },
  {
    value: "Piedade de Caratinga MG",
    label: "Piedade de Caratinga (MG)",
  },
  {
    value: "Piedade de Ponte Nova MG",
    label: "Piedade de Ponte Nova (MG)",
  },
  {
    value: "Piedade do Rio Grande MG",
    label: "Piedade do Rio Grande (MG)",
  },
  {
    value: "Pilar AL",
    label: "Pilar (AL)",
  },
  {
    value: "Pilar PB",
    label: "Pilar (PB)",
  },
  {
    value: "Pilar de Goiás GO",
    label: "Pilar de Goiás (GO)",
  },
  {
    value: "Pilar do Sul SP",
    label: "Pilar do Sul (SP)",
  },
  {
    value: "Pilăo Arcado BA",
    label: "Pilăo Arcado (BA)",
  },
  {
    value: "Pilơes PB",
    label: "Pilơes (PB)",
  },
  {
    value: "Pilơes RN",
    label: "Pilơes (RN)",
  },
  {
    value: "Pilơezinhos PB",
    label: "Pilơezinhos (PB)",
  },
  {
    value: "Pimenta MG",
    label: "Pimenta (MG)",
  },
  {
    value: "Pimenta Bueno RO",
    label: "Pimenta Bueno (RO)",
  },
  {
    value: "Pimenteiras PI",
    label: "Pimenteiras (PI)",
  },
  {
    value: "Pimenteiras do Oeste RO",
    label: "Pimenteiras do Oeste (RO)",
  },
  {
    value: "Pindamonhangaba SP",
    label: "Pindamonhangaba (SP)",
  },
  {
    value: "Pindaré-mirim MA",
    label: "Pindaré-mirim (MA)",
  },
  {
    value: "Pindaí BA",
    label: "Pindaí (BA)",
  },
  {
    value: "Pindoba AL",
    label: "Pindoba (AL)",
  },
  {
    value: "Pindobaçu BA",
    label: "Pindobaçu (BA)",
  },
  {
    value: "Pindorama SP",
    label: "Pindorama (SP)",
  },
  {
    value: "Pindorama do Tocantins TO",
    label: "Pindorama do Tocantins (TO)",
  },
  {
    value: "Pindoretama CE",
    label: "Pindoretama (CE)",
  },
  {
    value: "Pingo-d´água MG",
    label: "Pingo-d´água (MG)",
  },
  {
    value: "Pinhais PR",
    label: "Pinhais (PR)",
  },
  {
    value: "Pinhal RS",
    label: "Pinhal (RS)",
  },
  {
    value: "Pinhal Grande RS",
    label: "Pinhal Grande (RS)",
  },
  {
    value: "Pinhal da Serra RS",
    label: "Pinhal da Serra (RS)",
  },
  {
    value: "Pinhal de Săo Bento PR",
    label: "Pinhal de Săo Bento (PR)",
  },
  {
    value: "Pinhalzinho SC",
    label: "Pinhalzinho (SC)",
  },
  {
    value: "Pinhalzinho SP",
    label: "Pinhalzinho (SP)",
  },
  {
    value: "Pinhalăo PR",
    label: "Pinhalăo (PR)",
  },
  {
    value: "Pinheiral RJ",
    label: "Pinheiral (RJ)",
  },
  {
    value: "Pinheirinho do Vale RS",
    label: "Pinheirinho do Vale (RS)",
  },
  {
    value: "Pinheiro MA",
    label: "Pinheiro (MA)",
  },
  {
    value: "Pinheiro Machado RS",
    label: "Pinheiro Machado (RS)",
  },
  {
    value: "Pinheiro Preto SC",
    label: "Pinheiro Preto (SC)",
  },
  {
    value: "Pinheiros ES",
    label: "Pinheiros (ES)",
  },
  {
    value: "Pinhăo PR",
    label: "Pinhăo (PR)",
  },
  {
    value: "Pinhăo SE",
    label: "Pinhăo (SE)",
  },
  {
    value: "Pintadas BA",
    label: "Pintadas (BA)",
  },
  {
    value: "Pinto Bandeira RS",
    label: "Pinto Bandeira (RS)",
  },
  {
    value: "Pintópolis MG",
    label: "Pintópolis (MG)",
  },
  {
    value: "Pio Xii MA",
    label: "Pio Xii (MA)",
  },
  {
    value: "Pio ix PI",
    label: "Pio ix (PI)",
  },
  {
    value: "Piquerobi SP",
    label: "Piquerobi (SP)",
  },
  {
    value: "Piquet Carneiro CE",
    label: "Piquet Carneiro (CE)",
  },
  {
    value: "Piquete SP",
    label: "Piquete (SP)",
  },
  {
    value: "Piracaia SP",
    label: "Piracaia (SP)",
  },
  {
    value: "Piracanjuba GO",
    label: "Piracanjuba (GO)",
  },
  {
    value: "Piracema MG",
    label: "Piracema (MG)",
  },
  {
    value: "Piracicaba SP",
    label: "Piracicaba (SP)",
  },
  {
    value: "Piracuruca PI",
    label: "Piracuruca (PI)",
  },
  {
    value: "Piraju SP",
    label: "Piraju (SP)",
  },
  {
    value: "Pirajuba MG",
    label: "Pirajuba (MG)",
  },
  {
    value: "Pirajuí SP",
    label: "Pirajuí (SP)",
  },
  {
    value: "Pirambu SE",
    label: "Pirambu (SE)",
  },
  {
    value: "Piranga MG",
    label: "Piranga (MG)",
  },
  {
    value: "Pirangi SP",
    label: "Pirangi (SP)",
  },
  {
    value: "Piranguinho MG",
    label: "Piranguinho (MG)",
  },
  {
    value: "Piranguçu MG",
    label: "Piranguçu (MG)",
  },
  {
    value: "Piranhas AL",
    label: "Piranhas (AL)",
  },
  {
    value: "Piranhas GO",
    label: "Piranhas (GO)",
  },
  {
    value: "Pirapemas MA",
    label: "Pirapemas (MA)",
  },
  {
    value: "Pirapetinga MG",
    label: "Pirapetinga (MG)",
  },
  {
    value: "Pirapora MG",
    label: "Pirapora (MG)",
  },
  {
    value: "Pirapora do Bom Jesus SP",
    label: "Pirapora do Bom Jesus (SP)",
  },
  {
    value: "Pirapozinho SP",
    label: "Pirapozinho (SP)",
  },
  {
    value: "Pirapó RS",
    label: "Pirapó (RS)",
  },
  {
    value: "Piraquara PR",
    label: "Piraquara (PR)",
  },
  {
    value: "Piraquê TO",
    label: "Piraquê (TO)",
  },
  {
    value: "Pirassununga SP",
    label: "Pirassununga (SP)",
  },
  {
    value: "Piratini RS",
    label: "Piratini (RS)",
  },
  {
    value: "Piratininga SP",
    label: "Piratininga (SP)",
  },
  {
    value: "Piratuba SC",
    label: "Piratuba (SC)",
  },
  {
    value: "Piraí RJ",
    label: "Piraí (RJ)",
  },
  {
    value: "Piraí do Norte BA",
    label: "Piraí do Norte (BA)",
  },
  {
    value: "Piraí do Sul PR",
    label: "Piraí do Sul (PR)",
  },
  {
    value: "Piraúba MG",
    label: "Piraúba (MG)",
  },
  {
    value: "Pirenópolis GO",
    label: "Pirenópolis (GO)",
  },
  {
    value: "Pires Ferreira CE",
    label: "Pires Ferreira (CE)",
  },
  {
    value: "Pires do Rio GO",
    label: "Pires do Rio (GO)",
  },
  {
    value: "Piripiri PI",
    label: "Piripiri (PI)",
  },
  {
    value: "Piripá BA",
    label: "Piripá (BA)",
  },
  {
    value: "Piritiba BA",
    label: "Piritiba (BA)",
  },
  {
    value: "Pirpirituba PB",
    label: "Pirpirituba (PB)",
  },
  {
    value: "Pitanga PR",
    label: "Pitanga (PR)",
  },
  {
    value: "Pitangueiras PR",
    label: "Pitangueiras (PR)",
  },
  {
    value: "Pitangueiras SP",
    label: "Pitangueiras (SP)",
  },
  {
    value: "Pitangui MG",
    label: "Pitangui (MG)",
  },
  {
    value: "Pitimbu PB",
    label: "Pitimbu (PB)",
  },
  {
    value: "Pium TO",
    label: "Pium (TO)",
  },
  {
    value: "Piumhi MG",
    label: "Piumhi (MG)",
  },
  {
    value: "Piçarra PA",
    label: "Piçarra (PA)",
  },
  {
    value: "Piçarras SC",
    label: "Piçarras (SC)",
  },
  {
    value: "Piên PR",
    label: "Piên (PR)",
  },
  {
    value: "Piúma ES",
    label: "Piúma (ES)",
  },
  {
    value: "Placas PA",
    label: "Placas (PA)",
  },
  {
    value: "Planaltina GO",
    label: "Planaltina (GO)",
  },
  {
    value: "Planaltina do Paraná PR",
    label: "Planaltina do Paraná (PR)",
  },
  {
    value: "Planaltino BA",
    label: "Planaltino (BA)",
  },
  {
    value: "Planalto BA",
    label: "Planalto (BA)",
  },
  {
    value: "Planalto PR",
    label: "Planalto (PR)",
  },
  {
    value: "Planalto RS",
    label: "Planalto (RS)",
  },
  {
    value: "Planalto SP",
    label: "Planalto (SP)",
  },
  {
    value: "Planalto Alegre SC",
    label: "Planalto Alegre (SC)",
  },
  {
    value: "Planalto da Serra MT",
    label: "Planalto da Serra (MT)",
  },
  {
    value: "Planura MG",
    label: "Planura (MG)",
  },
  {
    value: "Platina SP",
    label: "Platina (SP)",
  },
  {
    value: "Plácido de Castro AC",
    label: "Plácido de Castro (AC)",
  },
  {
    value: "Pocinhos PB",
    label: "Pocinhos (PB)",
  },
  {
    value: "Poconé MT",
    label: "Poconé (MT)",
  },
  {
    value: "Pocrane MG",
    label: "Pocrane (MG)",
  },
  {
    value: "Pojuca BA",
    label: "Pojuca (BA)",
  },
  {
    value: "Poloni SP",
    label: "Poloni (SP)",
  },
  {
    value: "Pombal PB",
    label: "Pombal (PB)",
  },
  {
    value: "Pombos PE",
    label: "Pombos (PE)",
  },
  {
    value: "Pomerode SC",
    label: "Pomerode (SC)",
  },
  {
    value: "Pompéia SP",
    label: "Pompéia (SP)",
  },
  {
    value: "Pompéu MG",
    label: "Pompéu (MG)",
  },
  {
    value: "Pongaí SP",
    label: "Pongaí (SP)",
  },
  {
    value: "Ponta Grossa PR",
    label: "Ponta Grossa (PR)",
  },
  {
    value: "Ponta Poră MS",
    label: "Ponta Poră (MS)",
  },
  {
    value: "Ponta de Pedras PA",
    label: "Ponta de Pedras (PA)",
  },
  {
    value: "Pontal SP",
    label: "Pontal (SP)",
  },
  {
    value: "Pontal do Araguaia MT",
    label: "Pontal do Araguaia (MT)",
  },
  {
    value: "Pontal do Paraná PR",
    label: "Pontal do Paraná (PR)",
  },
  {
    value: "Pontalina GO",
    label: "Pontalina (GO)",
  },
  {
    value: "Pontalinda SP",
    label: "Pontalinda (SP)",
  },
  {
    value: "Ponte Alta SC",
    label: "Ponte Alta (SC)",
  },
  {
    value: "Ponte Alta do Bom Jesu TO",
    label: "Ponte Alta do Bom Jesus (TO)",
  },
  {
    value: "Ponte Alta do Norte SC",
    label: "Ponte Alta do Norte (SC)",
  },
  {
    value: "Ponte Alta do Tocantin TO",
    label: "Ponte Alta do Tocantins (TO)",
  },
  {
    value: "Ponte Branca MT",
    label: "Ponte Branca (MT)",
  },
  {
    value: "Ponte Nova MG",
    label: "Ponte Nova (MG)",
  },
  {
    value: "Ponte Preta RS",
    label: "Ponte Preta (RS)",
  },
  {
    value: "Ponte Serrada SC",
    label: "Ponte Serrada (SC)",
  },
  {
    value: "Pontes Gestal SP",
    label: "Pontes Gestal (SP)",
  },
  {
    value: "Pontes e Lacerda MT",
    label: "Pontes e Lacerda (MT)",
  },
  {
    value: "Ponto Belo ES",
    label: "Ponto Belo (ES)",
  },
  {
    value: "Ponto Chique MG",
    label: "Ponto Chique (MG)",
  },
  {
    value: "Ponto Dos Volantes MG",
    label: "Ponto Dos Volantes (MG)",
  },
  {
    value: "Ponto Novo BA",
    label: "Ponto Novo (BA)",
  },
  {
    value: "Pontăo RS",
    label: "Pontăo (RS)",
  },
  {
    value: "Populina SP",
    label: "Populina (SP)",
  },
  {
    value: "Poranga CE",
    label: "Poranga (CE)",
  },
  {
    value: "Porangaba SP",
    label: "Porangaba (SP)",
  },
  {
    value: "Porangatu GO",
    label: "Porangatu (GO)",
  },
  {
    value: "Porciúncula RJ",
    label: "Porciúncula (RJ)",
  },
  {
    value: "Porecatu PR",
    label: "Porecatu (PR)",
  },
  {
    value: "Portalegre RN",
    label: "Portalegre (RN)",
  },
  {
    value: "Porteiras CE",
    label: "Porteiras (CE)",
  },
  {
    value: "Porteirinha MG",
    label: "Porteirinha (MG)",
  },
  {
    value: "Porteirăo GO",
    label: "Porteirăo (GO)",
  },
  {
    value: "Portel PA",
    label: "Portel (PA)",
  },
  {
    value: "Portelândia GO",
    label: "Portelândia (GO)",
  },
  {
    value: "Porto PI",
    label: "Porto (PI)",
  },
  {
    value: "Porto Acre AC",
    label: "Porto Acre (AC)",
  },
  {
    value: "Porto Alegre RS",
    label: "Porto Alegre (RS)",
  },
  {
    value: "Porto Alegre do Norte MT",
    label: "Porto Alegre do Norte (MT)",
  },
  {
    value: "Porto Alegre do Piauí PI",
    label: "Porto Alegre do Piauí (PI)",
  },
  {
    value: "Porto Alegre do Tocant TO",
    label: "Porto Alegre do Tocantins (TO)",
  },
  {
    value: "Porto Amazonas PR",
    label: "Porto Amazonas (PR)",
  },
  {
    value: "Porto Barreiro PR",
    label: "Porto Barreiro (PR)",
  },
  {
    value: "Porto Belo SC",
    label: "Porto Belo (SC)",
  },
  {
    value: "Porto Calvo AL",
    label: "Porto Calvo (AL)",
  },
  {
    value: "Porto Dos Gaúchos MT",
    label: "Porto Dos Gaúchos (MT)",
  },
  {
    value: "Porto Esperidiăo MT",
    label: "Porto Esperidiăo (MT)",
  },
  {
    value: "Porto Estrela MT",
    label: "Porto Estrela (MT)",
  },
  {
    value: "Porto Feliz SP",
    label: "Porto Feliz (SP)",
  },
  {
    value: "Porto Ferreira SP",
    label: "Porto Ferreira (SP)",
  },
  {
    value: "Porto Firme MG",
    label: "Porto Firme (MG)",
  },
  {
    value: "Porto Franco MA",
    label: "Porto Franco (MA)",
  },
  {
    value: "Porto Grande AP",
    label: "Porto Grande (AP)",
  },
  {
    value: "Porto Lucena RS",
    label: "Porto Lucena (RS)",
  },
  {
    value: "Porto Mauá RS",
    label: "Porto Mauá (RS)",
  },
  {
    value: "Porto Murtinho MS",
    label: "Porto Murtinho (MS)",
  },
  {
    value: "Porto Nacional TO",
    label: "Porto Nacional (TO)",
  },
  {
    value: "Porto Real RJ",
    label: "Porto Real (RJ)",
  },
  {
    value: "Porto Real do Colégio AL",
    label: "Porto Real do Colégio (AL)",
  },
  {
    value: "Porto Rico PR",
    label: "Porto Rico (PR)",
  },
  {
    value: "Porto Rico do Maranhăo MA",
    label: "Porto Rico do Maranhăo (MA)",
  },
  {
    value: "Porto Seguro BA",
    label: "Porto Seguro (BA)",
  },
  {
    value: "Porto Uniăo SC",
    label: "Porto Uniăo (SC)",
  },
  {
    value: "Porto Velho RO",
    label: "Porto Velho (RO)",
  },
  {
    value: "Porto Vera Cruz RS",
    label: "Porto Vera Cruz (RS)",
  },
  {
    value: "Porto Vitória PR",
    label: "Porto Vitória (PR)",
  },
  {
    value: "Porto Walter AC",
    label: "Porto Walter (AC)",
  },
  {
    value: "Porto Xavier RS",
    label: "Porto Xavier (RS)",
  },
  {
    value: "Porto da Folha SE",
    label: "Porto da Folha (SE)",
  },
  {
    value: "Porto de Moz PA",
    label: "Porto de Moz (PA)",
  },
  {
    value: "Porto de Pedras AL",
    label: "Porto de Pedras (AL)",
  },
  {
    value: "Porto do Mangue RN",
    label: "Porto do Mangue (RN)",
  },
  {
    value: "Portăo RS",
    label: "Portăo (RS)",
  },
  {
    value: "Posse GO",
    label: "Posse (GO)",
  },
  {
    value: "Potengi CE",
    label: "Potengi (CE)",
  },
  {
    value: "Potim SP",
    label: "Potim (SP)",
  },
  {
    value: "Potiraguá BA",
    label: "Potiraguá (BA)",
  },
  {
    value: "Potirendaba SP",
    label: "Potirendaba (SP)",
  },
  {
    value: "Potiretama CE",
    label: "Potiretama (CE)",
  },
  {
    value: "Poté MG",
    label: "Poté (MG)",
  },
  {
    value: "Pouso Alegre MG",
    label: "Pouso Alegre (MG)",
  },
  {
    value: "Pouso Alto MG",
    label: "Pouso Alto (MG)",
  },
  {
    value: "Pouso Novo RS",
    label: "Pouso Novo (RS)",
  },
  {
    value: "Pouso Redondo SC",
    label: "Pouso Redondo (SC)",
  },
  {
    value: "Poxoréo MT",
    label: "Poxoréo (MT)",
  },
  {
    value: "Poá SP",
    label: "Poá (SP)",
  },
  {
    value: "Poço Branco RN",
    label: "Poço Branco (RN)",
  },
  {
    value: "Poço Dantas PB",
    label: "Poço Dantas (PB)",
  },
  {
    value: "Poço Das Antas RS",
    label: "Poço Das Antas (RS)",
  },
  {
    value: "Poço Das Trincheiras AL",
    label: "Poço Das Trincheiras (AL)",
  },
  {
    value: "Poço Fundo MG",
    label: "Poço Fundo (MG)",
  },
  {
    value: "Poço Redondo SE",
    label: "Poço Redondo (SE)",
  },
  {
    value: "Poço Verde SE",
    label: "Poço Verde (SE)",
  },
  {
    value: "Poço de José de Moura PB",
    label: "Poço de José de Moura (PB)",
  },
  {
    value: "Poços de Caldas MG",
    label: "Poços de Caldas (MG)",
  },
  {
    value: "Poçăo PE",
    label: "Poçăo (PE)",
  },
  {
    value: "Poçăo de Pedras MA",
    label: "Poçăo de Pedras (MA)",
  },
  {
    value: "Poçơes BA",
    label: "Poçơes (BA)",
  },
  {
    value: "Pracinha SP",
    label: "Pracinha (SP)",
  },
  {
    value: "Pracuúba AP",
    label: "Pracuúba (AP)",
  },
  {
    value: "Prado BA",
    label: "Prado (BA)",
  },
  {
    value: "Prado Ferreira PR",
    label: "Prado Ferreira (PR)",
  },
  {
    value: "Prados MG",
    label: "Prados (MG)",
  },
  {
    value: "Pradópolis SP",
    label: "Pradópolis (SP)",
  },
  {
    value: "Praia Grande SC",
    label: "Praia Grande (SC)",
  },
  {
    value: "Praia Grande SP",
    label: "Praia Grande (SP)",
  },
  {
    value: "Praia Norte TO",
    label: "Praia Norte (TO)",
  },
  {
    value: "Prainha PA",
    label: "Prainha (PA)",
  },
  {
    value: "Pranchita PR",
    label: "Pranchita (PR)",
  },
  {
    value: "Prata MG",
    label: "Prata (MG)",
  },
  {
    value: "Prata PB",
    label: "Prata (PB)",
  },
  {
    value: "Prata do Piauí PI",
    label: "Prata do Piauí (PI)",
  },
  {
    value: "Pratinha MG",
    label: "Pratinha (MG)",
  },
  {
    value: "Pratápolis MG",
    label: "Pratápolis (MG)",
  },
  {
    value: "Pratânia SP",
    label: "Pratânia (SP)",
  },
  {
    value: "Presidente Alves SP",
    label: "Presidente Alves (SP)",
  },
  {
    value: "Presidente Bernardes MG",
    label: "Presidente Bernardes (MG)",
  },
  {
    value: "Presidente Bernardes SP",
    label: "Presidente Bernardes (SP)",
  },
  {
    value: "Presidente Castelo Bra PR",
    label: "Presidente Castelo Branco (PR)",
  },
  {
    value: "Presidente Castelo Bra SC",
    label: "Presidente Castelo Branco (SC)",
  },
  {
    value: "Presidente Dutra BA",
    label: "Presidente Dutra (BA)",
  },
  {
    value: "Presidente Dutra MA",
    label: "Presidente Dutra (MA)",
  },
  {
    value: "Presidente Epitácio SP",
    label: "Presidente Epitácio (SP)",
  },
  {
    value: "Presidente Figueiredo AM",
    label: "Presidente Figueiredo (AM)",
  },
  {
    value: "Presidente Getúlio SC",
    label: "Presidente Getúlio (SC)",
  },
  {
    value: "Presidente Juscelino MA",
    label: "Presidente Juscelino (MA)",
  },
  {
    value: "Presidente Juscelino MG",
    label: "Presidente Juscelino (MG)",
  },
  {
    value: "Presidente Juscelino RN",
    label: "Presidente Juscelino (RN)",
  },
  {
    value: "Presidente Jânio Quadr BA",
    label: "Presidente Jânio Quadros (BA)",
  },
  {
    value: "Presidente Kennedy ES",
    label: "Presidente Kennedy (ES)",
  },
  {
    value: "Presidente Kennedy TO",
    label: "Presidente Kennedy (TO)",
  },
  {
    value: "Presidente Kubitschek MG",
    label: "Presidente Kubitschek (MG)",
  },
  {
    value: "Presidente Lucena RS",
    label: "Presidente Lucena (RS)",
  },
  {
    value: "Presidente Médici MA",
    label: "Presidente Médici (MA)",
  },
  {
    value: "Presidente Médici RO",
    label: "Presidente Médici (RO)",
  },
  {
    value: "Presidente Nereu SC",
    label: "Presidente Nereu (SC)",
  },
  {
    value: "Presidente Olegário MG",
    label: "Presidente Olegário (MG)",
  },
  {
    value: "Presidente Prudente SP",
    label: "Presidente Prudente (SP)",
  },
  {
    value: "Presidente Sarney MA",
    label: "Presidente Sarney (MA)",
  },
  {
    value: "Presidente Tancredo Ne BA",
    label: "Presidente Tancredo Neves (BA)",
  },
  {
    value: "Presidente Vargas MA",
    label: "Presidente Vargas (MA)",
  },
  {
    value: "Presidente Venceslau SP",
    label: "Presidente Venceslau (SP)",
  },
  {
    value: "Primavera PA",
    label: "Primavera (PA)",
  },
  {
    value: "Primavera PE",
    label: "Primavera (PE)",
  },
  {
    value: "Primavera de Rondônia RO",
    label: "Primavera de Rondônia (RO)",
  },
  {
    value: "Primavera do Leste MT",
    label: "Primavera do Leste (MT)",
  },
  {
    value: "Primeira Cruz MA",
    label: "Primeira Cruz (MA)",
  },
  {
    value: "Primeiro de Maio PR",
    label: "Primeiro de Maio (PR)",
  },
  {
    value: "Princesa SC",
    label: "Princesa (SC)",
  },
  {
    value: "Princesa Isabel PB",
    label: "Princesa Isabel (PB)",
  },
  {
    value: "Professor Jamil GO",
    label: "Professor Jamil (GO)",
  },
  {
    value: "Progresso RS",
    label: "Progresso (RS)",
  },
  {
    value: "Promissăo SP",
    label: "Promissăo (SP)",
  },
  {
    value: "Propriá SE",
    label: "Propriá (SE)",
  },
  {
    value: "Protásio Alves RS",
    label: "Protásio Alves (RS)",
  },
  {
    value: "Prudente de Morais MG",
    label: "Prudente de Morais (MG)",
  },
  {
    value: "Prudentópolis PR",
    label: "Prudentópolis (PR)",
  },
  {
    value: "Pugmil TO",
    label: "Pugmil (TO)",
  },
  {
    value: "Pureza RN",
    label: "Pureza (RN)",
  },
  {
    value: "Putinga RS",
    label: "Putinga (RS)",
  },
  {
    value: "Puxinană PB",
    label: "Puxinană (PB)",
  },
  {
    value: "Pérola PR",
    label: "Pérola (PR)",
  },
  {
    value: "Pérola D´oeste PR",
    label: "Pérola D´oeste (PR)",
  },
  {
    value: "Păo de Açúcar AL",
    label: "Păo de Açúcar (AL)",
  },
  {
    value: "Quadra SP",
    label: "Quadra (SP)",
  },
  {
    value: "Quaraí RS",
    label: "Quaraí (RS)",
  },
  {
    value: "Quartel Geral MG",
    label: "Quartel Geral (MG)",
  },
  {
    value: "Quarto Centenário PR",
    label: "Quarto Centenário (PR)",
  },
  {
    value: "Quatiguá PR",
    label: "Quatiguá (PR)",
  },
  {
    value: "Quatipuru PA",
    label: "Quatipuru (PA)",
  },
  {
    value: "Quatis RJ",
    label: "Quatis (RJ)",
  },
  {
    value: "Quatro Barras PR",
    label: "Quatro Barras (PR)",
  },
  {
    value: "Quatro Irmăos RS",
    label: "Quatro Irmăos (RS)",
  },
  {
    value: "Quatro Pontes PR",
    label: "Quatro Pontes (PR)",
  },
  {
    value: "Quatá SP",
    label: "Quatá (SP)",
  },
  {
    value: "Quebrangulo AL",
    label: "Quebrangulo (AL)",
  },
  {
    value: "Quedas do Iguaçu PR",
    label: "Quedas do Iguaçu (PR)",
  },
  {
    value: "Queimada Nova PI",
    label: "Queimada Nova (PI)",
  },
  {
    value: "Queimadas BA",
    label: "Queimadas (BA)",
  },
  {
    value: "Queimadas PB",
    label: "Queimadas (PB)",
  },
  {
    value: "Queimados RJ",
    label: "Queimados (RJ)",
  },
  {
    value: "Queiroz SP",
    label: "Queiroz (SP)",
  },
  {
    value: "Queluz SP",
    label: "Queluz (SP)",
  },
  {
    value: "Queluzito MG",
    label: "Queluzito (MG)",
  },
  {
    value: "Querência MT",
    label: "Querência (MT)",
  },
  {
    value: "Querência do Norte PR",
    label: "Querência do Norte (PR)",
  },
  {
    value: "Quevedos RS",
    label: "Quevedos (RS)",
  },
  {
    value: "Quijingue BA",
    label: "Quijingue (BA)",
  },
  {
    value: "Quilombo SC",
    label: "Quilombo (SC)",
  },
  {
    value: "Quinta do Sol PR",
    label: "Quinta do Sol (PR)",
  },
  {
    value: "Quintana SP",
    label: "Quintana (SP)",
  },
  {
    value: "Quinze de Novembro RS",
    label: "Quinze de Novembro (RS)",
  },
  {
    value: "Quipapá PE",
    label: "Quipapá (PE)",
  },
  {
    value: "Quirinópolis GO",
    label: "Quirinópolis (GO)",
  },
  {
    value: "Quissamă RJ",
    label: "Quissamă (RJ)",
  },
  {
    value: "Quitandinha PR",
    label: "Quitandinha (PR)",
  },
  {
    value: "Quiterianópolis CE",
    label: "Quiterianópolis (CE)",
  },
  {
    value: "Quixaba PE",
    label: "Quixaba (PE)",
  },
  {
    value: "Quixabeira BA",
    label: "Quixabeira (BA)",
  },
  {
    value: "Quixabá PB",
    label: "Quixabá (PB)",
  },
  {
    value: "Quixadá CE",
    label: "Quixadá (CE)",
  },
  {
    value: "Quixelô CE",
    label: "Quixelô (CE)",
  },
  {
    value: "Quixeramobim CE",
    label: "Quixeramobim (CE)",
  },
  {
    value: "Quixeré CE",
    label: "Quixeré (CE)",
  },
  {
    value: "Rafael Fernandes RN",
    label: "Rafael Fernandes (RN)",
  },
  {
    value: "Rafael Godeiro RN",
    label: "Rafael Godeiro (RN)",
  },
  {
    value: "Rafael Jambeiro BA",
    label: "Rafael Jambeiro (BA)",
  },
  {
    value: "Rafard SP",
    label: "Rafard (SP)",
  },
  {
    value: "Ramilândia PR",
    label: "Ramilândia (PR)",
  },
  {
    value: "Rancharia SP",
    label: "Rancharia (SP)",
  },
  {
    value: "Rancho Alegre PR",
    label: "Rancho Alegre (PR)",
  },
  {
    value: "Rancho Alegre D´oeste PR",
    label: "Rancho Alegre D´oeste (PR)",
  },
  {
    value: "Rancho Queimado SC",
    label: "Rancho Queimado (SC)",
  },
  {
    value: "Raposa MA",
    label: "Raposa (MA)",
  },
  {
    value: "Raposos MG",
    label: "Raposos (MG)",
  },
  {
    value: "Raul Soares MG",
    label: "Raul Soares (MG)",
  },
  {
    value: "Realeza PR",
    label: "Realeza (PR)",
  },
  {
    value: "Rebouças PR",
    label: "Rebouças (PR)",
  },
  {
    value: "Recife PE",
    label: "Recife (PE)",
  },
  {
    value: "Recreio MG",
    label: "Recreio (MG)",
  },
  {
    value: "Recursolândia TO",
    label: "Recursolândia (TO)",
  },
  {
    value: "Redentora RS",
    label: "Redentora (RS)",
  },
  {
    value: "Redençăo CE",
    label: "Redençăo (CE)",
  },
  {
    value: "Redençăo PA",
    label: "Redençăo (PA)",
  },
  {
    value: "Redençăo da Serra SP",
    label: "Redençăo da Serra (SP)",
  },
  {
    value: "Redençăo do Gurguéia PI",
    label: "Redençăo do Gurguéia (PI)",
  },
  {
    value: "Reduto MG",
    label: "Reduto (MG)",
  },
  {
    value: "Regeneraçăo PI",
    label: "Regeneraçăo (PI)",
  },
  {
    value: "Regente Feijó SP",
    label: "Regente Feijó (SP)",
  },
  {
    value: "Reginópolis SP",
    label: "Reginópolis (SP)",
  },
  {
    value: "Registro SP",
    label: "Registro (SP)",
  },
  {
    value: "Relvado RS",
    label: "Relvado (RS)",
  },
  {
    value: "Remanso BA",
    label: "Remanso (BA)",
  },
  {
    value: "Remígio PB",
    label: "Remígio (PB)",
  },
  {
    value: "Renascença PR",
    label: "Renascença (PR)",
  },
  {
    value: "Reriutaba CE",
    label: "Reriutaba (CE)",
  },
  {
    value: "Resende RJ",
    label: "Resende (RJ)",
  },
  {
    value: "Resende Costa MG",
    label: "Resende Costa (MG)",
  },
  {
    value: "Reserva PR",
    label: "Reserva (PR)",
  },
  {
    value: "Reserva do Cabaçal MT",
    label: "Reserva do Cabaçal (MT)",
  },
  {
    value: "Reserva do Iguaçu PR",
    label: "Reserva do Iguaçu (PR)",
  },
  {
    value: "Resplendor MG",
    label: "Resplendor (MG)",
  },
  {
    value: "Ressaquinha MG",
    label: "Ressaquinha (MG)",
  },
  {
    value: "Restinga SP",
    label: "Restinga (SP)",
  },
  {
    value: "Restinga Seca RS",
    label: "Restinga Seca (RS)",
  },
  {
    value: "Retirolândia BA",
    label: "Retirolândia (BA)",
  },
  {
    value: "Riachinho MG",
    label: "Riachinho (MG)",
  },
  {
    value: "Riachinho TO",
    label: "Riachinho (TO)",
  },
  {
    value: "Riacho Das Almas PE",
    label: "Riacho Das Almas (PE)",
  },
  {
    value: "Riacho Dos Cavalos PB",
    label: "Riacho Dos Cavalos (PB)",
  },
  {
    value: "Riacho Dos Machados MG",
    label: "Riacho Dos Machados (MG)",
  },
  {
    value: "Riacho Frio PI",
    label: "Riacho Frio (PI)",
  },
  {
    value: "Riacho da Cruz RN",
    label: "Riacho da Cruz (RN)",
  },
  {
    value: "Riacho de Santana BA",
    label: "Riacho de Santana (BA)",
  },
  {
    value: "Riacho de Santana RN",
    label: "Riacho de Santana (RN)",
  },
  {
    value: "Riacho de Santo Antôni PB",
    label: "Riacho de Santo Antônio (PB)",
  },
  {
    value: "Riachuelo RN",
    label: "Riachuelo (RN)",
  },
  {
    value: "Riachuelo SE",
    label: "Riachuelo (SE)",
  },
  {
    value: "Riachăo MA",
    label: "Riachăo (MA)",
  },
  {
    value: "Riachăo PB",
    label: "Riachăo (PB)",
  },
  {
    value: "Riachăo Das Neves BA",
    label: "Riachăo Das Neves (BA)",
  },
  {
    value: "Riachăo do Bacamarte PB",
    label: "Riachăo do Bacamarte (PB)",
  },
  {
    value: "Riachăo do Dantas SE",
    label: "Riachăo do Dantas (SE)",
  },
  {
    value: "Riachăo do Jacuípe BA",
    label: "Riachăo do Jacuípe (BA)",
  },
  {
    value: "Riachăo do Poço PB",
    label: "Riachăo do Poço (PB)",
  },
  {
    value: "Rialma GO",
    label: "Rialma (GO)",
  },
  {
    value: "Rianápolis GO",
    label: "Rianápolis (GO)",
  },
  {
    value: "Ribamar Fiquene MA",
    label: "Ribamar Fiquene (MA)",
  },
  {
    value: "Ribas do Rio Pardo MS",
    label: "Ribas do Rio Pardo (MS)",
  },
  {
    value: "Ribeira SP",
    label: "Ribeira (SP)",
  },
  {
    value: "Ribeira do Amparo BA",
    label: "Ribeira do Amparo (BA)",
  },
  {
    value: "Ribeira do Piauí PI",
    label: "Ribeira do Piauí (PI)",
  },
  {
    value: "Ribeira do Pombal BA",
    label: "Ribeira do Pombal (BA)",
  },
  {
    value: "Ribeiro Gonçalves PI",
    label: "Ribeiro Gonçalves (PI)",
  },
  {
    value: "Ribeirópolis SE",
    label: "Ribeirópolis (SE)",
  },
  {
    value: "Ribeirăo PE",
    label: "Ribeirăo (PE)",
  },
  {
    value: "Ribeirăo Bonito SP",
    label: "Ribeirăo Bonito (SP)",
  },
  {
    value: "Ribeirăo Branco SP",
    label: "Ribeirăo Branco (SP)",
  },
  {
    value: "Ribeirăo Cascalheira MT",
    label: "Ribeirăo Cascalheira (MT)",
  },
  {
    value: "Ribeirăo Claro PR",
    label: "Ribeirăo Claro (PR)",
  },
  {
    value: "Ribeirăo Corrente SP",
    label: "Ribeirăo Corrente (SP)",
  },
  {
    value: "Ribeirăo Das Neves MG",
    label: "Ribeirăo Das Neves (MG)",
  },
  {
    value: "Ribeirăo Dos Índios SP",
    label: "Ribeirăo Dos Índios (SP)",
  },
  {
    value: "Ribeirăo Grande SP",
    label: "Ribeirăo Grande (SP)",
  },
  {
    value: "Ribeirăo Pires SP",
    label: "Ribeirăo Pires (SP)",
  },
  {
    value: "Ribeirăo Preto SP",
    label: "Ribeirăo Preto (SP)",
  },
  {
    value: "Ribeirăo Vermelho MG",
    label: "Ribeirăo Vermelho (MG)",
  },
  {
    value: "Ribeirăo do Largo BA",
    label: "Ribeirăo do Largo (BA)",
  },
  {
    value: "Ribeirăo do Pinhal PR",
    label: "Ribeirăo do Pinhal (PR)",
  },
  {
    value: "Ribeirăo do Sul SP",
    label: "Ribeirăo do Sul (SP)",
  },
  {
    value: "Ribeirăozinho MT",
    label: "Ribeirăozinho (MT)",
  },
  {
    value: "Rifaina SP",
    label: "Rifaina (SP)",
  },
  {
    value: "Rincăo SP",
    label: "Rincăo (SP)",
  },
  {
    value: "Rinópolis SP",
    label: "Rinópolis (SP)",
  },
  {
    value: "Rio Acima MG",
    label: "Rio Acima (MG)",
  },
  {
    value: "Rio Azul PR",
    label: "Rio Azul (PR)",
  },
  {
    value: "Rio Bananal ES",
    label: "Rio Bananal (ES)",
  },
  {
    value: "Rio Bom PR",
    label: "Rio Bom (PR)",
  },
  {
    value: "Rio Bonito RJ",
    label: "Rio Bonito (RJ)",
  },
  {
    value: "Rio Bonito do Iguaçu PR",
    label: "Rio Bonito do Iguaçu (PR)",
  },
  {
    value: "Rio Branco AC",
    label: "Rio Branco (AC)",
  },
  {
    value: "Rio Branco MT",
    label: "Rio Branco (MT)",
  },
  {
    value: "Rio Branco do Ivaí PR",
    label: "Rio Branco do Ivaí (PR)",
  },
  {
    value: "Rio Branco do Sul PR",
    label: "Rio Branco do Sul (PR)",
  },
  {
    value: "Rio Brilhante MS",
    label: "Rio Brilhante (MS)",
  },
  {
    value: "Rio Casca MG",
    label: "Rio Casca (MG)",
  },
  {
    value: "Rio Claro RJ",
    label: "Rio Claro (RJ)",
  },
  {
    value: "Rio Claro SP",
    label: "Rio Claro (SP)",
  },
  {
    value: "Rio Crespo RO",
    label: "Rio Crespo (RO)",
  },
  {
    value: "Rio Das Antas SC",
    label: "Rio Das Antas (SC)",
  },
  {
    value: "Rio Das Flores RJ",
    label: "Rio Das Flores (RJ)",
  },
  {
    value: "Rio Das Ostras RJ",
    label: "Rio Das Ostras (RJ)",
  },
  {
    value: "Rio Das Pedras SP",
    label: "Rio Das Pedras (SP)",
  },
  {
    value: "Rio Doce MG",
    label: "Rio Doce (MG)",
  },
  {
    value: "Rio Dos Bois TO",
    label: "Rio Dos Bois (TO)",
  },
  {
    value: "Rio Dos Cedros SC",
    label: "Rio Dos Cedros (SC)",
  },
  {
    value: "Rio Dos Índios RS",
    label: "Rio Dos Índios (RS)",
  },
  {
    value: "Rio Espera MG",
    label: "Rio Espera (MG)",
  },
  {
    value: "Rio Formoso PE",
    label: "Rio Formoso (PE)",
  },
  {
    value: "Rio Fortuna SC",
    label: "Rio Fortuna (SC)",
  },
  {
    value: "Rio Grande RS",
    label: "Rio Grande (RS)",
  },
  {
    value: "Rio Grande da Serra SP",
    label: "Rio Grande da Serra (SP)",
  },
  {
    value: "Rio Grande do Piauí PI",
    label: "Rio Grande do Piauí (PI)",
  },
  {
    value: "Rio Largo AL",
    label: "Rio Largo (AL)",
  },
  {
    value: "Rio Manso MG",
    label: "Rio Manso (MG)",
  },
  {
    value: "Rio Maria PA",
    label: "Rio Maria (PA)",
  },
  {
    value: "Rio Negrinho SC",
    label: "Rio Negrinho (SC)",
  },
  {
    value: "Rio Negro MS",
    label: "Rio Negro (MS)",
  },
  {
    value: "Rio Negro PR",
    label: "Rio Negro (PR)",
  },
  {
    value: "Rio Novo MG",
    label: "Rio Novo (MG)",
  },
  {
    value: "Rio Novo do Sul ES",
    label: "Rio Novo do Sul (ES)",
  },
  {
    value: "Rio Paranaíba MG",
    label: "Rio Paranaíba (MG)",
  },
  {
    value: "Rio Pardo RS",
    label: "Rio Pardo (RS)",
  },
  {
    value: "Rio Pardo de Minas MG",
    label: "Rio Pardo de Minas (MG)",
  },
  {
    value: "Rio Piracicaba MG",
    label: "Rio Piracicaba (MG)",
  },
  {
    value: "Rio Pomba MG",
    label: "Rio Pomba (MG)",
  },
  {
    value: "Rio Preto MG",
    label: "Rio Preto (MG)",
  },
  {
    value: "Rio Preto da Eva AM",
    label: "Rio Preto da Eva (AM)",
  },
  {
    value: "Rio Quente GO",
    label: "Rio Quente (GO)",
  },
  {
    value: "Rio Real BA",
    label: "Rio Real (BA)",
  },
  {
    value: "Rio Rufino SC",
    label: "Rio Rufino (SC)",
  },
  {
    value: "Rio Sono TO",
    label: "Rio Sono (TO)",
  },
  {
    value: "Rio Tinto PB",
    label: "Rio Tinto (PB)",
  },
  {
    value: "Rio Verde GO",
    label: "Rio Verde (GO)",
  },
  {
    value: "Rio Verde de Mato Gros MS",
    label: "Rio Verde de Mato Grosso (MS)",
  },
  {
    value: "Rio Vermelho MG",
    label: "Rio Vermelho (MG)",
  },
  {
    value: "Rio da Conceiçăo TO",
    label: "Rio da Conceiçăo (TO)",
  },
  {
    value: "Rio de Contas BA",
    label: "Rio de Contas (BA)",
  },
  {
    value: "Rio de Janeiro RJ",
    label: "Rio de Janeiro (RJ)",
  },
  {
    value: "Rio do Antônio BA",
    label: "Rio do Antônio (BA)",
  },
  {
    value: "Rio do Campo SC",
    label: "Rio do Campo (SC)",
  },
  {
    value: "Rio do Fogo RN",
    label: "Rio do Fogo (RN)",
  },
  {
    value: "Rio do Oeste SC",
    label: "Rio do Oeste (SC)",
  },
  {
    value: "Rio do Pires BA",
    label: "Rio do Pires (BA)",
  },
  {
    value: "Rio do Prado MG",
    label: "Rio do Prado (MG)",
  },
  {
    value: "Rio do Sul SC",
    label: "Rio do Sul (SC)",
  },
  {
    value: "Riolândia SP",
    label: "Riolândia (SP)",
  },
  {
    value: "Riozinho RS",
    label: "Riozinho (RS)",
  },
  {
    value: "Riqueza SC",
    label: "Riqueza (SC)",
  },
  {
    value: "Ritápolis MG",
    label: "Ritápolis (MG)",
  },
  {
    value: "Riversul SP",
    label: "Riversul (SP)",
  },
  {
    value: "Roca Sales RS",
    label: "Roca Sales (RS)",
  },
  {
    value: "Rochedo MS",
    label: "Rochedo (MS)",
  },
  {
    value: "Rochedo de Minas MG",
    label: "Rochedo de Minas (MG)",
  },
  {
    value: "Rodeio SC",
    label: "Rodeio (SC)",
  },
  {
    value: "Rodeio Bonito RS",
    label: "Rodeio Bonito (RS)",
  },
  {
    value: "Rodeiro MG",
    label: "Rodeiro (MG)",
  },
  {
    value: "Rodelas BA",
    label: "Rodelas (BA)",
  },
  {
    value: "Rodolfo Fernandes RN",
    label: "Rodolfo Fernandes (RN)",
  },
  {
    value: "Rodrigues Alves AC",
    label: "Rodrigues Alves (AC)",
  },
  {
    value: "Rolador RS",
    label: "Rolador (RS)",
  },
  {
    value: "Rolante RS",
    label: "Rolante (RS)",
  },
  {
    value: "Rolim de Moura RO",
    label: "Rolim de Moura (RO)",
  },
  {
    value: "Rolândia PR",
    label: "Rolândia (PR)",
  },
  {
    value: "Romaria MG",
    label: "Romaria (MG)",
  },
  {
    value: "Romelândia SC",
    label: "Romelândia (SC)",
  },
  {
    value: "Roncador PR",
    label: "Roncador (PR)",
  },
  {
    value: "Ronda Alta RS",
    label: "Ronda Alta (RS)",
  },
  {
    value: "Rondinha RS",
    label: "Rondinha (RS)",
  },
  {
    value: "Rondolândia MT",
    label: "Rondolândia (MT)",
  },
  {
    value: "Rondon PR",
    label: "Rondon (PR)",
  },
  {
    value: "Rondon do Pará PA",
    label: "Rondon do Pará (PA)",
  },
  {
    value: "Rondonópolis MT",
    label: "Rondonópolis (MT)",
  },
  {
    value: "Roque Gonzales RS",
    label: "Roque Gonzales (RS)",
  },
  {
    value: "Rorainópolis RR",
    label: "Rorainópolis (RR)",
  },
  {
    value: "Rosana SP",
    label: "Rosana (SP)",
  },
  {
    value: "Roseira SP",
    label: "Roseira (SP)",
  },
  {
    value: "Rosário MA",
    label: "Rosário (MA)",
  },
  {
    value: "Rosário Oeste MT",
    label: "Rosário Oeste (MT)",
  },
  {
    value: "Rosário da Limeira MG",
    label: "Rosário da Limeira (MG)",
  },
  {
    value: "Rosário do Catete SE",
    label: "Rosário do Catete (SE)",
  },
  {
    value: "Rosário do Ivaí PR",
    label: "Rosário do Ivaí (PR)",
  },
  {
    value: "Rosário do Sul RS",
    label: "Rosário do Sul (RS)",
  },
  {
    value: "Roteiro AL",
    label: "Roteiro (AL)",
  },
  {
    value: "Rubelita MG",
    label: "Rubelita (MG)",
  },
  {
    value: "Rubiataba GO",
    label: "Rubiataba (GO)",
  },
  {
    value: "Rubim MG",
    label: "Rubim (MG)",
  },
  {
    value: "Rubinéia SP",
    label: "Rubinéia (SP)",
  },
  {
    value: "Rubiácea SP",
    label: "Rubiácea (SP)",
  },
  {
    value: "Rurópolis PA",
    label: "Rurópolis (PA)",
  },
  {
    value: "Russas CE",
    label: "Russas (CE)",
  },
  {
    value: "Ruy Barbosa BA",
    label: "Ruy Barbosa (BA)",
  },
  {
    value: "Ruy Barbosa RN",
    label: "Ruy Barbosa (RN)",
  },
  {
    value: "Sabará MG",
    label: "Sabará (MG)",
  },
  {
    value: "Sabino SP",
    label: "Sabino (SP)",
  },
  {
    value: "Sabinópolis MG",
    label: "Sabinópolis (MG)",
  },
  {
    value: "Saboeiro CE",
    label: "Saboeiro (CE)",
  },
  {
    value: "Sabáudia PR",
    label: "Sabáudia (PR)",
  },
  {
    value: "Sacramento MG",
    label: "Sacramento (MG)",
  },
  {
    value: "Sagrada Família RS",
    label: "Sagrada Família (RS)",
  },
  {
    value: "Sagres SP",
    label: "Sagres (SP)",
  },
  {
    value: "Sairé PE",
    label: "Sairé (PE)",
  },
  {
    value: "Saldanha Marinho RS",
    label: "Saldanha Marinho (RS)",
  },
  {
    value: "Sales SP",
    label: "Sales (SP)",
  },
  {
    value: "Sales Oliveira SP",
    label: "Sales Oliveira (SP)",
  },
  {
    value: "Salesópolis SP",
    label: "Salesópolis (SP)",
  },
  {
    value: "Salete SC",
    label: "Salete (SC)",
  },
  {
    value: "Salgadinho PB",
    label: "Salgadinho (PB)",
  },
  {
    value: "Salgadinho PE",
    label: "Salgadinho (PE)",
  },
  {
    value: "Salgado SE",
    label: "Salgado (SE)",
  },
  {
    value: "Salgado Filho PR",
    label: "Salgado Filho (PR)",
  },
  {
    value: "Salgado de Săo Félix PB",
    label: "Salgado de Săo Félix (PB)",
  },
  {
    value: "Salgueiro PE",
    label: "Salgueiro (PE)",
  },
  {
    value: "Salinas MG",
    label: "Salinas (MG)",
  },
  {
    value: "Salinas da Margarida BA",
    label: "Salinas da Margarida (BA)",
  },
  {
    value: "Salinópolis PA",
    label: "Salinópolis (PA)",
  },
  {
    value: "Salitre CE",
    label: "Salitre (CE)",
  },
  {
    value: "Salmourăo SP",
    label: "Salmourăo (SP)",
  },
  {
    value: "Saloá PE",
    label: "Saloá (PE)",
  },
  {
    value: "Saltinho SC",
    label: "Saltinho (SC)",
  },
  {
    value: "Saltinho SP",
    label: "Saltinho (SP)",
  },
  {
    value: "Salto SP",
    label: "Salto (SP)",
  },
  {
    value: "Salto Grande SP",
    label: "Salto Grande (SP)",
  },
  {
    value: "Salto Veloso SC",
    label: "Salto Veloso (SC)",
  },
  {
    value: "Salto da Divisa MG",
    label: "Salto da Divisa (MG)",
  },
  {
    value: "Salto de Pirapora SP",
    label: "Salto de Pirapora (SP)",
  },
  {
    value: "Salto do Céu MT",
    label: "Salto do Céu (MT)",
  },
  {
    value: "Salto do Itararé PR",
    label: "Salto do Itararé (PR)",
  },
  {
    value: "Salto do Jacuí RS",
    label: "Salto do Jacuí (RS)",
  },
  {
    value: "Salto do Lontra PR",
    label: "Salto do Lontra (PR)",
  },
  {
    value: "Salvador BA",
    label: "Salvador (BA)",
  },
  {
    value: "Salvador Das Missơes RS",
    label: "Salvador Das Missơes (RS)",
  },
  {
    value: "Salvador do Sul RS",
    label: "Salvador do Sul (RS)",
  },
  {
    value: "Salvaterra PA",
    label: "Salvaterra (PA)",
  },
  {
    value: "Sambaíba MA",
    label: "Sambaíba (MA)",
  },
  {
    value: "Sampaio TO",
    label: "Sampaio (TO)",
  },
  {
    value: "Sananduva RS",
    label: "Sananduva (RS)",
  },
  {
    value: "Sanclerlândia GO",
    label: "Sanclerlândia (GO)",
  },
  {
    value: "Sandolândia TO",
    label: "Sandolândia (TO)",
  },
  {
    value: "Sandovalina SP",
    label: "Sandovalina (SP)",
  },
  {
    value: "Sangăo SC",
    label: "Sangăo (SC)",
  },
  {
    value: "Sanharó PE",
    label: "Sanharó (PE)",
  },
  {
    value: "Santa Adélia SP",
    label: "Santa Adélia (SP)",
  },
  {
    value: "Santa Albertina SP",
    label: "Santa Albertina (SP)",
  },
  {
    value: "Santa Amélia PR",
    label: "Santa Amélia (PR)",
  },
  {
    value: "Santa Branca SP",
    label: "Santa Branca (SP)",
  },
  {
    value: "Santa Brígida BA",
    label: "Santa Brígida (BA)",
  },
  {
    value: "Santa Bárbara BA",
    label: "Santa Bárbara (BA)",
  },
  {
    value: "Santa Bárbara MG",
    label: "Santa Bárbara (MG)",
  },
  {
    value: "Santa Bárbara D´oeste SP",
    label: "Santa Bárbara D´oeste (SP)",
  },
  {
    value: "Santa Bárbara de Goiás GO",
    label: "Santa Bárbara de Goiás (GO)",
  },
  {
    value: "Santa Bárbara do Leste MG",
    label: "Santa Bárbara do Leste (MG)",
  },
  {
    value: "Santa Bárbara do Monte MG",
    label: "Santa Bárbara do Monte Verde (MG)",
  },
  {
    value: "Santa Bárbara do Pará PA",
    label: "Santa Bárbara do Pará (PA)",
  },
  {
    value: "Santa Bárbara do Sul RS",
    label: "Santa Bárbara do Sul (RS)",
  },
  {
    value: "Santa Bárbara do Tugúr MG",
    label: "Santa Bárbara do Tugúrio (MG)",
  },
  {
    value: "Santa Carmem MT",
    label: "Santa Carmem (MT)",
  },
  {
    value: "Santa Cecília PB",
    label: "Santa Cecília (PB)",
  },
  {
    value: "Santa Cecília SC",
    label: "Santa Cecília (SC)",
  },
  {
    value: "Santa Cecília do Pavăo PR",
    label: "Santa Cecília do Pavăo (PR)",
  },
  {
    value: "Santa Cecília do Sul RS",
    label: "Santa Cecília do Sul (RS)",
  },
  {
    value: "Santa Clara D´oeste SP",
    label: "Santa Clara D´oeste (SP)",
  },
  {
    value: "Santa Clara do Sul RS",
    label: "Santa Clara do Sul (RS)",
  },
  {
    value: "Santa Cruz PB",
    label: "Santa Cruz (PB)",
  },
  {
    value: "Santa Cruz PE",
    label: "Santa Cruz (PE)",
  },
  {
    value: "Santa Cruz RN",
    label: "Santa Cruz (RN)",
  },
  {
    value: "Santa Cruz Cabrália BA",
    label: "Santa Cruz Cabrália (BA)",
  },
  {
    value: "Santa Cruz Das Palmeir SP",
    label: "Santa Cruz Das Palmeiras (SP)",
  },
  {
    value: "Santa Cruz Dos Milagre PI",
    label: "Santa Cruz Dos Milagres (PI)",
  },
  {
    value: "Santa Cruz da Baixa Ve PE",
    label: "Santa Cruz da Baixa Verde (PE)",
  },
  {
    value: "Santa Cruz da Conceiçă SP",
    label: "Santa Cruz da Conceiçăo (SP)",
  },
  {
    value: "Santa Cruz da Esperanç SP",
    label: "Santa Cruz da Esperança (SP)",
  },
  {
    value: "Santa Cruz da Vitória BA",
    label: "Santa Cruz da Vitória (BA)",
  },
  {
    value: "Santa Cruz de Goiás GO",
    label: "Santa Cruz de Goiás (GO)",
  },
  {
    value: "Santa Cruz de Minas MG",
    label: "Santa Cruz de Minas (MG)",
  },
  {
    value: "Santa Cruz de Monte Ca PR",
    label: "Santa Cruz de Monte Castelo (PR)",
  },
  {
    value: "Santa Cruz de Salinas MG",
    label: "Santa Cruz de Salinas (MG)",
  },
  {
    value: "Santa Cruz do Arari PA",
    label: "Santa Cruz do Arari (PA)",
  },
  {
    value: "Santa Cruz do Capibari PE",
    label: "Santa Cruz do Capibaribe (PE)",
  },
  {
    value: "Santa Cruz do Escalvad MG",
    label: "Santa Cruz do Escalvado (MG)",
  },
  {
    value: "Santa Cruz do Piauí PI",
    label: "Santa Cruz do Piauí (PI)",
  },
  {
    value: "Santa Cruz do Rio Pard SP",
    label: "Santa Cruz do Rio Pardo (SP)",
  },
  {
    value: "Santa Cruz do Sul RS",
    label: "Santa Cruz do Sul (RS)",
  },
  {
    value: "Santa Cruz do Xingu MT",
    label: "Santa Cruz do Xingu (MT)",
  },
  {
    value: "Santa Efigênia de Mina MG",
    label: "Santa Efigênia de Minas (MG)",
  },
  {
    value: "Santa Ernestina SP",
    label: "Santa Ernestina (SP)",
  },
  {
    value: "Santa Filomena PE",
    label: "Santa Filomena (PE)",
  },
  {
    value: "Santa Filomena PI",
    label: "Santa Filomena (PI)",
  },
  {
    value: "Santa Filomena do Mara MA",
    label: "Santa Filomena do Maranhăo (MA)",
  },
  {
    value: "Santa Gertrudes SP",
    label: "Santa Gertrudes (SP)",
  },
  {
    value: "Santa Helena MA",
    label: "Santa Helena (MA)",
  },
  {
    value: "Santa Helena PB",
    label: "Santa Helena (PB)",
  },
  {
    value: "Santa Helena PR",
    label: "Santa Helena (PR)",
  },
  {
    value: "Santa Helena SC",
    label: "Santa Helena (SC)",
  },
  {
    value: "Santa Helena de Goiás GO",
    label: "Santa Helena de Goiás (GO)",
  },
  {
    value: "Santa Helena de Minas MG",
    label: "Santa Helena de Minas (MG)",
  },
  {
    value: "Santa Inês BA",
    label: "Santa Inês (BA)",
  },
  {
    value: "Santa Inês MA",
    label: "Santa Inês (MA)",
  },
  {
    value: "Santa Inês PB",
    label: "Santa Inês (PB)",
  },
  {
    value: "Santa Inês PR",
    label: "Santa Inês (PR)",
  },
  {
    value: "Santa Isabel GO",
    label: "Santa Isabel (GO)",
  },
  {
    value: "Santa Isabel SP",
    label: "Santa Isabel (SP)",
  },
  {
    value: "Santa Isabel do Ivaí PR",
    label: "Santa Isabel do Ivaí (PR)",
  },
  {
    value: "Santa Isabel do Pará PA",
    label: "Santa Isabel do Pará (PA)",
  },
  {
    value: "Santa Isabel do Rio Ne AM",
    label: "Santa Isabel do Rio Negro (AM)",
  },
  {
    value: "Santa Izabel do Oeste PR",
    label: "Santa Izabel do Oeste (PR)",
  },
  {
    value: "Santa Juliana MG",
    label: "Santa Juliana (MG)",
  },
  {
    value: "Santa Leopoldina ES",
    label: "Santa Leopoldina (ES)",
  },
  {
    value: "Santa Luz PI",
    label: "Santa Luz (PI)",
  },
  {
    value: "Santa Luzia BA",
    label: "Santa Luzia (BA)",
  },
  {
    value: "Santa Luzia MA",
    label: "Santa Luzia (MA)",
  },
  {
    value: "Santa Luzia MG",
    label: "Santa Luzia (MG)",
  },
  {
    value: "Santa Luzia PB",
    label: "Santa Luzia (PB)",
  },
  {
    value: "Santa Luzia D´oeste RO",
    label: "Santa Luzia D´oeste (RO)",
  },
  {
    value: "Santa Luzia do Itanhy SE",
    label: "Santa Luzia do Itanhy (SE)",
  },
  {
    value: "Santa Luzia do Norte AL",
    label: "Santa Luzia do Norte (AL)",
  },
  {
    value: "Santa Luzia do Paruá MA",
    label: "Santa Luzia do Paruá (MA)",
  },
  {
    value: "Santa Luzia do Pará PA",
    label: "Santa Luzia do Pará (PA)",
  },
  {
    value: "Santa Lúcia PR",
    label: "Santa Lúcia (PR)",
  },
  {
    value: "Santa Lúcia SP",
    label: "Santa Lúcia (SP)",
  },
  {
    value: "Santa Margarida MG",
    label: "Santa Margarida (MG)",
  },
  {
    value: "Santa Margarida do Sul RS",
    label: "Santa Margarida do Sul (RS)",
  },
  {
    value: "Santa Maria RN",
    label: "Santa Maria (RN)",
  },
  {
    value: "Santa Maria RS",
    label: "Santa Maria (RS)",
  },
  {
    value: "Santa Maria Das Barrei PA",
    label: "Santa Maria Das Barreiras (PA)",
  },
  {
    value: "Santa Maria Madalena RJ",
    label: "Santa Maria Madalena (RJ)",
  },
  {
    value: "Santa Maria da Boa Vis PE",
    label: "Santa Maria da Boa Vista (PE)",
  },
  {
    value: "Santa Maria da Serra SP",
    label: "Santa Maria da Serra (SP)",
  },
  {
    value: "Santa Maria da Vitória BA",
    label: "Santa Maria da Vitória (BA)",
  },
  {
    value: "Santa Maria de Itabira MG",
    label: "Santa Maria de Itabira (MG)",
  },
  {
    value: "Santa Maria de Jetibá ES",
    label: "Santa Maria de Jetibá (ES)",
  },
  {
    value: "Santa Maria do Cambucá PE",
    label: "Santa Maria do Cambucá (PE)",
  },
  {
    value: "Santa Maria do Herval RS",
    label: "Santa Maria do Herval (RS)",
  },
  {
    value: "Santa Maria do Oeste PR",
    label: "Santa Maria do Oeste (PR)",
  },
  {
    value: "Santa Maria do Pará PA",
    label: "Santa Maria do Pará (PA)",
  },
  {
    value: "Santa Maria do Salto MG",
    label: "Santa Maria do Salto (MG)",
  },
  {
    value: "Santa Maria do Suaçuí MG",
    label: "Santa Maria do Suaçuí (MG)",
  },
  {
    value: "Santa Maria do Tocanti TO",
    label: "Santa Maria do Tocantins (TO)",
  },
  {
    value: "Santa Mariana PR",
    label: "Santa Mariana (PR)",
  },
  {
    value: "Santa Mercedes SP",
    label: "Santa Mercedes (SP)",
  },
  {
    value: "Santa Mônica PR",
    label: "Santa Mônica (PR)",
  },
  {
    value: "Santa Quitéria CE",
    label: "Santa Quitéria (CE)",
  },
  {
    value: "Santa Quitéria do Mara MA",
    label: "Santa Quitéria do Maranhăo (MA)",
  },
  {
    value: "Santa Rita MA",
    label: "Santa Rita (MA)",
  },
  {
    value: "Santa Rita PB",
    label: "Santa Rita (PB)",
  },
  {
    value: "Santa Rita D´oeste SP",
    label: "Santa Rita D´oeste (SP)",
  },
  {
    value: "Santa Rita de Caldas MG",
    label: "Santa Rita de Caldas (MG)",
  },
  {
    value: "Santa Rita de Cássia BA",
    label: "Santa Rita de Cássia (BA)",
  },
  {
    value: "Santa Rita de Ibitipoc MG",
    label: "Santa Rita de Ibitipoca (MG)",
  },
  {
    value: "Santa Rita de Jacuting MG",
    label: "Santa Rita de Jacutinga (MG)",
  },
  {
    value: "Santa Rita de Minas MG",
    label: "Santa Rita de Minas (MG)",
  },
  {
    value: "Santa Rita do Araguaia GO",
    label: "Santa Rita do Araguaia (GO)",
  },
  {
    value: "Santa Rita do Itueto MG",
    label: "Santa Rita do Itueto (MG)",
  },
  {
    value: "Santa Rita do Novo Des GO",
    label: "Santa Rita do Novo Destino (GO)",
  },
  {
    value: "Santa Rita do Pardo MS",
    label: "Santa Rita do Pardo (MS)",
  },
  {
    value: "Santa Rita do Passa Qu SP",
    label: "Santa Rita do Passa Quatro (SP)",
  },
  {
    value: "Santa Rita do Sapucaí MG",
    label: "Santa Rita do Sapucaí (MG)",
  },
  {
    value: "Santa Rita do Tocantin TO",
    label: "Santa Rita do Tocantins (TO)",
  },
  {
    value: "Santa Rita do Trivelat MT",
    label: "Santa Rita do Trivelato (MT)",
  },
  {
    value: "Santa Rosa RS",
    label: "Santa Rosa (RS)",
  },
  {
    value: "Santa Rosa da Serra MG",
    label: "Santa Rosa da Serra (MG)",
  },
  {
    value: "Santa Rosa de Goiás GO",
    label: "Santa Rosa de Goiás (GO)",
  },
  {
    value: "Santa Rosa de Lima SC",
    label: "Santa Rosa de Lima (SC)",
  },
  {
    value: "Santa Rosa de Lima SE",
    label: "Santa Rosa de Lima (SE)",
  },
  {
    value: "Santa Rosa de Viterbo SP",
    label: "Santa Rosa de Viterbo (SP)",
  },
  {
    value: "Santa Rosa do Piauí PI",
    label: "Santa Rosa do Piauí (PI)",
  },
  {
    value: "Santa Rosa do Purus AC",
    label: "Santa Rosa do Purus (AC)",
  },
  {
    value: "Santa Rosa do Sul SC",
    label: "Santa Rosa do Sul (SC)",
  },
  {
    value: "Santa Rosa do Tocantin TO",
    label: "Santa Rosa do Tocantins (TO)",
  },
  {
    value: "Santa Salete SP",
    label: "Santa Salete (SP)",
  },
  {
    value: "Santa Teresa ES",
    label: "Santa Teresa (ES)",
  },
  {
    value: "Santa Teresinha BA",
    label: "Santa Teresinha (BA)",
  },
  {
    value: "Santa Teresinha PB",
    label: "Santa Teresinha (PB)",
  },
  {
    value: "Santa Tereza RS",
    label: "Santa Tereza (RS)",
  },
  {
    value: "Santa Tereza de Goiás GO",
    label: "Santa Tereza de Goiás (GO)",
  },
  {
    value: "Santa Tereza do Oeste PR",
    label: "Santa Tereza do Oeste (PR)",
  },
  {
    value: "Santa Tereza do Tocant TO",
    label: "Santa Tereza do Tocantins (TO)",
  },
  {
    value: "Santa Terezinha MT",
    label: "Santa Terezinha (MT)",
  },
  {
    value: "Santa Terezinha PE",
    label: "Santa Terezinha (PE)",
  },
  {
    value: "Santa Terezinha SC",
    label: "Santa Terezinha (SC)",
  },
  {
    value: "Santa Terezinha de Goi GO",
    label: "Santa Terezinha de Goiás (GO)",
  },
  {
    value: "Santa Terezinha de Ita PR",
    label: "Santa Terezinha de Itaipu (PR)",
  },
  {
    value: "Santa Terezinha do Pro SC",
    label: "Santa Terezinha do Progresso (SC)",
  },
  {
    value: "Santa Terezinha do Toc TO",
    label: "Santa Terezinha do Tocantins (TO)",
  },
  {
    value: "Santa Vitória MG",
    label: "Santa Vitória (MG)",
  },
  {
    value: "Santa Vitória do Palma RS",
    label: "Santa Vitória do Palmar (RS)",
  },
  {
    value: "Santa fé PR",
    label: "Santa fé (PR)",
  },
  {
    value: "Santa fé de Goiás GO",
    label: "Santa fé de Goiás (GO)",
  },
  {
    value: "Santa fé de Minas MG",
    label: "Santa fé de Minas (MG)",
  },
  {
    value: "Santa fé do Araguaia TO",
    label: "Santa fé do Araguaia (TO)",
  },
  {
    value: "Santa fé do Sul SP",
    label: "Santa fé do Sul (SP)",
  },
  {
    value: "Santaluz BA",
    label: "Santaluz (BA)",
  },
  {
    value: "Santana AP",
    label: "Santana (AP)",
  },
  {
    value: "Santana BA",
    label: "Santana (BA)",
  },
  {
    value: "Santana Dos Garrotes PB",
    label: "Santana Dos Garrotes (PB)",
  },
  {
    value: "Santana Dos Montes MG",
    label: "Santana Dos Montes (MG)",
  },
  {
    value: "Santana da Boa Vista RS",
    label: "Santana da Boa Vista (RS)",
  },
  {
    value: "Santana da Ponte Pensa SP",
    label: "Santana da Ponte Pensa (SP)",
  },
  {
    value: "Santana da Vargem MG",
    label: "Santana da Vargem (MG)",
  },
  {
    value: "Santana de Cataguases MG",
    label: "Santana de Cataguases (MG)",
  },
  {
    value: "Santana de Mangueira PB",
    label: "Santana de Mangueira (PB)",
  },
  {
    value: "Santana de Parnaíba SP",
    label: "Santana de Parnaíba (SP)",
  },
  {
    value: "Santana de Pirapama MG",
    label: "Santana de Pirapama (MG)",
  },
  {
    value: "Santana do Acaraú CE",
    label: "Santana do Acaraú (CE)",
  },
  {
    value: "Santana do Araguaia PA",
    label: "Santana do Araguaia (PA)",
  },
  {
    value: "Santana do Cariri CE",
    label: "Santana do Cariri (CE)",
  },
  {
    value: "Santana do Deserto MG",
    label: "Santana do Deserto (MG)",
  },
  {
    value: "Santana do Garambéu MG",
    label: "Santana do Garambéu (MG)",
  },
  {
    value: "Santana do Ipanema AL",
    label: "Santana do Ipanema (AL)",
  },
  {
    value: "Santana do Itararé PR",
    label: "Santana do Itararé (PR)",
  },
  {
    value: "Santana do Jacaré MG",
    label: "Santana do Jacaré (MG)",
  },
  {
    value: "Santana do Livramento RS",
    label: "Santana do Livramento (RS)",
  },
  {
    value: "Santana do Manhuaçu MG",
    label: "Santana do Manhuaçu (MG)",
  },
  {
    value: "Santana do Maranhăo MA",
    label: "Santana do Maranhăo (MA)",
  },
  {
    value: "Santana do Matos RN",
    label: "Santana do Matos (RN)",
  },
  {
    value: "Santana do Mundaú AL",
    label: "Santana do Mundaú (AL)",
  },
  {
    value: "Santana do Paraíso MG",
    label: "Santana do Paraíso (MG)",
  },
  {
    value: "Santana do Piauí PI",
    label: "Santana do Piauí (PI)",
  },
  {
    value: "Santana do Riacho MG",
    label: "Santana do Riacho (MG)",
  },
  {
    value: "Santana do Seridó RN",
    label: "Santana do Seridó (RN)",
  },
  {
    value: "Santana do Săo Francis SE",
    label: "Santana do Săo Francisco (SE)",
  },
  {
    value: "Santanópolis BA",
    label: "Santanópolis (BA)",
  },
  {
    value: "Santarém PA",
    label: "Santarém (PA)",
  },
  {
    value: "Santarém PB",
    label: "Santarém (PB)",
  },
  {
    value: "Santarém Novo PA",
    label: "Santarém Novo (PA)",
  },
  {
    value: "Santiago RS",
    label: "Santiago (RS)",
  },
  {
    value: "Santiago do Sul SC",
    label: "Santiago do Sul (SC)",
  },
  {
    value: "Santo Afonso MT",
    label: "Santo Afonso (MT)",
  },
  {
    value: "Santo Amaro BA",
    label: "Santo Amaro (BA)",
  },
  {
    value: "Santo Amaro Das Brotas SE",
    label: "Santo Amaro Das Brotas (SE)",
  },
  {
    value: "Santo Amaro da Imperat SC",
    label: "Santo Amaro da Imperatriz (SC)",
  },
  {
    value: "Santo Amaro do Maranhă MA",
    label: "Santo Amaro do Maranhăo (MA)",
  },
  {
    value: "Santo Anastácio SP",
    label: "Santo Anastácio (SP)",
  },
  {
    value: "Santo André PB",
    label: "Santo André (PB)",
  },
  {
    value: "Santo André SP",
    label: "Santo André (SP)",
  },
  {
    value: "Santo Antônio RN",
    label: "Santo Antônio (RN)",
  },
  {
    value: "Santo Antônio Das Miss RS",
    label: "Santo Antônio Das Missơes (RS)",
  },
  {
    value: "Santo Antônio Dos Lope MA",
    label: "Santo Antônio Dos Lopes (MA)",
  },
  {
    value: "Santo Antônio Dos Mila PI",
    label: "Santo Antônio Dos Milagres (PI)",
  },
  {
    value: "Santo Antônio da Alegr SP",
    label: "Santo Antônio da Alegria (SP)",
  },
  {
    value: "Santo Antônio da Barra GO",
    label: "Santo Antônio da Barra (GO)",
  },
  {
    value: "Santo Antônio da Patru RS",
    label: "Santo Antônio da Patrulha (RS)",
  },
  {
    value: "Santo Antônio da Plati PR",
    label: "Santo Antônio da Platina (PR)",
  },
  {
    value: "Santo Antônio de Goiás GO",
    label: "Santo Antônio de Goiás (GO)",
  },
  {
    value: "Santo Antônio de Jesus BA",
    label: "Santo Antônio de Jesus (BA)",
  },
  {
    value: "Santo Antônio de Lisbo PI",
    label: "Santo Antônio de Lisboa (PI)",
  },
  {
    value: "Santo Antônio de Posse SP",
    label: "Santo Antônio de Posse (SP)",
  },
  {
    value: "Santo Antônio de Pádua RJ",
    label: "Santo Antônio de Pádua (RJ)",
  },
  {
    value: "Santo Antônio do Ampar MG",
    label: "Santo Antônio do Amparo (MG)",
  },
  {
    value: "Santo Antônio do Araca SP",
    label: "Santo Antônio do Aracanguá (SP)",
  },
  {
    value: "Santo Antônio do Avent MG",
    label: "Santo Antônio do Aventureiro (MG)",
  },
  {
    value: "Santo Antônio do Caiuá PR",
    label: "Santo Antônio do Caiuá (PR)",
  },
  {
    value: "Santo Antônio do Desco GO",
    label: "Santo Antônio do Descoberto (GO)",
  },
  {
    value: "Santo Antônio do Grama MG",
    label: "Santo Antônio do Grama (MG)",
  },
  {
    value: "Santo Antônio do Itamb MG",
    label: "Santo Antônio do Itambé (MG)",
  },
  {
    value: "Santo Antônio do Içá AM",
    label: "Santo Antônio do Içá (AM)",
  },
  {
    value: "Santo Antônio do Jacin MG",
    label: "Santo Antônio do Jacinto (MG)",
  },
  {
    value: "Santo Antônio do Jardi SP",
    label: "Santo Antônio do Jardim (SP)",
  },
  {
    value: "Santo Antônio do Leste MT",
    label: "Santo Antônio do Leste (MT)",
  },
  {
    value: "Santo Antônio do Lever MT",
    label: "Santo Antônio do Leverger (MT)",
  },
  {
    value: "Santo Antônio do Monte MG",
    label: "Santo Antônio do Monte (MG)",
  },
  {
    value: "Santo Antônio do Palma RS",
    label: "Santo Antônio do Palma (RS)",
  },
  {
    value: "Santo Antônio do Paraí PR",
    label: "Santo Antônio do Paraíso (PR)",
  },
  {
    value: "Santo Antônio do Pinha SP",
    label: "Santo Antônio do Pinhal (SP)",
  },
  {
    value: "Santo Antônio do Plana RS",
    label: "Santo Antônio do Planalto (RS)",
  },
  {
    value: "Santo Antônio do Retir MG",
    label: "Santo Antônio do Retiro (MG)",
  },
  {
    value: "Santo Antônio do Rio A MG",
    label: "Santo Antônio do Rio Abaixo (MG)",
  },
  {
    value: "Santo Antônio do Sudoe PR",
    label: "Santo Antônio do Sudoeste (PR)",
  },
  {
    value: "Santo Antônio do Tauá PA",
    label: "Santo Antônio do Tauá (PA)",
  },
  {
    value: "Santo Augusto RS",
    label: "Santo Augusto (RS)",
  },
  {
    value: "Santo Cristo RS",
    label: "Santo Cristo (RS)",
  },
  {
    value: "Santo Estêvăo BA",
    label: "Santo Estêvăo (BA)",
  },
  {
    value: "Santo Expedito SP",
    label: "Santo Expedito (SP)",
  },
  {
    value: "Santo Expedito do Sul RS",
    label: "Santo Expedito do Sul (RS)",
  },
  {
    value: "Santo Hipólito MG",
    label: "Santo Hipólito (MG)",
  },
  {
    value: "Santo Inácio PR",
    label: "Santo Inácio (PR)",
  },
  {
    value: "Santo Inácio do Piauí PI",
    label: "Santo Inácio do Piauí (PI)",
  },
  {
    value: "Santo Ângelo RS",
    label: "Santo Ângelo (RS)",
  },
  {
    value: "Santos SP",
    label: "Santos (SP)",
  },
  {
    value: "Santos Dumont MG",
    label: "Santos Dumont (MG)",
  },
  {
    value: "Santópolis do Aguapeí SP",
    label: "Santópolis do Aguapeí (SP)",
  },
  {
    value: "Sapeaçu BA",
    label: "Sapeaçu (BA)",
  },
  {
    value: "Sapezal MT",
    label: "Sapezal (MT)",
  },
  {
    value: "Sapiranga RS",
    label: "Sapiranga (RS)",
  },
  {
    value: "Sapopema PR",
    label: "Sapopema (PR)",
  },
  {
    value: "Sapucaia PA",
    label: "Sapucaia (PA)",
  },
  {
    value: "Sapucaia RJ",
    label: "Sapucaia (RJ)",
  },
  {
    value: "Sapucaia do Sul RS",
    label: "Sapucaia do Sul (RS)",
  },
  {
    value: "Sapucaí-mirim MG",
    label: "Sapucaí-mirim (MG)",
  },
  {
    value: "Sapé PB",
    label: "Sapé (PB)",
  },
  {
    value: "Saquarema RJ",
    label: "Saquarema (RJ)",
  },
  {
    value: "Sarandi PR",
    label: "Sarandi (PR)",
  },
  {
    value: "Sarandi RS",
    label: "Sarandi (RS)",
  },
  {
    value: "Sarapuí SP",
    label: "Sarapuí (SP)",
  },
  {
    value: "Sardoá MG",
    label: "Sardoá (MG)",
  },
  {
    value: "Sarutaiá SP",
    label: "Sarutaiá (SP)",
  },
  {
    value: "Sarzedo MG",
    label: "Sarzedo (MG)",
  },
  {
    value: "Satuba AL",
    label: "Satuba (AL)",
  },
  {
    value: "Satubinha MA",
    label: "Satubinha (MA)",
  },
  {
    value: "Saubara BA",
    label: "Saubara (BA)",
  },
  {
    value: "Saudade do Iguaçu PR",
    label: "Saudade do Iguaçu (PR)",
  },
  {
    value: "Saudades SC",
    label: "Saudades (SC)",
  },
  {
    value: "Saúde BA",
    label: "Saúde (BA)",
  },
  {
    value: "Schroeder SC",
    label: "Schroeder (SC)",
  },
  {
    value: "Seabra BA",
    label: "Seabra (BA)",
  },
  {
    value: "Seara SC",
    label: "Seara (SC)",
  },
  {
    value: "Sebastianópolis do Sul SP",
    label: "Sebastianópolis do Sul (SP)",
  },
  {
    value: "Sebastiăo Barros PI",
    label: "Sebastiăo Barros (PI)",
  },
  {
    value: "Sebastiăo Laranjeiras BA",
    label: "Sebastiăo Laranjeiras (BA)",
  },
  {
    value: "Sebastiăo Leal PI",
    label: "Sebastiăo Leal (PI)",
  },
  {
    value: "Seberi RS",
    label: "Seberi (RS)",
  },
  {
    value: "Sede Nova RS",
    label: "Sede Nova (RS)",
  },
  {
    value: "Segredo RS",
    label: "Segredo (RS)",
  },
  {
    value: "Selbach RS",
    label: "Selbach (RS)",
  },
  {
    value: "Selvíria MS",
    label: "Selvíria (MS)",
  },
  {
    value: "Sem-peixe MG",
    label: "Sem-peixe (MG)",
  },
  {
    value: "Sena Madureira AC",
    label: "Sena Madureira (AC)",
  },
  {
    value: "Senador Alexandre Cost MA",
    label: "Senador Alexandre Costa (MA)",
  },
  {
    value: "Senador Amaral MG",
    label: "Senador Amaral (MG)",
  },
  {
    value: "Senador Canedo GO",
    label: "Senador Canedo (GO)",
  },
  {
    value: "Senador Cortes MG",
    label: "Senador Cortes (MG)",
  },
  {
    value: "Senador Elói de Souza RN",
    label: "Senador Elói de Souza (RN)",
  },
  {
    value: "Senador Firmino MG",
    label: "Senador Firmino (MG)",
  },
  {
    value: "Senador Georgino Aveli RN",
    label: "Senador Georgino Avelino (RN)",
  },
  {
    value: "Senador Guiomard AC",
    label: "Senador Guiomard (AC)",
  },
  {
    value: "Senador José Bento MG",
    label: "Senador José Bento (MG)",
  },
  {
    value: "Senador José Porfírio PA",
    label: "Senador José Porfírio (PA)",
  },
  {
    value: "Senador Modestino Gonç MG",
    label: "Senador Modestino Gonçalves (MG)",
  },
  {
    value: "Senador Pompeu CE",
    label: "Senador Pompeu (CE)",
  },
  {
    value: "Senador Rui Palmeira AL",
    label: "Senador Rui Palmeira (AL)",
  },
  {
    value: "Senador Salgado Filho RS",
    label: "Senador Salgado Filho (RS)",
  },
  {
    value: "Senador la Rocque MA",
    label: "Senador la Rocque (MA)",
  },
  {
    value: "Senador sá CE",
    label: "Senador sá (CE)",
  },
  {
    value: "Sengés PR",
    label: "Sengés (PR)",
  },
  {
    value: "Senhor do Bonfim BA",
    label: "Senhor do Bonfim (BA)",
  },
  {
    value: "Senhora Dos Remédios MG",
    label: "Senhora Dos Remédios (MG)",
  },
  {
    value: "Senhora de Oliveira MG",
    label: "Senhora de Oliveira (MG)",
  },
  {
    value: "Senhora do Porto MG",
    label: "Senhora do Porto (MG)",
  },
  {
    value: "Sentinela do Sul RS",
    label: "Sentinela do Sul (RS)",
  },
  {
    value: "Sento sé BA",
    label: "Sento sé (BA)",
  },
  {
    value: "Serafina Corrêa RS",
    label: "Serafina Corrêa (RS)",
  },
  {
    value: "Sericita MG",
    label: "Sericita (MG)",
  },
  {
    value: "Seridó PB",
    label: "Seridó (PB)",
  },
  {
    value: "Seringueiras RO",
    label: "Seringueiras (RO)",
  },
  {
    value: "Seritinga MG",
    label: "Seritinga (MG)",
  },
  {
    value: "Seropédica RJ",
    label: "Seropédica (RJ)",
  },
  {
    value: "Serra ES",
    label: "Serra (ES)",
  },
  {
    value: "Serra Alta SC",
    label: "Serra Alta (SC)",
  },
  {
    value: "Serra Azul SP",
    label: "Serra Azul (SP)",
  },
  {
    value: "Serra Azul de Minas MG",
    label: "Serra Azul de Minas (MG)",
  },
  {
    value: "Serra Branca PB",
    label: "Serra Branca (PB)",
  },
  {
    value: "Serra Dos Aimorés MG",
    label: "Serra Dos Aimorés (MG)",
  },
  {
    value: "Serra Dourada BA",
    label: "Serra Dourada (BA)",
  },
  {
    value: "Serra Grande PB",
    label: "Serra Grande (PB)",
  },
  {
    value: "Serra Negra SP",
    label: "Serra Negra (SP)",
  },
  {
    value: "Serra Negra do Norte RN",
    label: "Serra Negra do Norte (RN)",
  },
  {
    value: "Serra Nova Dourada MT",
    label: "Serra Nova Dourada (MT)",
  },
  {
    value: "Serra Preta BA",
    label: "Serra Preta (BA)",
  },
  {
    value: "Serra Redonda PB",
    label: "Serra Redonda (PB)",
  },
  {
    value: "Serra Talhada PE",
    label: "Serra Talhada (PE)",
  },
  {
    value: "Serra da Raiz PB",
    label: "Serra da Raiz (PB)",
  },
  {
    value: "Serra da Saudade MG",
    label: "Serra da Saudade (MG)",
  },
  {
    value: "Serra de Săo Bento RN",
    label: "Serra de Săo Bento (RN)",
  },
  {
    value: "Serra do Mel RN",
    label: "Serra do Mel (RN)",
  },
  {
    value: "Serra do Navio AP",
    label: "Serra do Navio (AP)",
  },
  {
    value: "Serra do Ramalho BA",
    label: "Serra do Ramalho (BA)",
  },
  {
    value: "Serra do Salitre MG",
    label: "Serra do Salitre (MG)",
  },
  {
    value: "Serrana SP",
    label: "Serrana (SP)",
  },
  {
    value: "Serrania MG",
    label: "Serrania (MG)",
  },
  {
    value: "Serrano do Maranhăo MA",
    label: "Serrano do Maranhăo (MA)",
  },
  {
    value: "Serranos MG",
    label: "Serranos (MG)",
  },
  {
    value: "Serranópolis GO",
    label: "Serranópolis (GO)",
  },
  {
    value: "Serranópolis de Minas MG",
    label: "Serranópolis de Minas (MG)",
  },
  {
    value: "Serranópolis do Iguaçu PR",
    label: "Serranópolis do Iguaçu (PR)",
  },
  {
    value: "Serraria PB",
    label: "Serraria (PB)",
  },
  {
    value: "Serrinha BA",
    label: "Serrinha (BA)",
  },
  {
    value: "Serrinha RN",
    label: "Serrinha (RN)",
  },
  {
    value: "Serrinha Dos Pintos RN",
    label: "Serrinha Dos Pintos (RN)",
  },
  {
    value: "Serrita PE",
    label: "Serrita (PE)",
  },
  {
    value: "Serro MG",
    label: "Serro (MG)",
  },
  {
    value: "Serrolândia BA",
    label: "Serrolândia (BA)",
  },
  {
    value: "Sertaneja PR",
    label: "Sertaneja (PR)",
  },
  {
    value: "Sertanópolis PR",
    label: "Sertanópolis (PR)",
  },
  {
    value: "Sertânia PE",
    label: "Sertânia (PE)",
  },
  {
    value: "Sertăo RS",
    label: "Sertăo (RS)",
  },
  {
    value: "Sertăo Santana RS",
    label: "Sertăo Santana (RS)",
  },
  {
    value: "Sertăozinho PB",
    label: "Sertăozinho (PB)",
  },
  {
    value: "Sertăozinho SP",
    label: "Sertăozinho (SP)",
  },
  {
    value: "Sete Barras SP",
    label: "Sete Barras (SP)",
  },
  {
    value: "Sete Lagoas MG",
    label: "Sete Lagoas (MG)",
  },
  {
    value: "Sete Quedas MS",
    label: "Sete Quedas (MS)",
  },
  {
    value: "Sete de Setembro RS",
    label: "Sete de Setembro (RS)",
  },
  {
    value: "Setubinha MG",
    label: "Setubinha (MG)",
  },
  {
    value: "Severiano Melo RN",
    label: "Severiano Melo (RN)",
  },
  {
    value: "Severiano de Almeida RS",
    label: "Severiano de Almeida (RS)",
  },
  {
    value: "Severínia SP",
    label: "Severínia (SP)",
  },
  {
    value: "Siderópolis SC",
    label: "Siderópolis (SC)",
  },
  {
    value: "Sidrolândia MS",
    label: "Sidrolândia (MS)",
  },
  {
    value: "Sigefredo Pacheco PI",
    label: "Sigefredo Pacheco (PI)",
  },
  {
    value: "Silva Jardim RJ",
    label: "Silva Jardim (RJ)",
  },
  {
    value: "Silvanópolis TO",
    label: "Silvanópolis (TO)",
  },
  {
    value: "Silveira Martins RS",
    label: "Silveira Martins (RS)",
  },
  {
    value: "Silveiras SP",
    label: "Silveiras (SP)",
  },
  {
    value: "Silveirânia MG",
    label: "Silveirânia (MG)",
  },
  {
    value: "Silves AM",
    label: "Silves (AM)",
  },
  {
    value: "Silvianópolis MG",
    label: "Silvianópolis (MG)",
  },
  {
    value: "Silvânia GO",
    label: "Silvânia (GO)",
  },
  {
    value: "Simolândia GO",
    label: "Simolândia (GO)",
  },
  {
    value: "Simonésia MG",
    label: "Simonésia (MG)",
  },
  {
    value: "Simplício Mendes PI",
    label: "Simplício Mendes (PI)",
  },
  {
    value: "Simăo Dias SE",
    label: "Simăo Dias (SE)",
  },
  {
    value: "Simăo Pereira MG",
    label: "Simăo Pereira (MG)",
  },
  {
    value: "Simơes PI",
    label: "Simơes (PI)",
  },
  {
    value: "Simơes Filho BA",
    label: "Simơes Filho (BA)",
  },
  {
    value: "Sinimbu RS",
    label: "Sinimbu (RS)",
  },
  {
    value: "Sinop MT",
    label: "Sinop (MT)",
  },
  {
    value: "Siqueira Campos PR",
    label: "Siqueira Campos (PR)",
  },
  {
    value: "Sirinhaém PE",
    label: "Sirinhaém (PE)",
  },
  {
    value: "Siriri SE",
    label: "Siriri (SE)",
  },
  {
    value: "Sobradinho BA",
    label: "Sobradinho (BA)",
  },
  {
    value: "Sobradinho RS",
    label: "Sobradinho (RS)",
  },
  {
    value: "Sobrado PB",
    label: "Sobrado (PB)",
  },
  {
    value: "Sobral CE",
    label: "Sobral (CE)",
  },
  {
    value: "Sobrália MG",
    label: "Sobrália (MG)",
  },
  {
    value: "Socorro SP",
    label: "Socorro (SP)",
  },
  {
    value: "Socorro do Piauí PI",
    label: "Socorro do Piauí (PI)",
  },
  {
    value: "Soledade PB",
    label: "Soledade (PB)",
  },
  {
    value: "Soledade RS",
    label: "Soledade (RS)",
  },
  {
    value: "Soledade de Minas MG",
    label: "Soledade de Minas (MG)",
  },
  {
    value: "Solidăo PE",
    label: "Solidăo (PE)",
  },
  {
    value: "Solonópole CE",
    label: "Solonópole (CE)",
  },
  {
    value: "Solânea PB",
    label: "Solânea (PB)",
  },
  {
    value: "Sombrio SC",
    label: "Sombrio (SC)",
  },
  {
    value: "Sonora MS",
    label: "Sonora (MS)",
  },
  {
    value: "Sooretama ES",
    label: "Sooretama (ES)",
  },
  {
    value: "Sorocaba SP",
    label: "Sorocaba (SP)",
  },
  {
    value: "Sorriso MT",
    label: "Sorriso (MT)",
  },
  {
    value: "Sossêgo PB",
    label: "Sossêgo (PB)",
  },
  {
    value: "Soure PA",
    label: "Soure (PA)",
  },
  {
    value: "Sousa PB",
    label: "Sousa (PB)",
  },
  {
    value: "Souto Soares BA",
    label: "Souto Soares (BA)",
  },
  {
    value: "Sucupira TO",
    label: "Sucupira (TO)",
  },
  {
    value: "Sucupira do Norte MA",
    label: "Sucupira do Norte (MA)",
  },
  {
    value: "Sucupira do Riachăo MA",
    label: "Sucupira do Riachăo (MA)",
  },
  {
    value: "Sud Mennucci SP",
    label: "Sud Mennucci (SP)",
  },
  {
    value: "Sul Brasil SC",
    label: "Sul Brasil (SC)",
  },
  {
    value: "Sulina PR",
    label: "Sulina (PR)",
  },
  {
    value: "Sumaré SP",
    label: "Sumaré (SP)",
  },
  {
    value: "Sumidouro RJ",
    label: "Sumidouro (RJ)",
  },
  {
    value: "Sumé PB",
    label: "Sumé (PB)",
  },
  {
    value: "Surubim PE",
    label: "Surubim (PE)",
  },
  {
    value: "Sussuapara PI",
    label: "Sussuapara (PI)",
  },
  {
    value: "Suzano SP",
    label: "Suzano (SP)",
  },
  {
    value: "Suzanápolis SP",
    label: "Suzanápolis (SP)",
  },
  {
    value: "Sátiro Dias BA",
    label: "Sátiro Dias (BA)",
  },
  {
    value: "Sério RS",
    label: "Sério (RS)",
  },
  {
    value: "Sítio D´abadia GO",
    label: "Sítio D´abadia (GO)",
  },
  {
    value: "Sítio Novo MA",
    label: "Sítio Novo (MA)",
  },
  {
    value: "Sítio Novo RN",
    label: "Sítio Novo (RN)",
  },
  {
    value: "Sítio Novo do Tocantin TO",
    label: "Sítio Novo do Tocantins (TO)",
  },
  {
    value: "Sítio do Mato BA",
    label: "Sítio do Mato (BA)",
  },
  {
    value: "Sítio do Quinto BA",
    label: "Sítio do Quinto (BA)",
  },
  {
    value: "Săo Benedito CE",
    label: "Săo Benedito (CE)",
  },
  {
    value: "Săo Benedito do Rio Pr MA",
    label: "Săo Benedito do Rio Preto (MA)",
  },
  {
    value: "Săo Benedito do Sul PE",
    label: "Săo Benedito do Sul (PE)",
  },
  {
    value: "Săo Bentinho PB",
    label: "Săo Bentinho (PB)",
  },
  {
    value: "Săo Bento MA",
    label: "Săo Bento (MA)",
  },
  {
    value: "Săo Bento PB",
    label: "Săo Bento (PB)",
  },
  {
    value: "Săo Bento Abade MG",
    label: "Săo Bento Abade (MG)",
  },
  {
    value: "Săo Bento do Norte RN",
    label: "Săo Bento do Norte (RN)",
  },
  {
    value: "Săo Bento do Sapucaí SP",
    label: "Săo Bento do Sapucaí (SP)",
  },
  {
    value: "Săo Bento do Sul SC",
    label: "Săo Bento do Sul (SC)",
  },
  {
    value: "Săo Bento do Tocantins TO",
    label: "Săo Bento do Tocantins (TO)",
  },
  {
    value: "Săo Bento do Trairí RN",
    label: "Săo Bento do Trairí (RN)",
  },
  {
    value: "Săo Bento do Una PE",
    label: "Săo Bento do Una (PE)",
  },
  {
    value: "Săo Bernardino SC",
    label: "Săo Bernardino (SC)",
  },
  {
    value: "Săo Bernardo MA",
    label: "Săo Bernardo (MA)",
  },
  {
    value: "Săo Bernardo do Campo SP",
    label: "Săo Bernardo do Campo (SP)",
  },
  {
    value: "Săo Bonifácio SC",
    label: "Săo Bonifácio (SC)",
  },
  {
    value: "Săo Borja RS",
    label: "Săo Borja (RS)",
  },
  {
    value: "Săo Braz do Piauí PI",
    label: "Săo Braz do Piauí (PI)",
  },
  {
    value: "Săo Brás AL",
    label: "Săo Brás (AL)",
  },
  {
    value: "Săo Brás do Suaçuí MG",
    label: "Săo Brás do Suaçuí (MG)",
  },
  {
    value: "Săo Caetano de Odivela PA",
    label: "Săo Caetano de Odivelas (PA)",
  },
  {
    value: "Săo Caetano do Sul SP",
    label: "Săo Caetano do Sul (SP)",
  },
  {
    value: "Săo Caitano PE",
    label: "Săo Caitano (PE)",
  },
  {
    value: "Săo Carlos SC",
    label: "Săo Carlos (SC)",
  },
  {
    value: "Săo Carlos SP",
    label: "Săo Carlos (SP)",
  },
  {
    value: "Săo Carlos do Ivaí PR",
    label: "Săo Carlos do Ivaí (PR)",
  },
  {
    value: "Săo Cristovăo do Sul SC",
    label: "Săo Cristovăo do Sul (SC)",
  },
  {
    value: "Săo Cristóvăo SE",
    label: "Săo Cristóvăo (SE)",
  },
  {
    value: "Săo Desidério BA",
    label: "Săo Desidério (BA)",
  },
  {
    value: "Săo Domingos BA",
    label: "Săo Domingos (BA)",
  },
  {
    value: "Săo Domingos GO",
    label: "Săo Domingos (GO)",
  },
  {
    value: "Săo Domingos SC",
    label: "Săo Domingos (SC)",
  },
  {
    value: "Săo Domingos SE",
    label: "Săo Domingos (SE)",
  },
  {
    value: "Săo Domingos Das Dores MG",
    label: "Săo Domingos Das Dores (MG)",
  },
  {
    value: "Săo Domingos de Pombal PB",
    label: "Săo Domingos de Pombal (PB)",
  },
  {
    value: "Săo Domingos do Aragua PA",
    label: "Săo Domingos do Araguaia (PA)",
  },
  {
    value: "Săo Domingos do Azeită MA",
    label: "Săo Domingos do Azeităo (MA)",
  },
  {
    value: "Săo Domingos do Capim PA",
    label: "Săo Domingos do Capim (PA)",
  },
  {
    value: "Săo Domingos do Cariri PB",
    label: "Săo Domingos do Cariri (PB)",
  },
  {
    value: "Săo Domingos do Maranh MA",
    label: "Săo Domingos do Maranhăo (MA)",
  },
  {
    value: "Săo Domingos do Norte ES",
    label: "Săo Domingos do Norte (ES)",
  },
  {
    value: "Săo Domingos do Prata MG",
    label: "Săo Domingos do Prata (MG)",
  },
  {
    value: "Săo Domingos do Sul RS",
    label: "Săo Domingos do Sul (RS)",
  },
  {
    value: "Săo Felipe BA",
    label: "Săo Felipe (BA)",
  },
  {
    value: "Săo Felipe D´oeste RO",
    label: "Săo Felipe D´oeste (RO)",
  },
  {
    value: "Săo Fernando RN",
    label: "Săo Fernando (RN)",
  },
  {
    value: "Săo Fidélis RJ",
    label: "Săo Fidélis (RJ)",
  },
  {
    value: "Săo Francisco MG",
    label: "Săo Francisco (MG)",
  },
  {
    value: "Săo Francisco PB",
    label: "Săo Francisco (PB)",
  },
  {
    value: "Săo Francisco SE",
    label: "Săo Francisco (SE)",
  },
  {
    value: "Săo Francisco SP",
    label: "Săo Francisco (SP)",
  },
  {
    value: "Săo Francisco de Assis RS",
    label: "Săo Francisco de Assis (RS)",
  },
  {
    value: "Săo Francisco de Assis PI",
    label: "Săo Francisco de Assis do Piauí (PI)",
  },
  {
    value: "Săo Francisco de Goiás GO",
    label: "Săo Francisco de Goiás (GO)",
  },
  {
    value: "Săo Francisco de Itaba RJ",
    label: "Săo Francisco de Itabapoana (RJ)",
  },
  {
    value: "Săo Francisco de Paula MG",
    label: "Săo Francisco de Paula (MG)",
  },
  {
    value: "Săo Francisco de Paula RS",
    label: "Săo Francisco de Paula (RS)",
  },
  {
    value: "Săo Francisco de Sales MG",
    label: "Săo Francisco de Sales (MG)",
  },
  {
    value: "Săo Francisco do Brejă MA",
    label: "Săo Francisco do Brejăo (MA)",
  },
  {
    value: "Săo Francisco do Conde BA",
    label: "Săo Francisco do Conde (BA)",
  },
  {
    value: "Săo Francisco do Glóri MG",
    label: "Săo Francisco do Glória (MG)",
  },
  {
    value: "Săo Francisco do Guapo RO",
    label: "Săo Francisco do Guaporé (RO)",
  },
  {
    value: "Săo Francisco do Maran MA",
    label: "Săo Francisco do Maranhăo (MA)",
  },
  {
    value: "Săo Francisco do Oeste RN",
    label: "Săo Francisco do Oeste (RN)",
  },
  {
    value: "Săo Francisco do Pará PA",
    label: "Săo Francisco do Pará (PA)",
  },
  {
    value: "Săo Francisco do Piauí PI",
    label: "Săo Francisco do Piauí (PI)",
  },
  {
    value: "Săo Francisco do Sul SC",
    label: "Săo Francisco do Sul (SC)",
  },
  {
    value: "Săo Félix BA",
    label: "Săo Félix (BA)",
  },
  {
    value: "Săo Félix de Balsas MA",
    label: "Săo Félix de Balsas (MA)",
  },
  {
    value: "Săo Félix de Minas MG",
    label: "Săo Félix de Minas (MG)",
  },
  {
    value: "Săo Félix do Araguaia MT",
    label: "Săo Félix do Araguaia (MT)",
  },
  {
    value: "Săo Félix do Coribe BA",
    label: "Săo Félix do Coribe (BA)",
  },
  {
    value: "Săo Félix do Piauí PI",
    label: "Săo Félix do Piauí (PI)",
  },
  {
    value: "Săo Félix do Tocantins TO",
    label: "Săo Félix do Tocantins (TO)",
  },
  {
    value: "Săo Félix do Xingu PA",
    label: "Săo Félix do Xingu (PA)",
  },
  {
    value: "Săo Gabriel BA",
    label: "Săo Gabriel (BA)",
  },
  {
    value: "Săo Gabriel RS",
    label: "Săo Gabriel (RS)",
  },
  {
    value: "Săo Gabriel da Cachoei AM",
    label: "Săo Gabriel da Cachoeira (AM)",
  },
  {
    value: "Săo Gabriel da Palha ES",
    label: "Săo Gabriel da Palha (ES)",
  },
  {
    value: "Săo Gabriel do Oeste MS",
    label: "Săo Gabriel do Oeste (MS)",
  },
  {
    value: "Săo Geraldo MG",
    label: "Săo Geraldo (MG)",
  },
  {
    value: "Săo Geraldo da Piedade MG",
    label: "Săo Geraldo da Piedade (MG)",
  },
  {
    value: "Săo Geraldo do Araguai PA",
    label: "Săo Geraldo do Araguaia (PA)",
  },
  {
    value: "Săo Geraldo do Baixio MG",
    label: "Săo Geraldo do Baixio (MG)",
  },
  {
    value: "Săo Gonçalo RJ",
    label: "Săo Gonçalo (RJ)",
  },
  {
    value: "Săo Gonçalo Dos Campos BA",
    label: "Săo Gonçalo Dos Campos (BA)",
  },
  {
    value: "Săo Gonçalo do Abaeté MG",
    label: "Săo Gonçalo do Abaeté (MG)",
  },
  {
    value: "Săo Gonçalo do Amarant CE",
    label: "Săo Gonçalo do Amarante (CE)",
  },
  {
    value: "Săo Gonçalo do Amarant RN",
    label: "Săo Gonçalo do Amarante (RN)",
  },
  {
    value: "Săo Gonçalo do Gurguéi PI",
    label: "Săo Gonçalo do Gurguéia (PI)",
  },
  {
    value: "Săo Gonçalo do Pará MG",
    label: "Săo Gonçalo do Pará (MG)",
  },
  {
    value: "Săo Gonçalo do Piauí PI",
    label: "Săo Gonçalo do Piauí (PI)",
  },
  {
    value: "Săo Gonçalo do Rio Aba MG",
    label: "Săo Gonçalo do Rio Abaixo (MG)",
  },
  {
    value: "Săo Gonçalo do Rio Pre MG",
    label: "Săo Gonçalo do Rio Preto (MG)",
  },
  {
    value: "Săo Gonçalo do Sapucaí MG",
    label: "Săo Gonçalo do Sapucaí (MG)",
  },
  {
    value: "Săo Gotardo MG",
    label: "Săo Gotardo (MG)",
  },
  {
    value: "Săo Jerônimo RS",
    label: "Săo Jerônimo (RS)",
  },
  {
    value: "Săo Jerônimo da Serra PR",
    label: "Săo Jerônimo da Serra (PR)",
  },
  {
    value: "Săo Joaquim SC",
    label: "Săo Joaquim (SC)",
  },
  {
    value: "Săo Joaquim da Barra SP",
    label: "Săo Joaquim da Barra (SP)",
  },
  {
    value: "Săo Joaquim de Bicas MG",
    label: "Săo Joaquim de Bicas (MG)",
  },
  {
    value: "Săo Joaquim do Monte PE",
    label: "Săo Joaquim do Monte (PE)",
  },
  {
    value: "Săo Jorge RS",
    label: "Săo Jorge (RS)",
  },
  {
    value: "Săo Jorge D´oeste PR",
    label: "Săo Jorge D´oeste (PR)",
  },
  {
    value: "Săo Jorge do Ivaí PR",
    label: "Săo Jorge do Ivaí (PR)",
  },
  {
    value: "Săo Jorge do Patrocíni PR",
    label: "Săo Jorge do Patrocínio (PR)",
  },
  {
    value: "Săo José SC",
    label: "Săo José (SC)",
  },
  {
    value: "Săo José Das Missơes RS",
    label: "Săo José Das Missơes (RS)",
  },
  {
    value: "Săo José Das Palmeiras PR",
    label: "Săo José Das Palmeiras (PR)",
  },
  {
    value: "Săo José Dos Ausentes RS",
    label: "Săo José Dos Ausentes (RS)",
  },
  {
    value: "Săo José Dos Basílios MA",
    label: "Săo José Dos Basílios (MA)",
  },
  {
    value: "Săo José Dos Campos SP",
    label: "Săo José Dos Campos (SP)",
  },
  {
    value: "Săo José Dos Cordeiros PB",
    label: "Săo José Dos Cordeiros (PB)",
  },
  {
    value: "Săo José Dos Pinhais PR",
    label: "Săo José Dos Pinhais (PR)",
  },
  {
    value: "Săo José Dos Quatro Ma MT",
    label: "Săo José Dos Quatro Marcos (MT)",
  },
  {
    value: "Săo José Dos Ramos PB",
    label: "Săo José Dos Ramos (PB)",
  },
  {
    value: "Săo José da Barra MG",
    label: "Săo José da Barra (MG)",
  },
  {
    value: "Săo José da Bela Vista SP",
    label: "Săo José da Bela Vista (SP)",
  },
  {
    value: "Săo José da Boa Vista PR",
    label: "Săo José da Boa Vista (PR)",
  },
  {
    value: "Săo José da Coroa Gran PE",
    label: "Săo José da Coroa Grande (PE)",
  },
  {
    value: "Săo José da Lagoa Tapa PB",
    label: "Săo José da Lagoa Tapada (PB)",
  },
  {
    value: "Săo José da Laje AL",
    label: "Săo José da Laje (AL)",
  },
  {
    value: "Săo José da Lapa MG",
    label: "Săo José da Lapa (MG)",
  },
  {
    value: "Săo José da Safira MG",
    label: "Săo José da Safira (MG)",
  },
  {
    value: "Săo José da Tapera AL",
    label: "Săo José da Tapera (AL)",
  },
  {
    value: "Săo José da Varginha MG",
    label: "Săo José da Varginha (MG)",
  },
  {
    value: "Săo José da Vitória BA",
    label: "Săo José da Vitória (BA)",
  },
  {
    value: "Săo José de Caiana PB",
    label: "Săo José de Caiana (PB)",
  },
  {
    value: "Săo José de Espinharas PB",
    label: "Săo José de Espinharas (PB)",
  },
  {
    value: "Săo José de Mipibu RN",
    label: "Săo José de Mipibu (RN)",
  },
  {
    value: "Săo José de Piranhas PB",
    label: "Săo José de Piranhas (PB)",
  },
  {
    value: "Săo José de Princesa PB",
    label: "Săo José de Princesa (PB)",
  },
  {
    value: "Săo José de Ribamar MA",
    label: "Săo José de Ribamar (MA)",
  },
  {
    value: "Săo José de Ubá RJ",
    label: "Săo José de Ubá (RJ)",
  },
  {
    value: "Săo José do Alegre MG",
    label: "Săo José do Alegre (MG)",
  },
  {
    value: "Săo José do Barreiro SP",
    label: "Săo José do Barreiro (SP)",
  },
  {
    value: "Săo José do Belmonte PE",
    label: "Săo José do Belmonte (PE)",
  },
  {
    value: "Săo José do Bonfim PB",
    label: "Săo José do Bonfim (PB)",
  },
  {
    value: "Săo José do Brejo do C PB",
    label: "Săo José do Brejo do Cruz (PB)",
  },
  {
    value: "Săo José do Calçado ES",
    label: "Săo José do Calçado (ES)",
  },
  {
    value: "Săo José do Campestre RN",
    label: "Săo José do Campestre (RN)",
  },
  {
    value: "Săo José do Cedro SC",
    label: "Săo José do Cedro (SC)",
  },
  {
    value: "Săo José do Cerrito SC",
    label: "Săo José do Cerrito (SC)",
  },
  {
    value: "Săo José do Divino MG",
    label: "Săo José do Divino (MG)",
  },
  {
    value: "Săo José do Divino PI",
    label: "Săo José do Divino (PI)",
  },
  {
    value: "Săo José do Egito PE",
    label: "Săo José do Egito (PE)",
  },
  {
    value: "Săo José do Goiabal MG",
    label: "Săo José do Goiabal (MG)",
  },
  {
    value: "Săo José do Herval RS",
    label: "Săo José do Herval (RS)",
  },
  {
    value: "Săo José do Hortêncio RS",
    label: "Săo José do Hortêncio (RS)",
  },
  {
    value: "Săo José do Inhacorá RS",
    label: "Săo José do Inhacorá (RS)",
  },
  {
    value: "Săo José do Jacuri MG",
    label: "Săo José do Jacuri (MG)",
  },
  {
    value: "Săo José do Jacuípe BA",
    label: "Săo José do Jacuípe (BA)",
  },
  {
    value: "Săo José do Mantimento MG",
    label: "Săo José do Mantimento (MG)",
  },
  {
    value: "Săo José do Norte RS",
    label: "Săo José do Norte (RS)",
  },
  {
    value: "Săo José do Ouro RS",
    label: "Săo José do Ouro (RS)",
  },
  {
    value: "Săo José do Peixe PI",
    label: "Săo José do Peixe (PI)",
  },
  {
    value: "Săo José do Piauí PI",
    label: "Săo José do Piauí (PI)",
  },
  {
    value: "Săo José do Povo MT",
    label: "Săo José do Povo (MT)",
  },
  {
    value: "Săo José do Rio Claro MT",
    label: "Săo José do Rio Claro (MT)",
  },
  {
    value: "Săo José do Rio Pardo SP",
    label: "Săo José do Rio Pardo (SP)",
  },
  {
    value: "Săo José do Rio Preto SP",
    label: "Săo José do Rio Preto (SP)",
  },
  {
    value: "Săo José do Sabugi PB",
    label: "Săo José do Sabugi (PB)",
  },
  {
    value: "Săo José do Seridó RN",
    label: "Săo José do Seridó (RN)",
  },
  {
    value: "Săo José do Sul RS",
    label: "Săo José do Sul (RS)",
  },
  {
    value: "Săo José do Vale do Ri RJ",
    label: "Săo José do Vale do Rio Preto (RJ)",
  },
  {
    value: "Săo José do Xingu MT",
    label: "Săo José do Xingu (MT)",
  },
  {
    value: "Săo Joăo PE",
    label: "Săo Joăo (PE)",
  },
  {
    value: "Săo Joăo PR",
    label: "Săo Joăo (PR)",
  },
  {
    value: "Săo Joăo Batista MA",
    label: "Săo Joăo Batista (MA)",
  },
  {
    value: "Săo Joăo Batista SC",
    label: "Săo Joăo Batista (SC)",
  },
  {
    value: "Săo Joăo Batista do Gl MG",
    label: "Săo Joăo Batista do Glória (MG)",
  },
  {
    value: "Săo Joăo Das Duas Pont SP",
    label: "Săo Joăo Das Duas Pontes (SP)",
  },
  {
    value: "Săo Joăo Das Missơes MG",
    label: "Săo Joăo Das Missơes (MG)",
  },
  {
    value: "Săo Joăo Del Rei MG",
    label: "Săo Joăo Del Rei (MG)",
  },
  {
    value: "Săo Joăo Dos Patos MA",
    label: "Săo Joăo Dos Patos (MA)",
  },
  {
    value: "Săo Joăo D´aliança GO",
    label: "Săo Joăo D´aliança (GO)",
  },
  {
    value: "Săo Joăo Evangelista MG",
    label: "Săo Joăo Evangelista (MG)",
  },
  {
    value: "Săo Joăo Nepomuceno MG",
    label: "Săo Joăo Nepomuceno (MG)",
  },
  {
    value: "Săo Joăo da Baliza RR",
    label: "Săo Joăo da Baliza (RR)",
  },
  {
    value: "Săo Joăo da Barra RJ",
    label: "Săo Joăo da Barra (RJ)",
  },
  {
    value: "Săo Joăo da Boa Vista SP",
    label: "Săo Joăo da Boa Vista (SP)",
  },
  {
    value: "Săo Joăo da Canabrava PI",
    label: "Săo Joăo da Canabrava (PI)",
  },
  {
    value: "Săo Joăo da Fronteira PI",
    label: "Săo Joăo da Fronteira (PI)",
  },
  {
    value: "Săo Joăo da Lagoa MG",
    label: "Săo Joăo da Lagoa (MG)",
  },
  {
    value: "Săo Joăo da Mata MG",
    label: "Săo Joăo da Mata (MG)",
  },
  {
    value: "Săo Joăo da Paraúna GO",
    label: "Săo Joăo da Paraúna (GO)",
  },
  {
    value: "Săo Joăo da Ponta PA",
    label: "Săo Joăo da Ponta (PA)",
  },
  {
    value: "Săo Joăo da Ponte MG",
    label: "Săo Joăo da Ponte (MG)",
  },
  {
    value: "Săo Joăo da Serra PI",
    label: "Săo Joăo da Serra (PI)",
  },
  {
    value: "Săo Joăo da Urtiga RS",
    label: "Săo Joăo da Urtiga (RS)",
  },
  {
    value: "Săo Joăo da Varjota PI",
    label: "Săo Joăo da Varjota (PI)",
  },
  {
    value: "Săo Joăo de Iracema SP",
    label: "Săo Joăo de Iracema (SP)",
  },
  {
    value: "Săo Joăo de Meriti RJ",
    label: "Săo Joăo de Meriti (RJ)",
  },
  {
    value: "Săo Joăo de Pirabas PA",
    label: "Săo Joăo de Pirabas (PA)",
  },
  {
    value: "Săo Joăo do Araguaia PA",
    label: "Săo Joăo do Araguaia (PA)",
  },
  {
    value: "Săo Joăo do Arraial PI",
    label: "Săo Joăo do Arraial (PI)",
  },
  {
    value: "Săo Joăo do Caiuá PR",
    label: "Săo Joăo do Caiuá (PR)",
  },
  {
    value: "Săo Joăo do Cariri PB",
    label: "Săo Joăo do Cariri (PB)",
  },
  {
    value: "Săo Joăo do Carú MA",
    label: "Săo Joăo do Carú (MA)",
  },
  {
    value: "Săo Joăo do Itaperiú SC",
    label: "Săo Joăo do Itaperiú (SC)",
  },
  {
    value: "Săo Joăo do Ivaí PR",
    label: "Săo Joăo do Ivaí (PR)",
  },
  {
    value: "Săo Joăo do Jaguaribe CE",
    label: "Săo Joăo do Jaguaribe (CE)",
  },
  {
    value: "Săo Joăo do Manhuaçu MG",
    label: "Săo Joăo do Manhuaçu (MG)",
  },
  {
    value: "Săo Joăo do Manteninha MG",
    label: "Săo Joăo do Manteninha (MG)",
  },
  {
    value: "Săo Joăo do Oeste SC",
    label: "Săo Joăo do Oeste (SC)",
  },
  {
    value: "Săo Joăo do Oriente MG",
    label: "Săo Joăo do Oriente (MG)",
  },
  {
    value: "Săo Joăo do Pacuí MG",
    label: "Săo Joăo do Pacuí (MG)",
  },
  {
    value: "Săo Joăo do Paraíso MA",
    label: "Săo Joăo do Paraíso (MA)",
  },
  {
    value: "Săo Joăo do Paraíso MG",
    label: "Săo Joăo do Paraíso (MG)",
  },
  {
    value: "Săo Joăo do Pau D´alho SP",
    label: "Săo Joăo do Pau D´alho (SP)",
  },
  {
    value: "Săo Joăo do Piauí PI",
    label: "Săo Joăo do Piauí (PI)",
  },
  {
    value: "Săo Joăo do Polêsine RS",
    label: "Săo Joăo do Polêsine (RS)",
  },
  {
    value: "Săo Joăo do Rio do Pei PB",
    label: "Săo Joăo do Rio do Peixe (PB)",
  },
  {
    value: "Săo Joăo do Sabugi RN",
    label: "Săo Joăo do Sabugi (RN)",
  },
  {
    value: "Săo Joăo do Soter MA",
    label: "Săo Joăo do Soter (MA)",
  },
  {
    value: "Săo Joăo do Sul SC",
    label: "Săo Joăo do Sul (SC)",
  },
  {
    value: "Săo Joăo do Tigre PB",
    label: "Săo Joăo do Tigre (PB)",
  },
  {
    value: "Săo Joăo do Triunfo PR",
    label: "Săo Joăo do Triunfo (PR)",
  },
  {
    value: "Săo Juliăo PI",
    label: "Săo Juliăo (PI)",
  },
  {
    value: "Săo Leopoldo RS",
    label: "Săo Leopoldo (RS)",
  },
  {
    value: "Săo Lourenço MG",
    label: "Săo Lourenço (MG)",
  },
  {
    value: "Săo Lourenço da Mata PE",
    label: "Săo Lourenço da Mata (PE)",
  },
  {
    value: "Săo Lourenço da Serra SP",
    label: "Săo Lourenço da Serra (SP)",
  },
  {
    value: "Săo Lourenço do Oeste SC",
    label: "Săo Lourenço do Oeste (SC)",
  },
  {
    value: "Săo Lourenço do Piauí PI",
    label: "Săo Lourenço do Piauí (PI)",
  },
  {
    value: "Săo Lourenço do Sul RS",
    label: "Săo Lourenço do Sul (RS)",
  },
  {
    value: "Săo Ludgero SC",
    label: "Săo Ludgero (SC)",
  },
  {
    value: "Săo Luis do Piauí PI",
    label: "Săo Luis do Piauí (PI)",
  },
  {
    value: "Săo Luiz RR",
    label: "Săo Luiz (RR)",
  },
  {
    value: "Săo Luiz Gonzaga RS",
    label: "Săo Luiz Gonzaga (RS)",
  },
  {
    value: "Săo Luís MA",
    label: "Săo Luís (MA)",
  },
  {
    value: "Săo Luís Gonzaga do Ma MA",
    label: "Săo Luís Gonzaga do Maranhăo (MA)",
  },
  {
    value: "Săo Luís de Montes Bel GO",
    label: "Săo Luís de Montes Belos (GO)",
  },
  {
    value: "Săo Luís do Curu CE",
    label: "Săo Luís do Curu (CE)",
  },
  {
    value: "Săo Luís do Paraitinga SP",
    label: "Săo Luís do Paraitinga (SP)",
  },
  {
    value: "Săo Luís do Quitunde AL",
    label: "Săo Luís do Quitunde (AL)",
  },
  {
    value: "Săo Luíz do Norte GO",
    label: "Săo Luíz do Norte (GO)",
  },
  {
    value: "Săo Mamede PB",
    label: "Săo Mamede (PB)",
  },
  {
    value: "Săo Manoel do Paraná PR",
    label: "Săo Manoel do Paraná (PR)",
  },
  {
    value: "Săo Manuel SP",
    label: "Săo Manuel (SP)",
  },
  {
    value: "Săo Marcos RS",
    label: "Săo Marcos (RS)",
  },
  {
    value: "Săo Martinho RS",
    label: "Săo Martinho (RS)",
  },
  {
    value: "Săo Martinho SC",
    label: "Săo Martinho (SC)",
  },
  {
    value: "Săo Martinho da Serra RS",
    label: "Săo Martinho da Serra (RS)",
  },
  {
    value: "Săo Mateus ES",
    label: "Săo Mateus (ES)",
  },
  {
    value: "Săo Mateus do Maranhăo MA",
    label: "Săo Mateus do Maranhăo (MA)",
  },
  {
    value: "Săo Mateus do Sul PR",
    label: "Săo Mateus do Sul (PR)",
  },
  {
    value: "Săo Miguel RN",
    label: "Săo Miguel (RN)",
  },
  {
    value: "Săo Miguel Arcanjo SP",
    label: "Săo Miguel Arcanjo (SP)",
  },
  {
    value: "Săo Miguel Das Matas BA",
    label: "Săo Miguel Das Matas (BA)",
  },
  {
    value: "Săo Miguel Das Missơes RS",
    label: "Săo Miguel Das Missơes (RS)",
  },
  {
    value: "Săo Miguel Dos Campos AL",
    label: "Săo Miguel Dos Campos (AL)",
  },
  {
    value: "Săo Miguel Dos Milagre AL",
    label: "Săo Miguel Dos Milagres (AL)",
  },
  {
    value: "Săo Miguel da Baixa Gr PI",
    label: "Săo Miguel da Baixa Grande (PI)",
  },
  {
    value: "Săo Miguel da Boa Vist SC",
    label: "Săo Miguel da Boa Vista (SC)",
  },
  {
    value: "Săo Miguel de Taipu PB",
    label: "Săo Miguel de Taipu (PB)",
  },
  {
    value: "Săo Miguel do Aleixo SE",
    label: "Săo Miguel do Aleixo (SE)",
  },
  {
    value: "Săo Miguel do Anta MG",
    label: "Săo Miguel do Anta (MG)",
  },
  {
    value: "Săo Miguel do Araguaia GO",
    label: "Săo Miguel do Araguaia (GO)",
  },
  {
    value: "Săo Miguel do Fidalgo PI",
    label: "Săo Miguel do Fidalgo (PI)",
  },
  {
    value: "Săo Miguel do Gostoso RN",
    label: "Săo Miguel do Gostoso (RN)",
  },
  {
    value: "Săo Miguel do Guamá PA",
    label: "Săo Miguel do Guamá (PA)",
  },
  {
    value: "Săo Miguel do Guaporé RO",
    label: "Săo Miguel do Guaporé (RO)",
  },
  {
    value: "Săo Miguel do Iguaçu PR",
    label: "Săo Miguel do Iguaçu (PR)",
  },
  {
    value: "Săo Miguel do Oeste SC",
    label: "Săo Miguel do Oeste (SC)",
  },
  {
    value: "Săo Miguel do Passa Qu GO",
    label: "Săo Miguel do Passa Quatro (GO)",
  },
  {
    value: "Săo Miguel do Tapuio PI",
    label: "Săo Miguel do Tapuio (PI)",
  },
  {
    value: "Săo Miguel do Tocantin TO",
    label: "Săo Miguel do Tocantins (TO)",
  },
  {
    value: "Săo Nicolau RS",
    label: "Săo Nicolau (RS)",
  },
  {
    value: "Săo Patrício GO",
    label: "Săo Patrício (GO)",
  },
  {
    value: "Săo Paulo SP",
    label: "Săo Paulo (SP)",
  },
  {
    value: "Săo Paulo Das Missơes RS",
    label: "Săo Paulo Das Missơes (RS)",
  },
  {
    value: "Săo Paulo de Olivença AM",
    label: "Săo Paulo de Olivença (AM)",
  },
  {
    value: "Săo Paulo do Potengi RN",
    label: "Săo Paulo do Potengi (RN)",
  },
  {
    value: "Săo Pedro RN",
    label: "Săo Pedro (RN)",
  },
  {
    value: "Săo Pedro SP",
    label: "Săo Pedro (SP)",
  },
  {
    value: "Săo Pedro Das Missơes RS",
    label: "Săo Pedro Das Missơes (RS)",
  },
  {
    value: "Săo Pedro Dos Crentes MA",
    label: "Săo Pedro Dos Crentes (MA)",
  },
  {
    value: "Săo Pedro Dos Ferros MG",
    label: "Săo Pedro Dos Ferros (MG)",
  },
  {
    value: "Săo Pedro da Aldeia RJ",
    label: "Săo Pedro da Aldeia (RJ)",
  },
  {
    value: "Săo Pedro da Cipa MT",
    label: "Săo Pedro da Cipa (MT)",
  },
  {
    value: "Săo Pedro da Serra RS",
    label: "Săo Pedro da Serra (RS)",
  },
  {
    value: "Săo Pedro da Uniăo MG",
    label: "Săo Pedro da Uniăo (MG)",
  },
  {
    value: "Săo Pedro da Água Bran MA",
    label: "Săo Pedro da Água Branca (MA)",
  },
  {
    value: "Săo Pedro de Alcântara SC",
    label: "Săo Pedro de Alcântara (SC)",
  },
  {
    value: "Săo Pedro do Butiá RS",
    label: "Săo Pedro do Butiá (RS)",
  },
  {
    value: "Săo Pedro do Iguaçu PR",
    label: "Săo Pedro do Iguaçu (PR)",
  },
  {
    value: "Săo Pedro do Ivaí PR",
    label: "Săo Pedro do Ivaí (PR)",
  },
  {
    value: "Săo Pedro do Paraná PR",
    label: "Săo Pedro do Paraná (PR)",
  },
  {
    value: "Săo Pedro do Piauí PI",
    label: "Săo Pedro do Piauí (PI)",
  },
  {
    value: "Săo Pedro do Suaçuí MG",
    label: "Săo Pedro do Suaçuí (MG)",
  },
  {
    value: "Săo Pedro do Sul RS",
    label: "Săo Pedro do Sul (RS)",
  },
  {
    value: "Săo Pedro do Turvo SP",
    label: "Săo Pedro do Turvo (SP)",
  },
  {
    value: "Săo Rafael RN",
    label: "Săo Rafael (RN)",
  },
  {
    value: "Săo Raimundo Das Manga MA",
    label: "Săo Raimundo Das Mangabeiras (MA)",
  },
  {
    value: "Săo Raimundo Nonato PI",
    label: "Săo Raimundo Nonato (PI)",
  },
  {
    value: "Săo Raimundo do Doca B MA",
    label: "Săo Raimundo do Doca Bezerra (MA)",
  },
  {
    value: "Săo Roberto MA",
    label: "Săo Roberto (MA)",
  },
  {
    value: "Săo Romăo MG",
    label: "Săo Romăo (MG)",
  },
  {
    value: "Săo Roque SP",
    label: "Săo Roque (SP)",
  },
  {
    value: "Săo Roque de Minas MG",
    label: "Săo Roque de Minas (MG)",
  },
  {
    value: "Săo Roque do Canaă ES",
    label: "Săo Roque do Canaă (ES)",
  },
  {
    value: "Săo Salvador do Tocant TO",
    label: "Săo Salvador do Tocantins (TO)",
  },
  {
    value: "Săo Sebastiăo AL",
    label: "Săo Sebastiăo (AL)",
  },
  {
    value: "Săo Sebastiăo SP",
    label: "Săo Sebastiăo (SP)",
  },
  {
    value: "Săo Sebastiăo da Amore PR",
    label: "Săo Sebastiăo da Amoreira (PR)",
  },
  {
    value: "Săo Sebastiăo da Bela  MG",
    label: "Săo Sebastiăo da Bela Vista (MG)",
  },
  {
    value: "Săo Sebastiăo da Boa V PA",
    label: "Săo Sebastiăo da Boa Vista (PA)",
  },
  {
    value: "Săo Sebastiăo da Grama SP",
    label: "Săo Sebastiăo da Grama (SP)",
  },
  {
    value: "Săo Sebastiăo da Varge MG",
    label: "Săo Sebastiăo da Vargem Alegre (MG)",
  },
  {
    value: "Săo Sebastiăo de Lagoa PB",
    label: "Săo Sebastiăo de Lagoa de Roça (PB)",
  },
  {
    value: "Săo Sebastiăo do Alto RJ",
    label: "Săo Sebastiăo do Alto (RJ)",
  },
  {
    value: "Săo Sebastiăo do Anta MG",
    label: "Săo Sebastiăo do Anta (MG)",
  },
  {
    value: "Săo Sebastiăo do Caí RS",
    label: "Săo Sebastiăo do Caí (RS)",
  },
  {
    value: "Săo Sebastiăo do Maran MG",
    label: "Săo Sebastiăo do Maranhăo (MG)",
  },
  {
    value: "Săo Sebastiăo do Oeste MG",
    label: "Săo Sebastiăo do Oeste (MG)",
  },
  {
    value: "Săo Sebastiăo do Paraí MG",
    label: "Săo Sebastiăo do Paraíso (MG)",
  },
  {
    value: "Săo Sebastiăo do Passé BA",
    label: "Săo Sebastiăo do Passé (BA)",
  },
  {
    value: "Săo Sebastiăo do Rio P MG",
    label: "Săo Sebastiăo do Rio Preto (MG)",
  },
  {
    value: "Săo Sebastiăo do Rio V MG",
    label: "Săo Sebastiăo do Rio Verde (MG)",
  },
  {
    value: "Săo Sebastiăo do Tocan TO",
    label: "Săo Sebastiăo do Tocantins (TO)",
  },
  {
    value: "Săo Sebastiăo do Uatum AM",
    label: "Săo Sebastiăo do Uatumă (AM)",
  },
  {
    value: "Săo Sebastiăo do Umbuz PB",
    label: "Săo Sebastiăo do Umbuzeiro (PB)",
  },
  {
    value: "Săo Sepé RS",
    label: "Săo Sepé (RS)",
  },
  {
    value: "Săo Simăo GO",
    label: "Săo Simăo (GO)",
  },
  {
    value: "Săo Simăo SP",
    label: "Săo Simăo (SP)",
  },
  {
    value: "Săo Thomé Das Letras MG",
    label: "Săo Thomé Das Letras (MG)",
  },
  {
    value: "Săo Tiago MG",
    label: "Săo Tiago (MG)",
  },
  {
    value: "Săo Tomás de Aquino MG",
    label: "Săo Tomás de Aquino (MG)",
  },
  {
    value: "Săo Tomé PR",
    label: "Săo Tomé (PR)",
  },
  {
    value: "Săo Tomé RN",
    label: "Săo Tomé (RN)",
  },
  {
    value: "Săo Valentim RS",
    label: "Săo Valentim (RS)",
  },
  {
    value: "Săo Valentim do Sul RS",
    label: "Săo Valentim do Sul (RS)",
  },
  {
    value: "Săo Valério da Nativid TO",
    label: "Săo Valério da Natividade (TO)",
  },
  {
    value: "Săo Valério do Sul RS",
    label: "Săo Valério do Sul (RS)",
  },
  {
    value: "Săo Vendelino RS",
    label: "Săo Vendelino (RS)",
  },
  {
    value: "Săo Vicente RN",
    label: "Săo Vicente (RN)",
  },
  {
    value: "Săo Vicente SP",
    label: "Săo Vicente (SP)",
  },
  {
    value: "Săo Vicente Ferrer MA",
    label: "Săo Vicente Ferrer (MA)",
  },
  {
    value: "Săo Vicente Ferrer PE",
    label: "Săo Vicente Ferrer (PE)",
  },
  {
    value: "Săo Vicente de Minas MG",
    label: "Săo Vicente de Minas (MG)",
  },
  {
    value: "Săo Vicente do Sul RS",
    label: "Săo Vicente do Sul (RS)",
  },
  {
    value: "Tabaporă MT",
    label: "Tabaporă (MT)",
  },
  {
    value: "Tabapuă SP",
    label: "Tabapuă (SP)",
  },
  {
    value: "Tabatinga AM",
    label: "Tabatinga (AM)",
  },
  {
    value: "Tabatinga SP",
    label: "Tabatinga (SP)",
  },
  {
    value: "Tabaí RS",
    label: "Tabaí (RS)",
  },
  {
    value: "Tabira PE",
    label: "Tabira (PE)",
  },
  {
    value: "Tabocas do Brejo Velho BA",
    label: "Tabocas do Brejo Velho (BA)",
  },
  {
    value: "Taboleiro Grande RN",
    label: "Taboleiro Grande (RN)",
  },
  {
    value: "Taboăo da Serra SP",
    label: "Taboăo da Serra (SP)",
  },
  {
    value: "Tabuleiro MG",
    label: "Tabuleiro (MG)",
  },
  {
    value: "Tabuleiro do Norte CE",
    label: "Tabuleiro do Norte (CE)",
  },
  {
    value: "Tacaimbó PE",
    label: "Tacaimbó (PE)",
  },
  {
    value: "Tacaratu PE",
    label: "Tacaratu (PE)",
  },
  {
    value: "Taciba SP",
    label: "Taciba (SP)",
  },
  {
    value: "Tacuru MS",
    label: "Tacuru (MS)",
  },
  {
    value: "Taguatinga TO",
    label: "Taguatinga (TO)",
  },
  {
    value: "Taguaí SP",
    label: "Taguaí (SP)",
  },
  {
    value: "Taiaçu SP",
    label: "Taiaçu (SP)",
  },
  {
    value: "Tailândia PA",
    label: "Tailândia (PA)",
  },
  {
    value: "Taiobeiras MG",
    label: "Taiobeiras (MG)",
  },
  {
    value: "Taipas do Tocantins TO",
    label: "Taipas do Tocantins (TO)",
  },
  {
    value: "Taipu RN",
    label: "Taipu (RN)",
  },
  {
    value: "Taió SC",
    label: "Taió (SC)",
  },
  {
    value: "Taiúva SP",
    label: "Taiúva (SP)",
  },
  {
    value: "Talismă TO",
    label: "Talismă (TO)",
  },
  {
    value: "Tamandaré PE",
    label: "Tamandaré (PE)",
  },
  {
    value: "Tamarana PR",
    label: "Tamarana (PR)",
  },
  {
    value: "Tambaú SP",
    label: "Tambaú (SP)",
  },
  {
    value: "Tamboara PR",
    label: "Tamboara (PR)",
  },
  {
    value: "Tamboril CE",
    label: "Tamboril (CE)",
  },
  {
    value: "Tamboril do Piauí PI",
    label: "Tamboril do Piauí (PI)",
  },
  {
    value: "Tanabi SP",
    label: "Tanabi (SP)",
  },
  {
    value: "Tangará RN",
    label: "Tangará (RN)",
  },
  {
    value: "Tangará SC",
    label: "Tangará (SC)",
  },
  {
    value: "Tangará da Serra MT",
    label: "Tangará da Serra (MT)",
  },
  {
    value: "Tanguá RJ",
    label: "Tanguá (RJ)",
  },
  {
    value: "Tanhaçu BA",
    label: "Tanhaçu (BA)",
  },
  {
    value: "Tanque D´arca AL",
    label: "Tanque D´arca (AL)",
  },
  {
    value: "Tanque Novo BA",
    label: "Tanque Novo (BA)",
  },
  {
    value: "Tanque do Piauí PI",
    label: "Tanque do Piauí (PI)",
  },
  {
    value: "Tanquinho BA",
    label: "Tanquinho (BA)",
  },
  {
    value: "Taparuba MG",
    label: "Taparuba (MG)",
  },
  {
    value: "Tapauá AM",
    label: "Tapauá (AM)",
  },
  {
    value: "Tapejara PR",
    label: "Tapejara (PR)",
  },
  {
    value: "Tapejara RS",
    label: "Tapejara (RS)",
  },
  {
    value: "Tapera RS",
    label: "Tapera (RS)",
  },
  {
    value: "Taperoá BA",
    label: "Taperoá (BA)",
  },
  {
    value: "Taperoá PB",
    label: "Taperoá (PB)",
  },
  {
    value: "Tapes RS",
    label: "Tapes (RS)",
  },
  {
    value: "Tapira MG",
    label: "Tapira (MG)",
  },
  {
    value: "Tapira PR",
    label: "Tapira (PR)",
  },
  {
    value: "Tapiramutá BA",
    label: "Tapiramutá (BA)",
  },
  {
    value: "Tapiratiba SP",
    label: "Tapiratiba (SP)",
  },
  {
    value: "Tapiraí MG",
    label: "Tapiraí (MG)",
  },
  {
    value: "Tapiraí SP",
    label: "Tapiraí (SP)",
  },
  {
    value: "Tapurah MT",
    label: "Tapurah (MT)",
  },
  {
    value: "Taquara RS",
    label: "Taquara (RS)",
  },
  {
    value: "Taquaral SP",
    label: "Taquaral (SP)",
  },
  {
    value: "Taquaral de Goiás GO",
    label: "Taquaral de Goiás (GO)",
  },
  {
    value: "Taquarana AL",
    label: "Taquarana (AL)",
  },
  {
    value: "Taquaraçu de Minas MG",
    label: "Taquaraçu de Minas (MG)",
  },
  {
    value: "Taquari RS",
    label: "Taquari (RS)",
  },
  {
    value: "Taquaritinga SP",
    label: "Taquaritinga (SP)",
  },
  {
    value: "Taquaritinga do Norte PE",
    label: "Taquaritinga do Norte (PE)",
  },
  {
    value: "Taquarituba SP",
    label: "Taquarituba (SP)",
  },
  {
    value: "Taquarivaí SP",
    label: "Taquarivaí (SP)",
  },
  {
    value: "Taquarussu MS",
    label: "Taquarussu (MS)",
  },
  {
    value: "Taquaruçu do Sul RS",
    label: "Taquaruçu do Sul (RS)",
  },
  {
    value: "Tarabai SP",
    label: "Tarabai (SP)",
  },
  {
    value: "Tarauacá AC",
    label: "Tarauacá (AC)",
  },
  {
    value: "Tarrafas CE",
    label: "Tarrafas (CE)",
  },
  {
    value: "Tartarugalzinho AP",
    label: "Tartarugalzinho (AP)",
  },
  {
    value: "Tarumirim MG",
    label: "Tarumirim (MG)",
  },
  {
    value: "Tarumă SP",
    label: "Tarumă (SP)",
  },
  {
    value: "Tasso Fragoso MA",
    label: "Tasso Fragoso (MA)",
  },
  {
    value: "Tatuí SP",
    label: "Tatuí (SP)",
  },
  {
    value: "Taubaté SP",
    label: "Taubaté (SP)",
  },
  {
    value: "Tauá CE",
    label: "Tauá (CE)",
  },
  {
    value: "Tavares PB",
    label: "Tavares (PB)",
  },
  {
    value: "Tavares RS",
    label: "Tavares (RS)",
  },
  {
    value: "Tefé AM",
    label: "Tefé (AM)",
  },
  {
    value: "Teixeira PB",
    label: "Teixeira (PB)",
  },
  {
    value: "Teixeira Soares PR",
    label: "Teixeira Soares (PR)",
  },
  {
    value: "Teixeira de Freitas BA",
    label: "Teixeira de Freitas (BA)",
  },
  {
    value: "Teixeiras MG",
    label: "Teixeiras (MG)",
  },
  {
    value: "Teixeirópolis RO",
    label: "Teixeirópolis (RO)",
  },
  {
    value: "Tejupá SP",
    label: "Tejupá (SP)",
  },
  {
    value: "Tejuçuoca CE",
    label: "Tejuçuoca (CE)",
  },
  {
    value: "Telha SE",
    label: "Telha (SE)",
  },
  {
    value: "Telêmaco Borba PR",
    label: "Telêmaco Borba (PR)",
  },
  {
    value: "Tenente Ananias RN",
    label: "Tenente Ananias (RN)",
  },
  {
    value: "Tenente Laurentino Cru RN",
    label: "Tenente Laurentino Cruz (RN)",
  },
  {
    value: "Tenente Portela RS",
    label: "Tenente Portela (RS)",
  },
  {
    value: "Tenório PB",
    label: "Tenório (PB)",
  },
  {
    value: "Teodoro Sampaio BA",
    label: "Teodoro Sampaio (BA)",
  },
  {
    value: "Teodoro Sampaio SP",
    label: "Teodoro Sampaio (SP)",
  },
  {
    value: "Teofilândia BA",
    label: "Teofilândia (BA)",
  },
  {
    value: "Teolândia BA",
    label: "Teolândia (BA)",
  },
  {
    value: "Teotônio Vilela AL",
    label: "Teotônio Vilela (AL)",
  },
  {
    value: "Terenos MS",
    label: "Terenos (MS)",
  },
  {
    value: "Teresina PI",
    label: "Teresina (PI)",
  },
  {
    value: "Teresina de Goiás GO",
    label: "Teresina de Goiás (GO)",
  },
  {
    value: "Teresópolis RJ",
    label: "Teresópolis (RJ)",
  },
  {
    value: "Terezinha PE",
    label: "Terezinha (PE)",
  },
  {
    value: "Terezópolis de Goiás GO",
    label: "Terezópolis de Goiás (GO)",
  },
  {
    value: "Terra Alta PA",
    label: "Terra Alta (PA)",
  },
  {
    value: "Terra Boa PR",
    label: "Terra Boa (PR)",
  },
  {
    value: "Terra Nova BA",
    label: "Terra Nova (BA)",
  },
  {
    value: "Terra Nova PE",
    label: "Terra Nova (PE)",
  },
  {
    value: "Terra Nova do Norte MT",
    label: "Terra Nova do Norte (MT)",
  },
  {
    value: "Terra Rica PR",
    label: "Terra Rica (PR)",
  },
  {
    value: "Terra Roxa PR",
    label: "Terra Roxa (PR)",
  },
  {
    value: "Terra Roxa SP",
    label: "Terra Roxa (SP)",
  },
  {
    value: "Terra Santa PA",
    label: "Terra Santa (PA)",
  },
  {
    value: "Terra de Areia RS",
    label: "Terra de Areia (RS)",
  },
  {
    value: "Tesouro MT",
    label: "Tesouro (MT)",
  },
  {
    value: "Teutônia RS",
    label: "Teutônia (RS)",
  },
  {
    value: "Teófilo Otoni MG",
    label: "Teófilo Otoni (MG)",
  },
  {
    value: "Theobroma RO",
    label: "Theobroma (RO)",
  },
  {
    value: "Tianguá CE",
    label: "Tianguá (CE)",
  },
  {
    value: "Tibagi PR",
    label: "Tibagi (PR)",
  },
  {
    value: "Tibau RN",
    label: "Tibau (RN)",
  },
  {
    value: "Tibau do Sul RN",
    label: "Tibau do Sul (RN)",
  },
  {
    value: "Tietê SP",
    label: "Tietê (SP)",
  },
  {
    value: "Tigrinhos SC",
    label: "Tigrinhos (SC)",
  },
  {
    value: "Tijucas SC",
    label: "Tijucas (SC)",
  },
  {
    value: "Tijucas do Sul PR",
    label: "Tijucas do Sul (PR)",
  },
  {
    value: "Timbaúba PE",
    label: "Timbaúba (PE)",
  },
  {
    value: "Timbaúba Dos Batistas RN",
    label: "Timbaúba Dos Batistas (RN)",
  },
  {
    value: "Timbiras MA",
    label: "Timbiras (MA)",
  },
  {
    value: "Timburi SP",
    label: "Timburi (SP)",
  },
  {
    value: "Timbé do Sul SC",
    label: "Timbé do Sul (SC)",
  },
  {
    value: "Timbó SC",
    label: "Timbó (SC)",
  },
  {
    value: "Timbó Grande SC",
    label: "Timbó Grande (SC)",
  },
  {
    value: "Timon MA",
    label: "Timon (MA)",
  },
  {
    value: "Timóteo MG",
    label: "Timóteo (MG)",
  },
  {
    value: "Tio Hugo RS",
    label: "Tio Hugo (RS)",
  },
  {
    value: "Tiradentes MG",
    label: "Tiradentes (MG)",
  },
  {
    value: "Tiradentes do Sul RS",
    label: "Tiradentes do Sul (RS)",
  },
  {
    value: "Tiros MG",
    label: "Tiros (MG)",
  },
  {
    value: "Tobias Barreto SE",
    label: "Tobias Barreto (SE)",
  },
  {
    value: "Tocantins MG",
    label: "Tocantins (MG)",
  },
  {
    value: "Tocantinópolis TO",
    label: "Tocantinópolis (TO)",
  },
  {
    value: "Tocantínia TO",
    label: "Tocantínia (TO)",
  },
  {
    value: "Tocos do Moji MG",
    label: "Tocos do Moji (MG)",
  },
  {
    value: "Toledo MG",
    label: "Toledo (MG)",
  },
  {
    value: "Toledo PR",
    label: "Toledo (PR)",
  },
  {
    value: "Tomar do Geru SE",
    label: "Tomar do Geru (SE)",
  },
  {
    value: "Tomazina PR",
    label: "Tomazina (PR)",
  },
  {
    value: "Tombos MG",
    label: "Tombos (MG)",
  },
  {
    value: "Tomé-açu PA",
    label: "Tomé-açu (PA)",
  },
  {
    value: "Tonantins AM",
    label: "Tonantins (AM)",
  },
  {
    value: "Toritama PE",
    label: "Toritama (PE)",
  },
  {
    value: "Torixoréu MT",
    label: "Torixoréu (MT)",
  },
  {
    value: "Toropi RS",
    label: "Toropi (RS)",
  },
  {
    value: "Torre de Pedra SP",
    label: "Torre de Pedra (SP)",
  },
  {
    value: "Torres RS",
    label: "Torres (RS)",
  },
  {
    value: "Torrinha SP",
    label: "Torrinha (SP)",
  },
  {
    value: "Touros RN",
    label: "Touros (RN)",
  },
  {
    value: "Trabiju SP",
    label: "Trabiju (SP)",
  },
  {
    value: "Tracuateua PA",
    label: "Tracuateua (PA)",
  },
  {
    value: "Tracunhaém PE",
    label: "Tracunhaém (PE)",
  },
  {
    value: "Traipu AL",
    label: "Traipu (AL)",
  },
  {
    value: "Trairi CE",
    label: "Trairi (CE)",
  },
  {
    value: "Trairăo PA",
    label: "Trairăo (PA)",
  },
  {
    value: "Trajano de Morais RJ",
    label: "Trajano de Morais (RJ)",
  },
  {
    value: "Tramandaí RS",
    label: "Tramandaí (RS)",
  },
  {
    value: "Travesseiro RS",
    label: "Travesseiro (RS)",
  },
  {
    value: "Tremedal BA",
    label: "Tremedal (BA)",
  },
  {
    value: "Tremembé SP",
    label: "Tremembé (SP)",
  },
  {
    value: "Treviso SC",
    label: "Treviso (SC)",
  },
  {
    value: "Treze Tílias SC",
    label: "Treze Tílias (SC)",
  },
  {
    value: "Treze de Maio SC",
    label: "Treze de Maio (SC)",
  },
  {
    value: "Trindade GO",
    label: "Trindade (GO)",
  },
  {
    value: "Trindade PE",
    label: "Trindade (PE)",
  },
  {
    value: "Trindade do Sul RS",
    label: "Trindade do Sul (RS)",
  },
  {
    value: "Triunfo PB",
    label: "Triunfo (PB)",
  },
  {
    value: "Triunfo PE",
    label: "Triunfo (PE)",
  },
  {
    value: "Triunfo RS",
    label: "Triunfo (RS)",
  },
  {
    value: "Triunfo Potiguar RN",
    label: "Triunfo Potiguar (RN)",
  },
  {
    value: "Trizidela do Vale MA",
    label: "Trizidela do Vale (MA)",
  },
  {
    value: "Trombas GO",
    label: "Trombas (GO)",
  },
  {
    value: "Trombudo Central SC",
    label: "Trombudo Central (SC)",
  },
  {
    value: "Três Arroios RS",
    label: "Três Arroios (RS)",
  },
  {
    value: "Três Barras SC",
    label: "Três Barras (SC)",
  },
  {
    value: "Três Barras do Paraná PR",
    label: "Três Barras do Paraná (PR)",
  },
  {
    value: "Três Cachoeiras RS",
    label: "Três Cachoeiras (RS)",
  },
  {
    value: "Três Coraçơes MG",
    label: "Três Coraçơes (MG)",
  },
  {
    value: "Três Coroas RS",
    label: "Três Coroas (RS)",
  },
  {
    value: "Três Forquilhas RS",
    label: "Três Forquilhas (RS)",
  },
  {
    value: "Três Fronteiras SP",
    label: "Três Fronteiras (SP)",
  },
  {
    value: "Três Lagoas MS",
    label: "Três Lagoas (MS)",
  },
  {
    value: "Três Marias MG",
    label: "Três Marias (MG)",
  },
  {
    value: "Três Palmeiras RS",
    label: "Três Palmeiras (RS)",
  },
  {
    value: "Três Passos RS",
    label: "Três Passos (RS)",
  },
  {
    value: "Três Pontas MG",
    label: "Três Pontas (MG)",
  },
  {
    value: "Três Ranchos GO",
    label: "Três Ranchos (GO)",
  },
  {
    value: "Três Rios RJ",
    label: "Três Rios (RJ)",
  },
  {
    value: "Três de Maio RS",
    label: "Três de Maio (RS)",
  },
  {
    value: "Tubarăo SC",
    label: "Tubarăo (SC)",
  },
  {
    value: "Tucano BA",
    label: "Tucano (BA)",
  },
  {
    value: "Tucumă PA",
    label: "Tucumă (PA)",
  },
  {
    value: "Tucunduva RS",
    label: "Tucunduva (RS)",
  },
  {
    value: "Tucuruí PA",
    label: "Tucuruí (PA)",
  },
  {
    value: "Tufilândia MA",
    label: "Tufilândia (MA)",
  },
  {
    value: "Tuiuti SP",
    label: "Tuiuti (SP)",
  },
  {
    value: "Tumiritinga MG",
    label: "Tumiritinga (MG)",
  },
  {
    value: "Tunas RS",
    label: "Tunas (RS)",
  },
  {
    value: "Tunas do Paraná PR",
    label: "Tunas do Paraná (PR)",
  },
  {
    value: "Tuneiras do Oeste PR",
    label: "Tuneiras do Oeste (PR)",
  },
  {
    value: "Tuntum MA",
    label: "Tuntum (MA)",
  },
  {
    value: "Tunápolis SC",
    label: "Tunápolis (SC)",
  },
  {
    value: "Tupaciguara MG",
    label: "Tupaciguara (MG)",
  },
  {
    value: "Tupanatinga PE",
    label: "Tupanatinga (PE)",
  },
  {
    value: "Tupanci do Sul RS",
    label: "Tupanci do Sul (RS)",
  },
  {
    value: "Tupanciretă RS",
    label: "Tupanciretă (RS)",
  },
  {
    value: "Tupandi RS",
    label: "Tupandi (RS)",
  },
  {
    value: "Tuparendi RS",
    label: "Tuparendi (RS)",
  },
  {
    value: "Tuparetama PE",
    label: "Tuparetama (PE)",
  },
  {
    value: "Tupi Paulista SP",
    label: "Tupi Paulista (SP)",
  },
  {
    value: "Tupirama TO",
    label: "Tupirama (TO)",
  },
  {
    value: "Tupiratins TO",
    label: "Tupiratins (TO)",
  },
  {
    value: "Tupă SP",
    label: "Tupă (SP)",
  },
  {
    value: "Tupăssi PR",
    label: "Tupăssi (PR)",
  },
  {
    value: "Turiaçu MA",
    label: "Turiaçu (MA)",
  },
  {
    value: "Turilândia MA",
    label: "Turilândia (MA)",
  },
  {
    value: "Turiúba SP",
    label: "Turiúba (SP)",
  },
  {
    value: "Turmalina MG",
    label: "Turmalina (MG)",
  },
  {
    value: "Turmalina SP",
    label: "Turmalina (SP)",
  },
  {
    value: "Tururu CE",
    label: "Tururu (CE)",
  },
  {
    value: "Turuçu RS",
    label: "Turuçu (RS)",
  },
  {
    value: "Turvelândia GO",
    label: "Turvelândia (GO)",
  },
  {
    value: "Turvo PR",
    label: "Turvo (PR)",
  },
  {
    value: "Turvo SC",
    label: "Turvo (SC)",
  },
  {
    value: "Turvolândia MG",
    label: "Turvolândia (MG)",
  },
  {
    value: "Turvânia GO",
    label: "Turvânia (GO)",
  },
  {
    value: "Tutóia MA",
    label: "Tutóia (MA)",
  },
  {
    value: "Uarini AM",
    label: "Uarini (AM)",
  },
  {
    value: "Uauá BA",
    label: "Uauá (BA)",
  },
  {
    value: "Ubaitaba BA",
    label: "Ubaitaba (BA)",
  },
  {
    value: "Ubajara CE",
    label: "Ubajara (CE)",
  },
  {
    value: "Ubaporanga MG",
    label: "Ubaporanga (MG)",
  },
  {
    value: "Ubarana SP",
    label: "Ubarana (SP)",
  },
  {
    value: "Ubatuba SP",
    label: "Ubatuba (SP)",
  },
  {
    value: "Ubată BA",
    label: "Ubată (BA)",
  },
  {
    value: "Ubaí MG",
    label: "Ubaí (MG)",
  },
  {
    value: "Ubaíra BA",
    label: "Ubaíra (BA)",
  },
  {
    value: "Uberaba MG",
    label: "Uberaba (MG)",
  },
  {
    value: "Uberlândia MG",
    label: "Uberlândia (MG)",
  },
  {
    value: "Ubirajara SP",
    label: "Ubirajara (SP)",
  },
  {
    value: "Ubirată PR",
    label: "Ubirată (PR)",
  },
  {
    value: "Ubiretama RS",
    label: "Ubiretama (RS)",
  },
  {
    value: "Ubá MG",
    label: "Ubá (MG)",
  },
  {
    value: "Uchoa SP",
    label: "Uchoa (SP)",
  },
  {
    value: "Uibaí BA",
    label: "Uibaí (BA)",
  },
  {
    value: "Uiramută RR",
    label: "Uiramută (RR)",
  },
  {
    value: "Uirapuru GO",
    label: "Uirapuru (GO)",
  },
  {
    value: "Uiraúna PB",
    label: "Uiraúna (PB)",
  },
  {
    value: "Ulianópolis PA",
    label: "Ulianópolis (PA)",
  },
  {
    value: "Umari CE",
    label: "Umari (CE)",
  },
  {
    value: "Umarizal RN",
    label: "Umarizal (RN)",
  },
  {
    value: "Umbaúba SE",
    label: "Umbaúba (SE)",
  },
  {
    value: "Umburanas BA",
    label: "Umburanas (BA)",
  },
  {
    value: "Umburatiba MG",
    label: "Umburatiba (MG)",
  },
  {
    value: "Umbuzeiro PB",
    label: "Umbuzeiro (PB)",
  },
  {
    value: "Umirim CE",
    label: "Umirim (CE)",
  },
  {
    value: "Umuarama PR",
    label: "Umuarama (PR)",
  },
  {
    value: "Una BA",
    label: "Una (BA)",
  },
  {
    value: "Unaí MG",
    label: "Unaí (MG)",
  },
  {
    value: "Uniflor PR",
    label: "Uniflor (PR)",
  },
  {
    value: "Unistalda RS",
    label: "Unistalda (RS)",
  },
  {
    value: "Uniăo PI",
    label: "Uniăo (PI)",
  },
  {
    value: "Uniăo Dos Palmares AL",
    label: "Uniăo Dos Palmares (AL)",
  },
  {
    value: "Uniăo Paulista SP",
    label: "Uniăo Paulista (SP)",
  },
  {
    value: "Uniăo da Serra RS",
    label: "Uniăo da Serra (RS)",
  },
  {
    value: "Uniăo da Vitória PR",
    label: "Uniăo da Vitória (PR)",
  },
  {
    value: "Uniăo de Minas MG",
    label: "Uniăo de Minas (MG)",
  },
  {
    value: "Uniăo do Oeste SC",
    label: "Uniăo do Oeste (SC)",
  },
  {
    value: "Uniăo do Sul MT",
    label: "Uniăo do Sul (MT)",
  },
  {
    value: "Upanema RN",
    label: "Upanema (RN)",
  },
  {
    value: "Urandi BA",
    label: "Urandi (BA)",
  },
  {
    value: "Uraí PR",
    label: "Uraí (PR)",
  },
  {
    value: "Urbano Santos MA",
    label: "Urbano Santos (MA)",
  },
  {
    value: "Uru SP",
    label: "Uru (SP)",
  },
  {
    value: "Uruana GO",
    label: "Uruana (GO)",
  },
  {
    value: "Uruana de Minas MG",
    label: "Uruana de Minas (MG)",
  },
  {
    value: "Uruará PA",
    label: "Uruará (PA)",
  },
  {
    value: "Uruaçu GO",
    label: "Uruaçu (GO)",
  },
  {
    value: "Urubici SC",
    label: "Urubici (SC)",
  },
  {
    value: "Uruburetama CE",
    label: "Uruburetama (CE)",
  },
  {
    value: "Urucará AM",
    label: "Urucará (AM)",
  },
  {
    value: "Urucuia MG",
    label: "Urucuia (MG)",
  },
  {
    value: "Urucurituba AM",
    label: "Urucurituba (AM)",
  },
  {
    value: "Urucânia MG",
    label: "Urucânia (MG)",
  },
  {
    value: "Uruguaiana RS",
    label: "Uruguaiana (RS)",
  },
  {
    value: "Uruoca CE",
    label: "Uruoca (CE)",
  },
  {
    value: "Urupema SC",
    label: "Urupema (SC)",
  },
  {
    value: "Urupá RO",
    label: "Urupá (RO)",
  },
  {
    value: "Urupês SP",
    label: "Urupês (SP)",
  },
  {
    value: "Urussanga SC",
    label: "Urussanga (SC)",
  },
  {
    value: "Urutaí GO",
    label: "Urutaí (GO)",
  },
  {
    value: "Uruçuca BA",
    label: "Uruçuca (BA)",
  },
  {
    value: "Uruçuí PI",
    label: "Uruçuí (PI)",
  },
  {
    value: "Urânia SP",
    label: "Urânia (SP)",
  },
  {
    value: "Utinga BA",
    label: "Utinga (BA)",
  },
  {
    value: "Vacaria RS",
    label: "Vacaria (RS)",
  },
  {
    value: "Vale Real RS",
    label: "Vale Real (RS)",
  },
  {
    value: "Vale Verde RS",
    label: "Vale Verde (RS)",
  },
  {
    value: "Vale de Săo Domingos MT",
    label: "Vale de Săo Domingos (MT)",
  },
  {
    value: "Vale do Anari RO",
    label: "Vale do Anari (RO)",
  },
  {
    value: "Vale do Paraíso RO",
    label: "Vale do Paraíso (RO)",
  },
  {
    value: "Vale do Sol RS",
    label: "Vale do Sol (RS)",
  },
  {
    value: "Valente BA",
    label: "Valente (BA)",
  },
  {
    value: "Valentim Gentil SP",
    label: "Valentim Gentil (SP)",
  },
  {
    value: "Valença BA",
    label: "Valença (BA)",
  },
  {
    value: "Valença RJ",
    label: "Valença (RJ)",
  },
  {
    value: "Valença do Piauí PI",
    label: "Valença do Piauí (PI)",
  },
  {
    value: "Valinhos SP",
    label: "Valinhos (SP)",
  },
  {
    value: "Valparaíso SP",
    label: "Valparaíso (SP)",
  },
  {
    value: "Valparaíso de Goiás GO",
    label: "Valparaíso de Goiás (GO)",
  },
  {
    value: "Vanini RS",
    label: "Vanini (RS)",
  },
  {
    value: "Vargem SC",
    label: "Vargem (SC)",
  },
  {
    value: "Vargem SP",
    label: "Vargem (SP)",
  },
  {
    value: "Vargem Alegre MG",
    label: "Vargem Alegre (MG)",
  },
  {
    value: "Vargem Alta ES",
    label: "Vargem Alta (ES)",
  },
  {
    value: "Vargem Bonita MG",
    label: "Vargem Bonita (MG)",
  },
  {
    value: "Vargem Bonita SC",
    label: "Vargem Bonita (SC)",
  },
  {
    value: "Vargem Grande MA",
    label: "Vargem Grande (MA)",
  },
  {
    value: "Vargem Grande Paulista SP",
    label: "Vargem Grande Paulista (SP)",
  },
  {
    value: "Vargem Grande do Rio P MG",
    label: "Vargem Grande do Rio Pardo (MG)",
  },
  {
    value: "Vargem Grande do Sul SP",
    label: "Vargem Grande do Sul (SP)",
  },
  {
    value: "Vargeăo SC",
    label: "Vargeăo (SC)",
  },
  {
    value: "Varginha MG",
    label: "Varginha (MG)",
  },
  {
    value: "Varjota CE",
    label: "Varjota (CE)",
  },
  {
    value: "Varjăo GO",
    label: "Varjăo (GO)",
  },
  {
    value: "Varjăo de Minas MG",
    label: "Varjăo de Minas (MG)",
  },
  {
    value: "Varre-sai RJ",
    label: "Varre-sai (RJ)",
  },
  {
    value: "Varzedo BA",
    label: "Varzedo (BA)",
  },
  {
    value: "Varzelândia MG",
    label: "Varzelândia (MG)",
  },
  {
    value: "Vassouras RJ",
    label: "Vassouras (RJ)",
  },
  {
    value: "Vazante MG",
    label: "Vazante (MG)",
  },
  {
    value: "Venda Nova do Imigrant ES",
    label: "Venda Nova do Imigrante (ES)",
  },
  {
    value: "Venha-ver RN",
    label: "Venha-ver (RN)",
  },
  {
    value: "Ventania PR",
    label: "Ventania (PR)",
  },
  {
    value: "Venturosa PE",
    label: "Venturosa (PE)",
  },
  {
    value: "Venâncio Aires RS",
    label: "Venâncio Aires (RS)",
  },
  {
    value: "Vera MT",
    label: "Vera (MT)",
  },
  {
    value: "Vera Cruz BA",
    label: "Vera Cruz (BA)",
  },
  {
    value: "Vera Cruz RN",
    label: "Vera Cruz (RN)",
  },
  {
    value: "Vera Cruz RS",
    label: "Vera Cruz (RS)",
  },
  {
    value: "Vera Cruz SP",
    label: "Vera Cruz (SP)",
  },
  {
    value: "Vera Cruz do Oeste PR",
    label: "Vera Cruz do Oeste (PR)",
  },
  {
    value: "Vera Mendes PI",
    label: "Vera Mendes (PI)",
  },
  {
    value: "Veranópolis RS",
    label: "Veranópolis (RS)",
  },
  {
    value: "Verdejante PE",
    label: "Verdejante (PE)",
  },
  {
    value: "Verdelândia MG",
    label: "Verdelândia (MG)",
  },
  {
    value: "Vereda BA",
    label: "Vereda (BA)",
  },
  {
    value: "Veredinha MG",
    label: "Veredinha (MG)",
  },
  {
    value: "Vermelho Novo MG",
    label: "Vermelho Novo (MG)",
  },
  {
    value: "Vertente do Lério PE",
    label: "Vertente do Lério (PE)",
  },
  {
    value: "Vertentes PE",
    label: "Vertentes (PE)",
  },
  {
    value: "Verê PR",
    label: "Verê (PR)",
  },
  {
    value: "Veríssimo MG",
    label: "Veríssimo (MG)",
  },
  {
    value: "Vespasiano MG",
    label: "Vespasiano (MG)",
  },
  {
    value: "Vespasiano Correa RS",
    label: "Vespasiano Correa (RS)",
  },
  {
    value: "Viadutos RS",
    label: "Viadutos (RS)",
  },
  {
    value: "Viamăo RS",
    label: "Viamăo (RS)",
  },
  {
    value: "Viana ES",
    label: "Viana (ES)",
  },
  {
    value: "Viana MA",
    label: "Viana (MA)",
  },
  {
    value: "Vianópolis GO",
    label: "Vianópolis (GO)",
  },
  {
    value: "Vicente Dutra RS",
    label: "Vicente Dutra (RS)",
  },
  {
    value: "Vicentina MS",
    label: "Vicentina (MS)",
  },
  {
    value: "Vicentinópolis GO",
    label: "Vicentinópolis (GO)",
  },
  {
    value: "Victor Graeff RS",
    label: "Victor Graeff (RS)",
  },
  {
    value: "Vicência PE",
    label: "Vicência (PE)",
  },
  {
    value: "Vidal Ramos SC",
    label: "Vidal Ramos (SC)",
  },
  {
    value: "Videira SC",
    label: "Videira (SC)",
  },
  {
    value: "Vieiras MG",
    label: "Vieiras (MG)",
  },
  {
    value: "Vieirópolis PB",
    label: "Vieirópolis (PB)",
  },
  {
    value: "Vigia PA",
    label: "Vigia (PA)",
  },
  {
    value: "Vila Alta PR",
    label: "Vila Alta (PR)",
  },
  {
    value: "Vila Bela da Santíssim MT",
    label: "Vila Bela da Santíssima Trindade (MT)",
  },
  {
    value: "Vila Boa GO",
    label: "Vila Boa (GO)",
  },
  {
    value: "Vila Flor RN",
    label: "Vila Flor (RN)",
  },
  {
    value: "Vila Flores RS",
    label: "Vila Flores (RS)",
  },
  {
    value: "Vila Lângaro RS",
    label: "Vila Lângaro (RS)",
  },
  {
    value: "Vila Maria RS",
    label: "Vila Maria (RS)",
  },
  {
    value: "Vila Nova Dos Martírio MA",
    label: "Vila Nova Dos Martírios (MA)",
  },
  {
    value: "Vila Nova do Piauí PI",
    label: "Vila Nova do Piauí (PI)",
  },
  {
    value: "Vila Nova do Sul RS",
    label: "Vila Nova do Sul (RS)",
  },
  {
    value: "Vila Pavăo ES",
    label: "Vila Pavăo (ES)",
  },
  {
    value: "Vila Propício GO",
    label: "Vila Propício (GO)",
  },
  {
    value: "Vila Rica MT",
    label: "Vila Rica (MT)",
  },
  {
    value: "Vila Valério ES",
    label: "Vila Valério (ES)",
  },
  {
    value: "Vila Velha ES",
    label: "Vila Velha (ES)",
  },
  {
    value: "Vilhena RO",
    label: "Vilhena (RO)",
  },
  {
    value: "Vinhedo SP",
    label: "Vinhedo (SP)",
  },
  {
    value: "Viradouro SP",
    label: "Viradouro (SP)",
  },
  {
    value: "Virgem da Lapa MG",
    label: "Virgem da Lapa (MG)",
  },
  {
    value: "Virginópolis MG",
    label: "Virginópolis (MG)",
  },
  {
    value: "Virgolândia MG",
    label: "Virgolândia (MG)",
  },
  {
    value: "Virgínia MG",
    label: "Virgínia (MG)",
  },
  {
    value: "Virmond PR",
    label: "Virmond (PR)",
  },
  {
    value: "Visconde do Rio Branco MG",
    label: "Visconde do Rio Branco (MG)",
  },
  {
    value: "Viseu PA",
    label: "Viseu (PA)",
  },
  {
    value: "Vista Alegre RS",
    label: "Vista Alegre (RS)",
  },
  {
    value: "Vista Alegre do Alto SP",
    label: "Vista Alegre do Alto (SP)",
  },
  {
    value: "Vista Alegre do Prata RS",
    label: "Vista Alegre do Prata (RS)",
  },
  {
    value: "Vista Gaúcha RS",
    label: "Vista Gaúcha (RS)",
  },
  {
    value: "Vista Serrana PB",
    label: "Vista Serrana (PB)",
  },
  {
    value: "Vitor Meireles SC",
    label: "Vitor Meireles (SC)",
  },
  {
    value: "Vitorino PR",
    label: "Vitorino (PR)",
  },
  {
    value: "Vitorino Freire MA",
    label: "Vitorino Freire (MA)",
  },
  {
    value: "Vitória ES",
    label: "Vitória (ES)",
  },
  {
    value: "Vitória Brasil SP",
    label: "Vitória Brasil (SP)",
  },
  {
    value: "Vitória Das Missơes RS",
    label: "Vitória Das Missơes (RS)",
  },
  {
    value: "Vitória da Conquista BA",
    label: "Vitória da Conquista (BA)",
  },
  {
    value: "Vitória de Santo Antăo PE",
    label: "Vitória de Santo Antăo (PE)",
  },
  {
    value: "Vitória do Jari AP",
    label: "Vitória do Jari (AP)",
  },
  {
    value: "Vitória do Mearim MA",
    label: "Vitória do Mearim (MA)",
  },
  {
    value: "Vitória do Xingu PA",
    label: "Vitória do Xingu (PA)",
  },
  {
    value: "Viçosa AL",
    label: "Viçosa (AL)",
  },
  {
    value: "Viçosa MG",
    label: "Viçosa (MG)",
  },
  {
    value: "Viçosa RN",
    label: "Viçosa (RN)",
  },
  {
    value: "Viçosa do Ceará CE",
    label: "Viçosa do Ceará (CE)",
  },
  {
    value: "Volta Grande MG",
    label: "Volta Grande (MG)",
  },
  {
    value: "Volta Redonda RJ",
    label: "Volta Redonda (RJ)",
  },
  {
    value: "Votorantim SP",
    label: "Votorantim (SP)",
  },
  {
    value: "Votuporanga SP",
    label: "Votuporanga (SP)",
  },
  {
    value: "Várzea PB",
    label: "Várzea (PB)",
  },
  {
    value: "Várzea RN",
    label: "Várzea (RN)",
  },
  {
    value: "Várzea Alegre CE",
    label: "Várzea Alegre (CE)",
  },
  {
    value: "Várzea Branca PI",
    label: "Várzea Branca (PI)",
  },
  {
    value: "Várzea Grande MT",
    label: "Várzea Grande (MT)",
  },
  {
    value: "Várzea Grande PI",
    label: "Várzea Grande (PI)",
  },
  {
    value: "Várzea Nova BA",
    label: "Várzea Nova (BA)",
  },
  {
    value: "Várzea Paulista SP",
    label: "Várzea Paulista (SP)",
  },
  {
    value: "Várzea da Palma MG",
    label: "Várzea da Palma (MG)",
  },
  {
    value: "Várzea da Roça BA",
    label: "Várzea da Roça (BA)",
  },
  {
    value: "Várzea do Poço BA",
    label: "Várzea do Poço (BA)",
  },
  {
    value: "Wagner BA",
    label: "Wagner (BA)",
  },
  {
    value: "Wall Ferraz PI",
    label: "Wall Ferraz (PI)",
  },
  {
    value: "Wanderley BA",
    label: "Wanderley (BA)",
  },
  {
    value: "Wanderlândia TO",
    label: "Wanderlândia (TO)",
  },
  {
    value: "Wenceslau Braz MG",
    label: "Wenceslau Braz (MG)",
  },
  {
    value: "Wenceslau Braz PR",
    label: "Wenceslau Braz (PR)",
  },
  {
    value: "Wenceslau Guimarăes BA",
    label: "Wenceslau Guimarăes (BA)",
  },
  {
    value: "Westfalia RS",
    label: "Westfalia (RS)",
  },
  {
    value: "Witmarsum SC",
    label: "Witmarsum (SC)",
  },
  {
    value: "Xambioá TO",
    label: "Xambioá (TO)",
  },
  {
    value: "Xambrê PR",
    label: "Xambrê (PR)",
  },
  {
    value: "Xangri-lá RS",
    label: "Xangri-lá (RS)",
  },
  {
    value: "Xanxerê SC",
    label: "Xanxerê (SC)",
  },
  {
    value: "Xapuri AC",
    label: "Xapuri (AC)",
  },
  {
    value: "Xavantina SC",
    label: "Xavantina (SC)",
  },
  {
    value: "Xaxim SC",
    label: "Xaxim (SC)",
  },
  {
    value: "Xexéu PE",
    label: "Xexéu (PE)",
  },
  {
    value: "Xinguara PA",
    label: "Xinguara (PA)",
  },
  {
    value: "Xique-xique BA",
    label: "Xique-xique (BA)",
  },
  {
    value: "Zabelê PB",
    label: "Zabelê (PB)",
  },
  {
    value: "Zacarias SP",
    label: "Zacarias (SP)",
  },
  {
    value: "Zortéa SC",
    label: "Zortéa (SC)",
  },
  {
    value: "pé de Serra BA",
    label: "pé de Serra (BA)",
  },
  {
    value: "zé Doca MA",
    label: "zé Doca (MA)",
  },
  {
    value: "Água Azul do Norte PA",
    label: "Água Azul do Norte (PA)",
  },
  {
    value: "Água Boa MG",
    label: "Água Boa (MG)",
  },
  {
    value: "Água Boa MT",
    label: "Água Boa (MT)",
  },
  {
    value: "Água Branca AL",
    label: "Água Branca (AL)",
  },
  {
    value: "Água Branca PB",
    label: "Água Branca (PB)",
  },
  {
    value: "Água Branca PI",
    label: "Água Branca (PI)",
  },
  {
    value: "Água Clara MS",
    label: "Água Clara (MS)",
  },
  {
    value: "Água Comprida MG",
    label: "Água Comprida (MG)",
  },
  {
    value: "Água Doce SC",
    label: "Água Doce (SC)",
  },
  {
    value: "Água Doce do Maranhăo MA",
    label: "Água Doce do Maranhăo (MA)",
  },
  {
    value: "Água Doce do Norte ES",
    label: "Água Doce do Norte (ES)",
  },
  {
    value: "Água Fria BA",
    label: "Água Fria (BA)",
  },
  {
    value: "Água Fria de Goiás GO",
    label: "Água Fria de Goiás (GO)",
  },
  {
    value: "Água Limpa GO",
    label: "Água Limpa (GO)",
  },
  {
    value: "Água Nova RN",
    label: "Água Nova (RN)",
  },
  {
    value: "Água Preta PE",
    label: "Água Preta (PE)",
  },
  {
    value: "Água Santa RS",
    label: "Água Santa (RS)",
  },
  {
    value: "Águas Belas PE",
    label: "Águas Belas (PE)",
  },
  {
    value: "Águas Formosas MG",
    label: "Águas Formosas (MG)",
  },
  {
    value: "Águas Frias SC",
    label: "Águas Frias (SC)",
  },
  {
    value: "Águas Lindas de Goiás GO",
    label: "Águas Lindas de Goiás (GO)",
  },
  {
    value: "Águas Mornas SC",
    label: "Águas Mornas (SC)",
  },
  {
    value: "Águas Vermelhas MG",
    label: "Águas Vermelhas (MG)",
  },
  {
    value: "Águas da Prata SP",
    label: "Águas da Prata (SP)",
  },
  {
    value: "Águas de Chapecó SC",
    label: "Águas de Chapecó (SC)",
  },
  {
    value: "Águas de Lindóia SP",
    label: "Águas de Lindóia (SP)",
  },
  {
    value: "Águas de Santa Bárbara SP",
    label: "Águas de Santa Bárbara (SP)",
  },
  {
    value: "Águas de Săo Pedro SP",
    label: "Águas de Săo Pedro (SP)",
  },
  {
    value: "Águia Branca ES",
    label: "Águia Branca (ES)",
  },
  {
    value: "Álvares Florence SP",
    label: "Álvares Florence (SP)",
  },
  {
    value: "Álvares Machado SP",
    label: "Álvares Machado (SP)",
  },
  {
    value: "Álvaro de Carvalho SP",
    label: "Álvaro de Carvalho (SP)",
  },
  {
    value: "Áurea RS",
    label: "Áurea (RS)",
  },
  {
    value: "Ângulo PR",
    label: "Ângulo (PR)",
  },
  {
    value: "Érico Cardoso BA",
    label: "Érico Cardoso (BA)",
  },
  {
    value: "Óbidos PA",
    label: "Óbidos (PA)",
  },
  {
    value: "Óleo SP",
    label: "Óleo (SP)",
  },
];

export default cities;
