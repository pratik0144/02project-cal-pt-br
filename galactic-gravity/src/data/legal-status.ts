/**
 * src/data/legal-status.ts
 * Fonte única de verdade para status legislativo, parâmetros trabalhistas e datas de revisão.
 * Utilizado pelo componente visível "Atualizado em" e pelo schema JSON-LD dateModified.
 */

export interface LegalStatusData {
  lastReviewed: string; // ISO 8601 (YYYY-MM-DD)
  lastReviewedFormatted: string; // pt-BR (DD/MM/AAAA)
  year: number;
  pec6x1: {
    title: string;
    statusSummary: string;
    statusDetail: string;
    inForce: boolean;
    camaraApprovalDate: string; // pt-BR
    currentChamber: string;
    proposedHours: number;
    proposedDivisor: number;
    standardHours: number;
    standardDivisor: number;
  };
  cltRules: {
    maxDailyOvertime: number; // 2 horas (Art. 59 CLT)
    minOvertimePremiumWeekday: number; // 50% (CF Art. 7 XVI)
    minOvertimePremiumSundayHoliday: number; // 100% (Lei 605/49)
    nightShiftAdditional: number; // 20% (Art. 73 CLT)
    nightShiftMinuteDuration: string; // 52min30s
  };
  sources: {
    name: string;
    url: string;
    description: string;
  }[];
}

export const legalStatus: LegalStatusData = {
  lastReviewed: "2026-10-09",
  lastReviewedFormatted: "09/10/2026",
  year: 2026,
  pec6x1: {
    title: "Proposta de Emenda à Constituição (PEC) do Fim da Escala 6x1",
    statusSummary: "Aprovada na Câmara dos Deputados em 27/05/2026; em tramitação no Senado Federal. Não está em vigor.",
    statusDetail: "A PEC propõe a redução gradual da jornada padrão semanal de 44 horas para 40 horas e a instituição da escala 5x2. Até a promulgação de emenda constitucional definitiva após votação em 2 turnos no Senado, a jornada legal vigente permanece em 44h semanais (divisor 220).",
    inForce: false,
    camaraApprovalDate: "27/05/2026",
    currentChamber: "Senado Federal",
    proposedHours: 40,
    proposedDivisor: 200,
    standardHours: 44,
    standardDivisor: 220,
  },
  cltRules: {
    maxDailyOvertime: 2,
    minOvertimePremiumWeekday: 50,
    minOvertimePremiumSundayHoliday: 100,
    nightShiftAdditional: 20,
    nightShiftMinuteDuration: "52min 30s",
  },
  sources: [
    {
      name: "Decreto-Lei nº 5.452/1943 (CLT - Art. 59 e Art. 73)",
      url: "https://www.planalto.gov.br/ccivil_03/decreto-lei/del5452.htm",
      description: "Consolidação das Leis do Trabalho: limites diários de jornada suplementar e adicional noturno."
    },
    {
      name: "Constituição da República Federativa do Brasil de 1988 (Art. 7º, XVI)",
      url: "https://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm",
      description: "Remuneração do serviço extraordinário superior, no mínimo, em 50% à do normal."
    },
    {
      name: "Lei nº 605/1949 (Repouso Semanal Remunerado)",
      url: "https://www.planalto.gov.br/ccivil_03/leis/l0605.htm",
      description: "Regulamentação do Descanso Semanal Remunerado (DSR) e pagamento de feriados civis e religiosos."
    },
    {
      name: "Lei nº 13.467/2017 (Reforma Trabalhista - Banco de Horas)",
      url: "https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2017/lei/l13467.htm",
      description: "Compensação de jornada e pactuação individual de banco de horas semestral."
    },
    {
      name: "Súmula nº 172 do TST (Reflexo de Horas Extras no DSR)",
      url: "https://www.tst.jus.br/sumulas",
      description: "Computam-se no cálculo do repouso remunerado as horas extras habitualmente prestadas."
    },
    {
      name: "Súmula nº 264 do TST (Base de Cálculo da Hora Extra)",
      url: "https://www.tst.jus.br/sumulas",
      description: "Integração de parcelas salariais fixas e adicionais na base de cálculo da hora extra."
    }
  ]
};
