import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  ScrollView,
  Alert,
  SafeAreaView,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

/* =========================================================
   APP SCHOLAR
   32 TELAS
   ========================================================= */

const BLUE = '#0757A5';
const BLUE_DARK = '#06427D';
const BG = '#F4F7FA';
const TEXT = '#17324D';
const MUTED = '#68798A';
const BORDER = '#D9E1E8';
const RED = '#C62828';

/* =========================================================
   MÓDULOS
   ========================================================= */

const modules = [
  {
    key: 'Alunos',
    plural: 'Alunos',
    cadastro: 'CadastroAlunoScreen',
    consulta: 'ConsultaAlunosScreen',
    edicao: 'EditarAlunoScreen',
  },
  {
    key: 'Professores',
    plural: 'Professores',
    cadastro: 'CadastroProfessorScreen',
    consulta: 'ConsultaProfessoresScreen',
    edicao: 'EditarProfessorScreen',
  },
  {
    key: 'Turmas',
    plural: 'Turmas',
    cadastro: 'CadastroTurmaScreen',
    consulta: 'ConsultaTurmasScreen',
    edicao: 'EditarTurmaScreen',
  },
  {
    key: 'Cursos',
    plural: 'Cursos',
    cadastro: 'CadastroCursoScreen',
    consulta: 'ConsultaCursosScreen',
    edicao: 'EditarCursoScreen',
  },
  {
    key: 'Disciplinas',
    plural: 'Disciplinas',
    cadastro: 'CadastroDisciplinaScreen',
    consulta: 'ConsultaDisciplinasScreen',
    edicao: 'EditarDisciplinaScreen',
  },
  {
    key: 'Matrículas',
    plural: 'Matrículas',
    cadastro: 'CadastroMatriculaScreen',
    consulta: 'ConsultaMatriculasScreen',
    edicao: 'EditarMatriculaScreen',
  },
  {
    key: 'Responsáveis',
    plural: 'Responsáveis',
    cadastro: 'CadastroResponsavelScreen',
    consulta: 'ConsultaResponsaveisScreen',
    edicao: 'EditarResponsavelScreen',
  },
  {
    key: 'Avaliações',
    plural: 'Avaliações',
    cadastro: 'CadastroAvaliacaoScreen',
    consulta: 'ConsultaAvaliacoesScreen',
    edicao: 'EditarAvaliacaoScreen',
  },
  {
    key: 'Coordenadores',
    plural: 'Coordenadores',
    cadastro: 'CadastroCoordenadorScreen',
    consulta: 'ConsultaCoordenadoresScreen',
    edicao: 'EditarCoordenadorScreen',
  },
  {
    key: 'Boletins',
    plural: 'Boletins',
    cadastro: 'CadastroBoletimScreen',
    consulta: 'ConsultaBoletinsScreen',
    edicao: 'EditarBoletimScreen',
  },
];

/* =========================================================
   NOMES NO SINGULAR
   ========================================================= */

const singular = {
  Alunos: 'Aluno',
  Professores: 'Professor',
  Turmas: 'Turma',
  Cursos: 'Curso',
  Disciplinas: 'Disciplina',
  'Matrículas': 'Matrícula',
  Responsáveis: 'Responsável',
  Avaliações: 'Avaliação',
  Coordenadores: 'Coordenador',
  Boletins: 'Boletim',
};

/* =========================================================
   CAMPOS DOS FORMULÁRIOS
   ========================================================= */

const formFields = {
  Alunos: [
    ['Nome completo *', 'Digite o nome completo'],
    ['Data de nascimento *', 'dd/mm/aaaa'],
    ['CPF *', '000.000.000-00'],
    ['RA *', 'Digite o RA do aluno'],
    ['E-mail', 'Digite o e-mail'],
    ['Telefone', '(12) 99999-9999'],
    ['Curso *', 'Selecione o curso'],
    ['Turma *', 'Selecione a turma'],
  ],

  Professores: [
    ['Nome completo *', 'Digite o nome completo'],
    ['Data de nascimento *', 'dd/mm/aaaa'],
    ['CPF *', '000.000.000-00'],
    ['E-mail *', 'Digite o e-mail'],
    ['Telefone', '(12) 99999-9999'],
    [
      'Disciplina / área de atuação *',
      'Selecione a disciplina',
    ],
    ['Formação *', 'Digite a formação'],
    ['Data de admissão *', 'dd/mm/aaaa'],
  ],

  Turmas: [
    ['Nome da turma *', 'Ex.: 1º Módulo A'],
    ['Curso *', 'Selecione o curso'],
    ['Período *', 'Selecione o período'],
    ['Turno *', 'Selecione o turno'],
    ['Ano *', '2026'],
    ['Capacidade de alunos *', 'Ex.: 40'],
    ['Professor responsável', 'Selecione o professor'],
    ['Sala (opcional)', 'Ex.: Sala 12'],
    ['Observações (opcional)', 'Digite observações'],
  ],

  Cursos: [
    ['Nome do curso *', 'Digite o nome do curso'],
    ['Área *', 'Selecione a área'],
    ['Descrição', 'Digite uma descrição para o curso'],
    ['Duração *', 'Ex.: 3 anos'],
    ['Carga horária (horas) *', 'Ex.: 2400'],
    ['Modalidade *', 'Selecione a modalidade'],
    ['Status *', 'Ativo'],
  ],

  Disciplinas: [
    ['Nome da disciplina *', 'Digite o nome da disciplina'],
    ['Código da disciplina *', 'Ex.: LDG101'],
    ['Curso *', 'Selecione o curso'],
    [
      'Descrição',
      'Digite uma descrição para a disciplina',
    ],
    ['Carga horária (horas) *', 'Ex.: 80'],
    [
      'Professor responsável *',
      'Selecione o professor',
    ],
    ['Status *', 'Ativo'],
  ],

  'Matrículas': [
    ['Aluno *', 'Selecione o aluno'],
    ['Turma *', 'Selecione a turma'],
    ['Curso *', 'Selecione o curso'],
    ['Data da matrícula *', 'dd/mm/aaaa'],
    ['Ano letivo *', '2026'],
    ['Situação *', 'Ativa'],
    ['Observações (opcional)', 'Digite observações'],
  ],

  'Responsáveis': [
    ['Nome completo *', 'Digite o nome completo'],
    ['CPF *', '000.000.000-00'],
    ['RG (opcional)', 'Digite o RG'],
    ['Telefone *', '(12) 99999-9999'],
    ['E-mail (opcional)', 'Digite o e-mail'],
    ['Parentesco *', 'Selecione o parentesco'],
    ['Endereço (opcional)', 'Digite o endereço'],
    [
      'Observações (opcional)',
      'Digite observações',
    ],
  ],

  'Avaliações': [
    ['Aluno *', 'Selecione o aluno'],
    ['Disciplina *', 'Selecione a disciplina'],
    [
      'Tipo de avaliação *',
      'Selecione o tipo',
    ],
    [
      'Descrição / Título *',
      'Ex.: Prova 1º Bimestre',
    ],
    [
      'Data da avaliação *',
      'dd/mm/aaaa',
    ],
    ['Valor máximo *', 'Ex.: 10,0'],
    ['Nota obtida *', 'Ex.: 8,5'],
    [
      'Observações (opcional)',
      'Digite observações',
    ],
  ],

  Coordenadores: [
    ['Nome completo *', 'Digite o nome completo'],
    ['E-mail *', 'exemplo@escola.com.br'],
    ['Telefone *', '(12) 99999-9999'],
    [
      'Departamento *',
      'Selecione o departamento',
    ],
    [
      'Data de admissão *',
      'dd/mm/aaaa',
    ],
    [
      'Formação (opcional)',
      'Ex.: Pedagogia',
    ],
    [
      'Observações (opcional)',
      'Digite observações',
    ],
    ['Status *', 'Ativo'],
  ],

  Boletins: [
    ['Aluno *', 'Selecione o aluno'],
    ['Turma *', 'Selecione a turma'],
    [
      'Período *',
      'Ex.: 1º Bimestre / 2026',
    ],
    [
      'Data de emissão *',
      'dd/mm/aaaa',
    ],
    ['Média geral *', 'Ex.: 8,4'],
    [
      'Faltas justificadas',
      'Ex.: 3',
    ],
    [
      'Faltas não justificadas',
      'Ex.: 1',
    ],
    ['Observações', 'Digite observações'],
  ],
};

/* =========================================================
   DADOS FICTÍCIOS
   ========================================================= */

const listData = {
  Alunos: [
    'João Pedro Silva',
    'Maria Eduarda Santos',
    'Lucas Martins Oliveira',
    'Ana Clara Pereira',
    'Gabriel Souza Costa',
  ],

  Professores: [
    'Carlos Eduardo Lima',
    'Ana Paula Rodrigues',
    'Marcos Vinícius Souza',
    'Juliana Ferreira Oliveira',
    'Roberto Almeida Campos',
  ],

  Turmas: [
    '1º Módulo A',
    '1º Módulo B',
    '2º Módulo A',
    '2º Módulo B',
    '3º Módulo A',
  ],

  Cursos: [
    'Informática para Internet',
    'Administração',
    'Desenvolvimento de Sistemas',
    'Recursos Humanos',
    'Logística',
  ],

  Disciplinas: [
    'Lógica de Programação',
    'Banco de Dados I',
    'Desenvolvimento Web',
    'Matemática Aplicada',
    'Inglês Técnico',
  ],

  'Matrículas': [
    'João Pedro Silva',
    'Maria Eduarda Santos',
    'Carlos Alberto Lima',
    'Ana Clara Souza',
    'Lucas Gabriel Pereira',
  ],

  'Responsáveis': [
    'Ana Beatriz Santos',
    'Carlos Alberto Lima',
    'Juliana Pereira Costa',
    'Roberto Oliveira Silva',
    'Fernanda Souza Mendes',
  ],

  'Avaliações': [
    'Prova 1º Bimestre',
    'Trabalho em Grupo',
    'Prova 2º Bimestre',
    'Seminário',
    'Prova Final',
  ],

  Coordenadores: [
    'Maria de Fátima Martins',
    'Carlos Eduardo Lima',
    'Ana Clara Souza',
    'Roberto Oliveira Silva',
  ],

  Boletins: [
    'João Pedro Silva',
    'Maria Eduarda Santos',
    'Carlos Alberto Lima',
    'Ana Clara Souza',
    'Lucas Gabriel Pereira',
  ],
};

/* =========================================================
   TÍTULO DAS PÁGINAS
   ========================================================= */

function HeaderTitle({ title, subtitle }) {
  return (
    <View style={styles.pageTitle}>
      <Text style={styles.pageTitleText}>
        {title}
      </Text>

      {subtitle && (
        <Text style={styles.pageSubtitle}>
          {subtitle}
        </Text>
      )}
    </View>
  );
}

/* =========================================================
   NAVEGAÇÃO INFERIOR
   ========================================================= */

function BottomNav({ navigation, module }) {
  return (
    <View style={styles.bottomNav}>

      <Pressable
        style={styles.bottomItem}
        onPress={() =>
          navigation.navigate('HomeScreen')
        }
      >
        <Text style={styles.bottomIcon}>
          ⌂
        </Text>

        <Text style={styles.bottomText}>
          Home
        </Text>
      </Pressable>

      <Pressable
        style={styles.bottomItem}
        onPress={() =>
          navigation.navigate(module.consulta)
        }
      >
        <Text style={styles.bottomIcon}>
          ☷
        </Text>

        <Text style={styles.bottomText}>
          {module.key}
        </Text>
      </Pressable>

      <Pressable
        style={styles.bottomItem}
        onPress={() =>
          navigation.navigate('SobreScreen')
        }
      >
        <Text style={styles.bottomIcon}>
          ⓘ
        </Text>

        <Text style={styles.bottomText}>
          Sobre
        </Text>
      </Pressable>

    </View>
  );
}

/* =========================================================
   BOTÃO PRINCIPAL
   ========================================================= */

function PrimaryButton({
  title,
  onPress,
  danger = false,
}) {
  return (
    <Pressable
      style={[
        styles.primaryButton,
        danger && styles.dangerButton,
      ]}
      onPress={onPress}
    >
      <Text style={styles.primaryButtonText}>
        {title}
      </Text>
    </Pressable>
  );
}

/* =========================================================
   BOTÃO SECUNDÁRIO
   ========================================================= */

function SecondaryButton({
  title,
  onPress,
}) {
  return (
    <Pressable
      style={styles.secondaryButton}
      onPress={onPress}
    >
      <Text style={styles.secondaryButtonText}>
        {title}
      </Text>
    </Pressable>
  );
}

/* =========================================================
   FORMULÁRIO
   ========================================================= */

function FormScreen({
  navigation,
  module,
  editing = false,
}) {
  const fields =
    formFields[module.key] || [];

  const [values, setValues] =
    useState({});

  const save = () => {
    Alert.alert(
      'APP Scholar',
      editing
        ? `${module.key} atualizado com sucesso!`
        : `${module.key} cadastrado com sucesso!`
    );
  };

  return (
    <SafeAreaView style={styles.safe}>

      <ScrollView
        contentContainerStyle={
          styles.scrollContent
        }
      >

        <HeaderTitle
          title={
            editing
              ? `Editar ${singular[module.key]}`
              : `Cadastro de ${singular[module.key]}`
          }
          subtitle={
            editing
              ? 'Atualize as informações e clique em salvar.'
              : 'Preencha as informações abaixo para cadastrar um novo registro.'
          }
        />

        <View style={styles.formCard}>

          <Text style={styles.cardTitle}>
            {module.key === 'Alunos' ||
            module.key === 'Professores' ||
            module.key === 'Coordenadores'
              ? `Dados do ${singular[module.key]}`
              : `Dados da ${singular[module.key]}`}
          </Text>

          {fields.map(
            ([label, placeholder], index) => (

              <View
                key={`${label}-${index}`}
                style={styles.fieldBox}
              >

                <Text style={styles.label}>
                  {label}
                </Text>

                <TextInput
                  style={styles.input}
                  placeholder={placeholder}
                  placeholderTextColor="#9AA7B2"
                  value={values[index] || ''}
                  onChangeText={(text) =>
                    setValues((old) => ({
                      ...old,
                      [index]: text,
                    }))
                  }
                />

              </View>

            )
          )}

          <View style={styles.formActions}>

            <View style={styles.actionHalf}>
              <SecondaryButton
                title="Cancelar"
                onPress={() =>
                  navigation.goBack()
                }
              />
            </View>

            <View style={styles.actionHalf}>
              <PrimaryButton
                title="▣  Salvar"
                onPress={save}
              />
            </View>

          </View>

        </View>

        <BottomNav
          navigation={navigation}
          module={module}
        />

      </ScrollView>

    </SafeAreaView>
  );
}

/* =========================================================
   TELA DE CONSULTA
   ========================================================= */

function ListScreen({
  navigation,
  module,
}) {
  const [search, setSearch] =
    useState('');

  const data =
    listData[module.key] || [];

  const filtered =
    data.filter((item) =>
      item
        .toLowerCase()
        .includes(search.toLowerCase())
    );

  return (
    <SafeAreaView style={styles.safe}>

      <ScrollView
        contentContainerStyle={
          styles.scrollContent
        }
      >

        <HeaderTitle
          title={module.plural}
          subtitle="Pesquise ou selecione um registro para visualizar, editar ou excluir."
        />

        <View style={styles.searchRow}>

          <TextInput
            style={styles.searchInput}
            placeholder={`Pesquisar em ${module.plural.toLowerCase()}...`}
            placeholderTextColor="#9AA7B2"
            value={search}
            onChangeText={setSearch}
          />

          <View style={styles.filterButton}>
            <Text style={styles.filterText}>
              ⚑
            </Text>
          </View>

        </View>

        <PrimaryButton
          title={`＋ Novo ${singular[module.key]}`}
          onPress={() =>
            navigation.navigate(
              module.cadastro
            )
          }
        />

        {filtered.map(
          (item, index) => (

            <View
              key={`${item}-${index}`}
              style={styles.listCard}
            >

              <View style={styles.avatar}>
                <Text
                  style={styles.avatarText}
                >
                  {item.charAt(0)}
                </Text>
              </View>

              <View
                style={styles.listInfo}
              >

                <Text
                  style={styles.listName}
                >
                  {item}
                </Text>

                <Text
                  style={styles.listDetail}
                >
                  {module.key === 'Alunos'
                    ? `RA: 202400${index + 1}  •  Curso: Informática para Internet`
                    : module.key ===
                      'Professores'
                    ? 'E-mail: contato@escola.com.br  •  Status: Ativo'
                    : module.key === 'Turmas'
                    ? 'Curso: Desenvolvimento de Sistemas  •  Ano: 2026'
                    : module.key === 'Cursos'
                    ? 'Área: Tecnologia da Informação  •  Duração: 3 anos'
                    : module.key ===
                      'Disciplinas'
                    ? `Código: LDG10${index + 1}  •  Carga horária: 80h`
                    : module.key ===
                      'Matrículas'
                    ? 'Turma: 2º Ano A  •  Situação: Ativa'
                    : module.key ===
                      'Responsáveis'
                    ? 'Telefone: (12) 99999-9999  •  Parentesco: Pai'
                    : module.key ===
                      'Avaliações'
                    ? 'Aluno: João Pedro Silva  •  Nota: 8,5'
                    : module.key ===
                      'Coordenadores'
                    ? 'Departamento: Administrativo  •  Status: Ativo'
                    : 'Período: 1º Bimestre / 2026  •  Média: 8,4'}
                </Text>

              </View>

              <View style={styles.rowActions}>

                <Pressable
                  onPress={() =>
                    navigation.navigate(
                      module.edicao
                    )
                  }
                  style={styles.iconButton}
                >
                  <Text
                    style={styles.editIcon}
                  >
                    ✎
                  </Text>
                </Pressable>

                <Pressable
                  onPress={() =>
                    Alert.alert(
                      'Excluir registro',
                      `Deseja excluir "${item}"?`,
                      [
                        {
                          text: 'Cancelar',
                          style: 'cancel',
                        },
                        {
                          text: 'Excluir',
                          style: 'destructive',
                        },
                      ]
                    )
                  }
                  style={styles.iconButton}
                >
                  <Text
                    style={styles.deleteIcon}
                  >
                    ▥
                  </Text>
                </Pressable>

              </View>

            </View>

          )
        )}

        {filtered.length === 0 && (
          <View style={styles.emptyCard}>
            <Text style={styles.emptyText}>
              Nenhum registro encontrado.
            </Text>
          </View>
        )}

        <BottomNav
          navigation={navigation}
          module={module}
        />

      </ScrollView>

    </SafeAreaView>
  );
}

/* =========================================================
   HOME
   ========================================================= */

function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.safe}>

      <ScrollView
        contentContainerStyle={
          styles.homeContainer
        }
      >

        <View style={styles.logoFake}>

          <Text style={styles.logoSymbol}>
            ◆
          </Text>

          <Text style={styles.logoText}>
            APP_SCHOLAR
          </Text>

          <Text style={styles.logoSub}>
            Sistema Acadêmico Escolar
          </Text>

        </View>

        <Text style={styles.welcome}>
          Bem-vindo!
        </Text>

        <Text style={styles.homeSubtitle}>
          Selecione uma opção para gerenciar
          os dados acadêmicos.
        </Text>

        <View style={styles.grid}>

          {modules.map((module) => (

            <Pressable
              key={module.key}
              style={styles.moduleButton}
              onPress={() =>
                navigation.navigate(
                  module.consulta
                )
              }
            >

              <Text
                style={styles.moduleIcon}
              >
                {module.key === 'Alunos'
                  ? '♙'
                  : module.key ===
                    'Professores'
                  ? '♟'
                  : module.key ===
                    'Turmas'
                  ? '♧'
                  : module.key ===
                    'Cursos'
                  ? '◆'
                  : module.key ===
                    'Disciplinas'
                  ? '▤'
                  : module.key ===
                    'Matrículas'
                  ? '▧'
                  : module.key ===
                    'Responsáveis'
                  ? '♙'
                  : module.key ===
                    'Avaliações'
                  ? '☆'
                  : module.key ===
                    'Coordenadores'
                  ? '♟'
                  : '▤'}
              </Text>

              <Text
                style={styles.moduleText}
              >
                {module.key}
              </Text>

            </Pressable>

          ))}

        </View>

        <Pressable
          style={styles.aboutButton}
          onPress={() =>
            navigation.navigate(
              'SobreScreen'
            )
          }
        >
          <Text
            style={styles.aboutButtonText}
          >
            ⓘ  Sobre o aplicativo
          </Text>
        </Pressable>

      </ScrollView>

    </SafeAreaView>
  );
}

/* =========================================================
   SOBRE
   ========================================================= */

function SobreScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.safe}>

      <ScrollView
        contentContainerStyle={
          styles.scrollContent
        }
      >

        <View style={styles.aboutLogo}>

          <Text style={styles.logoSymbol}>
            ◆
          </Text>

        </View>

        <HeaderTitle
          title="APP_SCHOLAR"
          subtitle="Sistema Acadêmico Escolar"
        />

        <View style={styles.infoCard}>

          <Text style={styles.infoTitle}>
            ⓘ  Sobre o App
          </Text>

          <Text style={styles.infoText}>
            O APP Scholar é um sistema
            acadêmico mobile para
            gerenciamento de informações
            escolares.
          </Text>

          <Text style={styles.infoTitle}>
            ◎  Objetivo
          </Text>

          <Text style={styles.infoText}>
            Facilitar o gerenciamento de
            alunos, professores, cursos,
            disciplinas, matrículas,
            turmas, avaliações,
            responsáveis, coordenadores
            e boletins.
          </Text>

          <Text style={styles.infoTitle}>
            ▣  Tecnologia
          </Text>

          <Text style={styles.infoText}>
            Interface desenvolvida em
            React Native utilizando Expo
            e navegação por telas.
          </Text>

          <Text style={styles.version}>
            Versão 1.0.0
          </Text>

        </View>

        <SecondaryButton
          title="Voltar"
          onPress={() =>
            navigation.goBack()
          }
        />

      </ScrollView>

    </SafeAreaView>
  );
}

/* =========================================================
   CRIAÇÃO DOS COMPONENTES DAS 30 TELAS
   ========================================================= */

const screenComponents = {};

modules.forEach((module) => {

  screenComponents[
    module.cadastro
  ] = function CadastroScreen({
    navigation,
  }) {
    return (
      <FormScreen
        navigation={navigation}
        module={module}
        editing={false}
      />
    );
  };

  screenComponents[
    module.consulta
  ] = function ConsultaScreen({
    navigation,
  }) {
    return (
      <ListScreen
        navigation={navigation}
        module={module}
      />
    );
  };

  screenComponents[
    module.edicao
  ] = function EdicaoScreen({
    navigation,
  }) {
    return (
      <FormScreen
        navigation={navigation}
        module={module}
        editing={true}
      />
    );
  };

});

/* =========================================================
   APP / NAVEGAÇÃO
   ========================================================= */

export default function App() {

  return (
    <NavigationContainer>

      <Stack.Navigator
        initialRouteName="HomeScreen"
        screenOptions={{
          headerStyle: {
            backgroundColor: BLUE,
          },

          headerTintColor: '#FFFFFF',

          headerTitleStyle: {
            fontWeight: 'bold',
          },

          headerBackTitle: 'Voltar',

          contentStyle: {
            backgroundColor: BG,
          },
        }}
      >

        {/* =================================================
            1 - HOME
           ================================================= */}

        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            title: 'Home',
          }}
        />

        {/* =================================================
            2 - SOBRE
           ================================================= */}

        <Stack.Screen
          name="SobreScreen"
          component={SobreScreen}
          options={{
            title: 'Sobre',
          }}
        />

        {/* =================================================
            3 A 32 - MÓDULOS
           ================================================= */}

        {modules.map((module) => (

          <React.Fragment
            key={module.key}
          >

            <Stack.Screen
              name={module.cadastro}
              component={
                screenComponents[
                  module.cadastro
                ]
              }
              options={{
                title:
                  module.key ===
                  'Matrículas'
                    ? 'Nova Matrícula'
                    : `Cadastro de ${singular[
                        module.key
                      ]}`,
              }}
            />

            <Stack.Screen
              name={module.consulta}
              component={
                screenComponents[
                  module.consulta
                ]
              }
              options={{
                title: module.plural,
              }}
            />

            <Stack.Screen
              name={module.edicao}
              component={
                screenComponents[
                  module.edicao
                ]
              }
              options={{
                title:
                  module.key ===
                  'Matrículas'
                    ? 'Detalhes da Matrícula'
                    : module.key ===
                      'Boletins'
                    ? 'Detalhes do Boletim'
                    : `Editar ${singular[
                        module.key
                      ]}`,
              }}
            />

          </React.Fragment>

        ))}

      </Stack.Navigator>

    </NavigationContainer>
  );
}

/* =========================================================
   ESTILOS
   ========================================================= */

const styles = StyleSheet.create({

  safe: {
    flex: 1,
    backgroundColor: BG,
  },

  scrollContent: {
    padding: 16,
    paddingBottom: 30,
  },

  homeContainer: {
    padding: 18,
    paddingBottom: 35,
    alignItems: 'center',
    backgroundColor: BG,
  },

  logoFake: {
    width: 170,
    height: 120,
    borderRadius: 18,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: BORDER,
  },

  logoSymbol: {
    color: BLUE,
    fontSize: 34,
    fontWeight: 'bold',
  },

  logoText: {
    color: BLUE_DARK,
    fontSize: 19,
    fontWeight: 'bold',
    marginTop: 4,
  },

  logoSub: {
    color: MUTED,
    fontSize: 10,
    marginTop: 2,
  },

  welcome: {
    fontSize: 21,
    fontWeight: 'bold',
    color: BLUE_DARK,
    marginTop: 8,
  },

  homeSubtitle: {
    color: MUTED,
    textAlign: 'center',
    marginBottom: 16,
    marginTop: 4,
  },

  grid: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },

  moduleButton: {
    width: '48%',
    minHeight: 78,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: BORDER,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 1,
  },

  moduleIcon: {
    color: BLUE,
    fontSize: 25,
    marginBottom: 4,
  },

  moduleText: {
    color: TEXT,
    fontSize: 13,
    fontWeight: '600',
  },

  aboutButton: {
    width: '100%',
    backgroundColor: BLUE,
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 5,
  },

  aboutButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 15,
  },

  pageTitle: {
    marginBottom: 14,
  },

  pageTitleText: {
    fontSize: 21,
    fontWeight: 'bold',
    color: BLUE_DARK,
  },

  pageSubtitle: {
    fontSize: 12,
    color: MUTED,
    marginTop: 4,
    lineHeight: 18,
  },

  searchRow: {
    flexDirection: 'row',
    marginBottom: 10,
  },

  searchInput: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: BORDER,
    borderRadius: 8,
    paddingHorizontal: 13,
    height: 45,
    color: TEXT,
  },

  filterButton: {
    width: 45,
    height: 45,
    marginLeft: 7,
    borderRadius: 8,
    backgroundColor: BLUE,
    alignItems: 'center',
    justifyContent: 'center',
  },

  filterText: {
    color: '#FFFFFF',
    fontSize: 19,
  },

  primaryButton: {
    backgroundColor: BLUE,
    borderRadius: 7,
    minHeight: 43,
    paddingHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },

  primaryButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
  },

  dangerButton: {
    backgroundColor: RED,
  },

  secondaryButton: {
    minHeight: 43,
    borderWidth: 1,
    borderColor: '#AAB7C2',
    borderRadius: 7,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    marginBottom: 10,
  },

  secondaryButtonText: {
    color: TEXT,
    fontWeight: '600',
    fontSize: 14,
  },

  listCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 9,
    borderWidth: 1,
    borderColor: BORDER,
    padding: 11,
    marginBottom: 9,
    flexDirection: 'row',
    alignItems: 'center',
  },

  avatar: {
    width: 43,
    height: 43,
    borderRadius: 22,
    backgroundColor: '#E7F0F8',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },

  avatarText: {
    color: BLUE,
    fontSize: 18,
    fontWeight: 'bold',
  },

  listInfo: {
    flex: 1,
  },

  listName: {
    color: TEXT,
    fontWeight: 'bold',
    fontSize: 14,
    marginBottom: 3,
  },

  listDetail: {
    color: MUTED,
    fontSize: 10.5,
    lineHeight: 15,
  },

  rowActions: {
    flexDirection: 'row',
    marginLeft: 4,
  },

  iconButton: {
    padding: 6,
  },

  editIcon: {
    color: BLUE,
    fontSize: 18,
  },

  deleteIcon: {
    color: RED,
    fontSize: 17,
  },

  emptyCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 30,
    alignItems: 'center',
    marginTop: 10,
  },

  emptyText: {
    color: MUTED,
  },

  formCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: BORDER,
    padding: 14,
  },

  cardTitle: {
    color: BLUE_DARK,
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 12,
  },

  fieldBox: {
    marginBottom: 10,
  },

  label: {
    color: TEXT,
    fontSize: 11,
    fontWeight: '600',
    marginBottom: 5,
  },

  input: {
    height: 43,
    borderWidth: 1,
    borderColor: BORDER,
    borderRadius: 6,
    paddingHorizontal: 11,
    color: TEXT,
    backgroundColor: '#FFFFFF',
    fontSize: 12,
  },

  formActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 8,
    marginTop: 5,
  },

  actionHalf: {
    flex: 1,
  },

  bottomNav: {
    marginTop: 18,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderColor: BORDER,
    minHeight: 58,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: 8,
  },

  bottomItem: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    paddingVertical: 6,
  },

  bottomIcon: {
    color: BLUE,
    fontSize: 18,
  },

  bottomText: {
    color: MUTED,
    fontSize: 9,
    marginTop: 2,
  },

  aboutLogo: {
    width: 80,
    height: 80,
    borderRadius: 15,
    backgroundColor: '#FFFFFF',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: BORDER,
    marginBottom: 12,
  },

  infoCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: BORDER,
    padding: 16,
    marginBottom: 15,
  },

  infoTitle: {
    color: BLUE_DARK,
    fontWeight: 'bold',
    fontSize: 14,
    marginTop: 7,
    marginBottom: 5,
  },

  infoText: {
    color: TEXT,
    fontSize: 12,
    lineHeight: 19,
    marginBottom: 10,
  },

  version: {
    color: MUTED,
    textAlign: 'center',
    fontSize: 11,
    marginTop: 8,
  },

});

