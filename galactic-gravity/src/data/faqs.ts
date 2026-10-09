/**
 * src/data/faqs.ts
 * Perguntas e respostas do FAQ com renderização em HTML no servidor e JSON-LD.
 * Respostas precisas, answer-first, fundamentadas na CLT e no direito do trabalho.
 * FAQ não conta no limite de 1500 palavras do guia de SEO.
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
    question: "How to calculate DSR on overtime pay?",
    answer: "To calculate DSR (Paid Weekly Rest / Descanso Semanal Remunerado) on overtime pay under Brazilian labor law, use the official statutory formula: DSR = (Total Overtime Earnings in Month ÷ Business Days in Month) × (Sundays + Holidays). Under established labor court jurisprudence (TST Súmula 172), Saturdays count as working days for DSR apportionment, yielding a standard ratio of 26 business days to 4 rest days in a commercial month. For example, if you earned R$ 150.00 in overtime, your DSR is (R$ 150.00 ÷ 26) × 4 = R$ 23.08, bringing total overtime pay to R$ 173.08."
  },
  {
    question: "Como calcular o DSR sobre horas extras?",
    answer: "O cálculo do DSR sobre horas extras segue a fórmula oficial da Lei nº 605/1949 e da Súmula 172 do TST: DSR = (Valor total das horas extras do mês ÷ Dias úteis do mês) × Domingos e feriados. Pela jurisprudência trabalhista, o sábado é dia útil para esse cálculo. Em um mês comercial com 26 dias úteis e 4 domingos/feriados, quem acumula R$ 150,00 em horas extras recebe de DSR: (R$ 150,00 ÷ 26) × 4 = R$ 23,08. A soma total bruta devida de horas extras com DSR será de R$ 173,08. Horas extras habituais também refletem em 13º salário, férias e FGTS."
  },
  {
    question: "Como calcular horas extras 50%?",
    answer: "A hora extra com adicional de 50% é a regra geral constitucional (Art. 7º, XVI da CF/88 e Art. 59 da CLT) para trabalho excedente realizado em dias úteis, de segunda-feira a sábado. A fórmula é: Valor da HE 50% = Valor da hora normal × 1,5 × Quantidade de horas extras. Por exemplo: para quem ganha R$ 20,00 por hora normal e realiza 8 horas extras no mês em dias úteis, o cálculo é: R$ 20,00 × 1,5 = R$ 30,00 por hora extra. Multiplicando por 8 horas, o trabalhador recebe R$ 240,00 brutos, além do reflexo de DSR correspondente."
  },
  {
    question: "Como calcular horas extras 100%?",
    answer: "A hora extra com adicional de 100% incide sobre o trabalho realizado em domingos e feriados civis ou religiosos sem concessão de folga compensatória na semana (Lei nº 605/1949 e Súmula 146 do TST). A fórmula é: Valor da HE 100% = Valor da hora normal × 2,0 × Quantidade de horas extras. Se sua hora normal for R$ 20,00, a hora extra a 100% vale R$ 40,00 (o dobro). Caso trabalhe 6 horas em um feriado, o pagamento suplementar será de R$ 240,00 (6 × R$ 40,00). Convenções coletivas sindicais podem fixar percentuais ainda maiores."
  },
  {
    question: "Como calcular as horas extras trabalhadas?",
    answer: "Para calcular as horas extras trabalhadas a partir do espelho de ponto, siga quatro etapas: 1) Apure as horas diárias efetivas subtraindo o horário de entrada do horário de saída e descontando o intervalo de almoço; 2) Converta os minutos em fração decimal dividindo-os por 60 (ex: 30min = 0,5h; 48min = 0,8h); 3) Compare o total trabalhado no dia ou na semana com a jornada contratual (habitualmente 8h diárias e 44h semanais) para identificar as horas excedentes; 4) Multiplique as horas excedentes pelo salário-hora acrescido do adicional de 50% ou 100%."
  },
  {
    question: "How to calculate overtime online?",
    answer: "To calculate overtime online under Brazilian CLT regulations, enter your monthly gross salary or base hourly rate into our free calculator, choose your standard weekly workweek divisor (220 for 44h, 200 for 40h, or 180 for 36h), and input your worked hours and minutes. The tool automatically computes 50% weekday overtime, 100% Sunday/holiday double-time, and mandatory paid weekly rest (DSR) in real time with 100% browser-side privacy and PDF export."
  },
  {
    question: "What is the legal overtime rate in Brazil under CLT?",
    answer: "Under Brazilian labor law (Article 7, XVI of the Federal Constitution and Article 59 of the CLT), the statutory minimum overtime premium is 50% above the regular hourly rate for hours worked on standard workdays (Monday through Saturday). For hours worked on Sundays and national or religious holidays without compensatory time off, the statutory rate is 100% (double pay) under Law 605/1949 and TST Súmula 146. Collective labor agreements may stipulate higher premium percentages."
  },
  {
    question: "What is the maximum overtime limit allowed per day in Brazil?",
    answer: "Under Article 59 of the Brazilian Consolidation of Labor Laws (CLT), daily overtime is strictly capped at a maximum of 2 hours per day, provided there is a written individual agreement or collective bargaining agreement. Consequently, an employee on a standard 8-hour daily schedule can work a maximum of 10 hours in a single day. Exceeding the 2-hour daily limit is only authorized in exceptional force majeure or urgent emergency situations under CLT Article 61."
  },
  {
    question: "Como funciona a calculadora de horas extras com minutos?",
    answer: "A calculadora de horas extras com minutos divide o campo de lançamento diário em horas inteiras (0 a 24) e minutos (0 a 59). O sistema converte automaticamente os minutos para a base decimal financeira dividindo os minutos informados por 60. Dessa forma, turnos como 8h48min (típicos da compensação da escala de 44h semanais de segunda a sexta) e frações como 15, 30 ou 45 minutos são apurados com exatidão matemática, sem perdas por arredondamento no contracheque."
  },
  {
    question: "Qual o limite de horas extras permitido pela CLT?",
    answer: "O Artigo 59 da CLT estabelece que a jornada diária de trabalho só pode ser prorrogada em até 2 horas extras por dia, mediante acordo individual escrito, convenção ou acordo coletivo. Exceções a esse limite ocorrem apenas em casos de força maior ou serviços inadiáveis devidamente justificados (Artigo 61 da CLT). Em condições normais, um trabalhador com jornada padrão de 8 horas diárias pode trabalhar no máximo 10 horas em um mesmo dia útil."
  },
  {
    question: "O que é banco de horas e como funciona?",
    answer: "O banco de horas é um regime de compensação no qual as horas excedentes trabalhadas não são pagas em dinheiro no mês, mas acumuladas para concessão de folgas posteriores ou redução de expediente. Desde a Reforma Trabalhista (Lei 13.467/2017), o banco de horas pode ser pactuado por acordo individual escrito para compensação em até 6 meses, ou por convenção/acordo coletivo para compensação em até 1 ano. Caso as horas não sejam compensadas no prazo, devem ser quitadas com o adicional de no mínimo 50%."
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
    question: "Hora extra é descontada no imposto de renda e INSS?",
    answer: "Sim, os valores recebidos a título de horas extras e DSR possuem natureza remuneratória e integram a base de cálculo tributável do trabalhador. Sobre o total bruto incidem a contribuição previdenciária do INSS e o Imposto de Renda Retido na Fonte (IRRF), calculados segundo a tabela progressiva oficial vigente. Fazer horas extras aumenta o rendimento bruto do mês, o que pode elevar temporariamente a alíquota efetiva de retenção na fonte no respectivo contracheque."
  },
  {
    question: "O fim da escala 6x1 muda o cálculo de horas extras?",
    answer: "Atualmente, a regra legal vigente no Brasil é fixada pelo Artigo 7º, XIII da Constituição e Artigo 58 da CLT em 44 horas semanais (divisor 220). Propostas de Emenda à Constituição (como a PEC sobre o fim da escala 6x1 e redução para 40h ou 42h) estão em discussão legislativa no Congresso Nacional e não estão em vigor. Caso uma redução de jornada venha a ser formalmente aprovada e promulgada no futuro sem redução de salários, o divisor diminuirá e o valor do salário-hora aumentará, elevando o valor de cada hora extra. Até lá, prevalece a regra de 44h."
  },
  {
    question: "Quais adicionais entram no cálculo das horas extras?",
    answer: "Conforme a Súmula nº 264 do Tribunal Superior do Trabalho (TST), a remuneração da hora extra é calculada sobre a soma de todas as parcelas de natureza salarial habituais recebidas pelo empregado. Isso inclui o salário base acrescido de adicional de periculosidade (30%), adicional de insalubridade (10%, 20% ou 40%), gratificações contratuais e adicionais por tempo de serviço. Não integram a base parcelas indenizatórias, como diárias de viagem e vale-transporte."
  },
  {
    question: "A empresa pode obrigar o funcionário a fazer hora extra?",
    answer: "A empresa só pode exigir horas extras se houver previsão expressa em acordo individual de trabalho, contrato de trabalho ou convenção coletiva, respeitando o teto de 2 horas suplementares diárias (Artigo 59 da CLT). Na ausência de acordo prévio, a prestação de horas extras só se torna obrigatória em circunstâncias extraordinárias e imprevisíveis de força maior ou para conclusão de serviços inadiáveis cuja inexecução cause prejuízo manifesto ao empregador (Artigo 61 da CLT)."
  }
];
