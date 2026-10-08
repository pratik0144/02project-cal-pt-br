/**
 * src/data/faqs.ts
 * Perguntas e respostas do FAQ com renderização em HTML no servidor e JSON-LD.
 * Regras: 50 a 120 palavras por resposta, estrutura answer-first, linguagem pt-BR nativa.
 */

export interface FAQItem {
  question: string;
  answer: string;
}

export const faqs: FAQItem[] = [
  {
    question: "Como calcular horas extras?",
    answer: "Para calcular horas extras, divida seu salário bruto pelo divisor da sua jornada (220 para 44h semanais) para obter o valor da hora normal. Em seguida, multiplique a hora normal pelo adicional devido: 1,5 para 50% ou 2,0 para 100%. Por fim, multiplique esse valor pela quantidade de horas extras trabalhadas no mês. Por exemplo: com salário de R$ 2.200,00 na jornada de 44h, a hora normal é R$ 10,00 (2.200 ÷ 220). Dez horas extras com adicional de 50% totalizam R$ 150,00 (10 × R$ 10,00 × 1,5). Nossa calculadora online executa esse cálculo automaticamente."
  },
  {
    question: "Como calcular o DSR sobre o pagamento de horas extras?",
    answer: "O cálculo do DSR sobre o pagamento de horas extras segue a fórmula: DSR = (Valor total das horas extras do mês ÷ Dias úteis do mês) × Domingos e feriados. Pela Lei nº 605/1949, os sábados contam como dias úteis. Em um mês padrão com 26 dias úteis e 4 repousos (domingos e feriados), se você realizou R$ 150,00 em horas extras a 50%, o DSR será: (R$ 150,00 ÷ 26) × 4 = R$ 23,08. O valor total bruto a receber de horas extras com DSR será de R$ 173,08."
  },
  {
    question: "Como calcular o DSR sobre horas extras?",
    answer: "O reflexo do Descanso Semanal Remunerado (DSR) sobre horas extras é um direito garantido pela Súmula 172 do TST a todo trabalhador que presta horas extras habituais. Ele remunera o tempo de descanso proporcionalmente ao esforço extraordinário prestado durante a semana. Além do pagamento direto na folha do mês, a integração do DSR sobre horas extras habituais reflete no cálculo de férias acrescidas de 1/3, 13º salário, aviso prévio indenizado e depósitos do FGTS com a multa rescisória."
  },
  {
    question: "Como calcular horas extras 50%?",
    answer: "A hora extra com 50% de adicional é a regra geral para trabalho excedente realizado de segunda-feira a sábado. A fórmula é: Valor da HE 50% = Valor da hora normal × 1,5 × Quantidade de horas. Por exemplo: para quem ganha R$ 20,00 por hora normal e realiza 8 horas extras no mês em dias úteis, o cálculo é: R$ 20,00 × 1,5 = R$ 30,00 por hora extra. Multiplicando por 8 horas, o trabalhador recebe R$ 240,00 brutos, além do reflexo de DSR correspondente."
  },
  {
    question: "Como calcular horas extras 100%?",
    answer: "A hora extra com adicional de 100% incide sobre o trabalho realizado em domingos e feriados civis ou religiosos, desde que o empregador não conceda outra folga compensatória na semana. A fórmula é: Valor da HE 100% = Valor da hora normal × 2,0 × Quantidade de horas. Se sua hora normal for R$ 20,00, a hora extra a 100% vale R$ 40,00 (o dobro). Caso trabalhe 6 horas em um feriado, o pagamento será de R$ 240,00 (6 × R$ 40,00). Convenções coletivas podem fixar adicionais ainda maiores."
  },
  {
    question: "Como calcular as horas extras trabalhadas?",
    answer: "Para calcular as horas extras trabalhadas a partir do espelho de ponto, primeiro subtraia os horários de entrada e saída diários, descontando o intervalo intrajornada (almoço). Converta os minutos excedentes em números decimais dividindo os minutos por 60 (exemplo: 1h30min vira 1,5 hora; 45min vira 0,75 hora). Em seguida, some as horas que ultrapassaram a jornada contratual diária (normalmente 8h) ou semanal (44h ou 40h). Por fim, aplique a taxa de 50% ou 100% sobre o salário-hora apurado."
  },
  {
    question: "Qual o limite de horas extras permitido pela CLT?",
    answer: "O Artigo 59 da CLT estabelece que a jornada diária de trabalho só pode ser prorrogada em até 2 horas extras por dia, mediante acordo individual escrito, convenção ou acordo coletivo. Exceções a esse limite ocorrem apenas em casos de força maior ou serviços inadiáveis devidamente justificados (Artigo 61 da CLT). Em condições normais, um trabalhador com jornada padrão de 8 horas diárias pode trabalhar no máximo 10 horas em um mesmo dia útil."
  },
  {
    question: "O que é banco de horas e como funciona?",
    answer: "O banco de horas é um regime de compensação no qual as horas excedentes trabalhadas não são pagas em dinheiro, mas acumuladas para concessão de folgas futuras ou redução de expediente. Desde a Reforma Trabalhista (Lei 13.467/2017), o banco de horas pode ser pactuado por acordo individual escrito para compensação em até 6 meses, ou por convenção/acordo coletivo para compensação em até 1 ano. Caso as horas não sejam compensadas no prazo, devem ser pagas com o adicional legal de no mínimo 50%."
  },
  {
    question: "Funcionários com salário fixo têm direito à hora extra?",
    answer: "Sim, empregados mensalistas com salário fixo têm direito integral a horas extras sempre que ultrapassarem a jornada contratual pactuada e estiverem sujeitos a controle de ponto. Estão isentos de horas extras apenas os colaboradores enquadrados no Artigo 62 da CLT: profissionais que exercem cargos de gestão ou confiança (diretores e gerentes gerais com gratificação de função), trabalhadores em atividade externa incompatível com fixação de horário e empregados em teletrabalho contratados por tarefa ou produção."
  },
  {
    question: "Como calcular hora extra noturna?",
    answer: "O cálculo da hora extra noturna combina duas proteções da CLT: a redução da hora noturna urbana (52 minutos e 30 segundos, das 22h às 5h) e a cumulação de adicionais. Primeiro, calcula-se a hora com o adicional noturno de 20% previsto no Artigo 73 da CLT: Valor Noturno = Hora Normal × 1,20. Em seguida, aplica-se o adicional de hora extra sobre essa base: Valor HE Noturna 50% = Hora Normal × 1,20 × 1,50 (fator de 1,80). Se for hora extra noturna a 100%, o fator é 2,40."
  },
  {
    question: "Hora extra é descontada no imposto de renda?",
    answer: "Sim, os valores recebidos a título de horas extras e DSR possuem natureza remuneratória e integram a base de cálculo tributável do trabalhador. Sobre o total bruto incidem o desconto do INSS e a retenção do Imposto de Renda Retido na Fonte (IRRF), calculados segundo a tabela progressiva oficial vigente. Fazer horas extras aumenta o rendimento bruto do mês, o que pode temporariamente elevar a faixa de alíquota efetiva de retenção na fonte no respectivo contracheque."
  },
  {
    question: "Vale a pena fazer hora extra?",
    answer: "Do ponto de vista puramente financeiro, fazer horas extras é vantajoso porque o trabalhador recebe no mínimo 50% a 100% a mais pelo seu tempo, além do reflexo automático no DSR, férias e 13º salário. No entanto, é fundamental considerar que o aumento da renda bruta eleva os descontos de INSS e IRRF na folha. Além disso, jornadas prolongadas frequentes exigem atenção redobrada aos impactos na saúde física, mental e no convívio familiar do empregado."
  },
  {
    question: "O fim da escala 6x1 muda o cálculo de horas extras?",
    answer: "Se promulgada, a PEC do fim da escala 6x1 não extinguirá as horas extras, mas alterará dois fatores determinantes: reduzirá o gatilho semanal de 44h para 40h e diminuirá o divisor salarial de 220 para 200. Com a redução do divisor sem corte salarial, o valor da hora normal de trabalho sobe 10%, encarecendo cada hora extra em igual proporção. Atualmente, a proposta foi aprovada pela Câmara e aguarda análise no Senado, mantendo-se a regra CLT de 44h."
  },
  {
    question: "A empresa pode obrigar o funcionário a fazer hora extra?",
    answer: "A empresa só pode exigir horas extras se houver previsão expressa em acordo individual de trabalho, contrato de trabalho ou convenção coletiva, respeitando o teto de 2 horas suplementares diárias (Artigo 59 da CLT). Na ausência de acordo prévio, a prestação de horas extras só se torna obrigatória em circunstâncias extraordinárias e imprevisíveis de força maior ou para conclusão de serviços inadiáveis cuja inexecução cause prejuízo manifesto ao empregador (Artigo 61 da CLT)."
  },
  {
    question: "Como calcular o salário total com as horas extras?",
    answer: "Para apurar o salário bruto total do mês com horas extras, realize três passos: 1) apure o salário base contratual; 2) calcule o total de horas extras realizadas a 50% e a 100%; 3) calcule o reflexo do DSR sobre o total das horas extras acumuladas. A remuneração bruta total será a soma exata: Salário Base + Horas Extras 50% + Horas Extras 100% + DSR. Nossa ferramenta simula esse valor bruto consolidado instantaneamente."
  },
  {
    question: "Quais adicionais entram no cálculo das horas extras?",
    answer: "Conforme a Súmula nº 264 do Tribunal Superior do Trabalho (TST), a remuneração da hora extra é calculada sobre a soma de todas as parcelas de natureza salarial habituais recebidas pelo empregado. Isso inclui o salário base acrescido de adicional de periculosidade (30%), adicional de insalubridade (10%, 20% ou 40%), gratificações contratuais e adicionais por tempo de serviço. Não integram a base parcelas indenizatórias, como diárias de viagem e vale-transporte."
  }
];
