/**
 * src/data/legal-status.ts
 * Fonte única de verdade para status legislativo, parâmetros trabalhistas e datas de revisão.
 * Utilizado pelo componente visível "Atualizado em" e pelo schema JSON-LD dateModified.
 */

export interface LegalStatusData {
  lastReviewed: string; // ISO 8601 (YYYY-MM-DD)
  lastReviewedFormatted: string; // pt-BR (DD/MM/AAAA)
  reviewedBy: { name: string; credential: string } | null;
  year: number;
  pec6x1: {
    title: string;
    statusSummary: string;
    statusDetail: string;
    inForce: boolean;
    transitionHours: number; // 42h
    transitionDivisor: number; // 210
    proposedHours: number; // 40h
    proposedDivisor: number; // 200
    standardHours: number; // 44h
    standardDivisor: number; // 220
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
  reviewedBy: null,
  year: 2026,
  pec6x1: {
    title: "Propostas de Redução da Jornada de Trabalho (Escalas 40h e 42h)",
    statusSummary: "Propostas legislativas de redução da jornada semanal em debate no Congresso Nacional. Não estão em vigor.",
    statusDetail: "A legislação trabalhista brasileira em vigor estabelece a jornada padrão de 44 horas semanais e 8 horas diárias (Artigo 7º, XIII da CF/88 e Artigo 58 da CLT), com divisor 220. Propostas que debatem a transição para 42h ou 40h permanecem em tramitação e não produzem efeitos jurídicos imediatos. Nossa calculadora permite simular essas jornadas para quem já possui acordos coletivos específicos ou deseja planejar cenários.",
    inForce: false,
    transitionHours: 42,
    transitionDivisor: 210,
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
      name: "CLT (Decreto-Lei nº 5.452/1943 - Art. 59 e 73)",
      url: "https://www.planalto.gov.br/ccivil_03/decreto-lei/del5452.htm",
      description: "Limites de prorrogação diária e adicionais de hora extra e noturno."
    },
    {
      name: "Constituição Federal de 1988 (Art. 7º, XIII e XVI)",
      url: "https://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm",
      description: "Jornada máxima de 8h/44h e adicional extraordinário de no mínimo 50%."
    },
    {
      name: "Lei nº 605/1949 (DSR e Feriados)",
      url: "https://www.planalto.gov.br/ccivil_03/leis/l0605.htm",
      description: "Descanso semanal remunerado e trabalho em feriados civis e religiosos."
    },
    {
      name: "Súmulas 146, 172 e 264 do TST",
      url: "https://www.tst.jus.br/sumulas",
      description: "Reflexos de horas extras no DSR, trabalho em domingos e base salarial."
    }
  ]
};
