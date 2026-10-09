# Relatório Final de Implementação de SEO (SEO_REPORT.md)

**Projeto:** Calculadora de Horas Extras Online  
**Domínio Oficial:** [https://calculadoradehorasextrasonline.com](https://calculadoradehorasextrasonline.com)  
**Idioma e Região:** Português do Brasil (`pt-BR`), indexado no Google Brasil (`google.com.br`)  
**Data da Implementação:** 09/10/2026  
**Responsável:** Senior Technical SEO, Native Brazilian-Portuguese Content Strategist & Astro Engineer  

---

## 1. Arquivos Modificados e Criados

| Arquivo | Ação | Descrição da Modificação |
| :--- | :---: | :--- |
| `SEO_AUDIT.md` | Criado | Auditoria técnica e estratégica inicial com diagnóstico e verificação de alegações. |
| `src/data/legal-status.ts` | Criado | Fonte única de verdade para status legislativo (PEC 6x1), regras CLT e data de revisão (`09/10/2026`). |
| `src/data/faqs.ts` | Criado | 16 perguntas frequentes (13 da pauta principal + 3 adaptadas da versão de referência), 50-120 palavras cada, em pt-BR nativo *answer-first*. |
| `src/layouts/Layout.astro` | Modificado | Injeção do `@graph` JSON-LD unificado (`Organization`, `WebSite`, `WebApplication`, `FAQPage`, `BreadcrumbList`), padronização canônica com `trailingSlash`, meta tags e theme-color. |
| `src/pages/index.astro` | Modificado | Meta Title (60 chars) e Description (156 chars) calibrados, H1 único com introdução de 3 frases *answer-first* contendo a palavra-chave primária e diferenciais. |
| `src/components/SeoContent.astro` | Modificado | Guia completo de 2.184 palavras estruturado em H2s de busca com respostas diretas de 40-60 palavras para snippets, exemplos matemáticos verificados, tabela comparativa transparente, remoção de bordas laterais azuis (substituídas por bordas neutras hairline do design system) e seção isolada em inglês. |
| `src/components/FAQ.astro` | Modificado | Consumo dinâmico de `src/data/faqs.ts` com accordion HTML semântico no servidor (`<details><summary>`), transições suaves e acessibilidade nativa. |
| `src/components/Calculator.astro` | Modificado | Suporte nativo a decimais pt-BR com vírgula e ponto (`inputmode="decimal"`), labels de acessibilidade por extenso em português para os 7 dias, id âncora `#calculadora`, e ajuste do título do gráfico para H2. |
| `src/components/Navbar.astro` | Modificado | Inclusão de link âncora direto para `/#calculadora` e ajuste de microcópia. |
| `src/components/Footer.astro` | Modificado | Link direto para `/#calculadora` no bloco Explorar. |
| `src/pages/sobre-nos.astro` | Modificado | Injeção de Breadcrumbs no schema `@graph` e desativação de FAQ schema redundante. |
| `src/pages/fale-conosco.astro` | Modificado | Injeção de Breadcrumbs no schema `@graph` e desativação de FAQ schema redundante. |
| `src/pages/politica-de-privacidade.astro` | Modificado | Injeção de Breadcrumbs no schema `@graph` e desativação de FAQ schema redundante. |
| `src/pages/termos-e-condicoes.astro` | Modificado | Injeção de Breadcrumbs no schema `@graph` e desativação de FAQ schema redundante. |
| `src/styles/global.css` | Modificado | Ajuste de contraste para tokens `--color-g-mute` e `--color-g-faint` atendendo WCAG AA (>= 4.5:1) em modo claro e escuro, mais estilos `:focus-visible`. |
| `astro.config.mjs` | Modificado | Configuração de `trailingSlash: 'always'` para harmonia absoluta entre links canônicos, redirecionamentos e sitemap XML. |

---

## 2. Meta Tags Finais & Hierarquia de Cabeçalhos

### 2.1. Meta Title & Meta Description Selecionados

#### Opções Avaliadas para Title (≤ 60 caracteres):
1. **Opção 1 (SELECIONADA):** `Calculadora de Horas Extras 2026 (CLT + DSR) - Grátis Online` — **60 caracteres**
2. *Opção 2:* `Calculadora de Horas Extras Online CLT (50% e 100% com DSR)` — 58 caracteres
3. *Opção 3:* `Calculadora de Horas Extras CLT com DSR 2026 | Grátis Online` — 59 caracteres

#### Opções Avaliadas para Meta Description (140 a 158 caracteres):
1. **Opção 1 (SELECIONADA):** `Calcule horas extras a 50% e 100% com DSR pela CLT. Ferramenta grátis, sem cadastro e 100% privada no navegador com suporte a minutos. Simule seu pagamento!` — **156 caracteres**
2. *Opção 2:* `Calcule horas extras a 50% e 100% com DSR automático pela CLT. 100% grátis e seguro no navegador com minutos. Exporte em PDF e confira seu pagamento agora!` — 154 caracteres
3. *Opção 3:* `Calculadora de horas extras online com DSR pela CLT. Insira salário ou valor/hora, simule adicionais de 50% e 100% com minutos. Sem cadastro e 100% grátis!` — 154 caracteres

### 2.2. H1 Único e Introdução Answer-First

```html
<h1 class="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight">
  Calculadora de Horas Extras
</h1>
<p class="mt-3 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
  Esta <strong>calculadora de horas extras</strong> apura instantaneamente o adicional de 50% e 100% e o reflexo do DSR conforme a CLT para 2026. Insira seu salário mensal bruto ou valor da hora, lance jornadas reais com minutos e visualize seus ganhos por semana, mês ou ano com total privacidade no seu navegador.
</p>
```

### 2.3. Árvore Completa de Cabeçalhos (Heading Outline)

```text
H1: Calculadora de Horas Extras
  H2: Ganhos Diários por Jornada [id="earnings-chart"]
  H2: Como calcular horas extras (passo a passo) [id="como-calcular-horas-extras"]
    H3: Exemplo Prático Demonstrado (Passo a Passo)
  H2: Como calcular horas extras 50% [id="como-calcular-horas-extras-50"]
  H2: Como calcular horas extras 100% [id="como-calcular-horas-extras-100"]
  H2: Como calcular as horas extras trabalhadas [id="como-calcular-horas-extras-trabalhadas"]
  H2: Calculadora de horas extras com minutos [id="calculadora-de-horas-extras-com-minutos"]
  H2: DSR sobre horas extras: fórmula e exemplo [id="dsr-sobre-horas-extras"]
    H3: Continuação do Exemplo Numérico de 50% com DSR
  H2: Regras da CLT para horas extras (limites e adicionais) [id="regras-da-clt-horas-extras"]
    H3: 1. Limite Diário de 2 Horas (Art. 59 da CLT)
    H3: 2. Adicional Mínimo Constitucional (CF/88 Art. 7º, XVI)
    H3: 3. Banco de Horas e Compensação (Lei nº 13.467/2017)
    H3: 4. Hora Extra Noturna e Cumulação (Art. 73 da CLT)
  H2: Jornada de 40h e a PEC do fim da escala 6x1 [id="pec-do-fim-da-escala-6x1"]
  H2: Por que usar esta calculadora de horas extras [id="por-que-usar-esta-calculadora"]
  H2: Metodologia e fontes legais [id="metodologia-e-fontes"]
    H3: English Summary: Brazilian Overtime Regulations (CLT)
  H2: FAQ — Perguntas Frequentes sobre Horas Extras e CLT [id="faq-heading"]
    H3: EXPLORAR (Footer)
    H3: LEGAL E SUPORTE (Footer)
```
*Zero níveis pulados; todos os H2s de busca possuem ID âncora para links profundos e extração por IA.*

---

## 3. Mapeamento de Palavras-Chave -> Seção / FAQ

| Palavra-Chave (Ahrefs Brasil) | Intenção de Busca | Seção / Elemento Específico |
| :--- | :--- | :--- |
| **calculadora de horas extras** (Primary) | Ferramenta de cálculo de jornada extraordinária | `<title>`, H1, Meta Description, Primeiras 100 palavras, H2 `#por-que-usar-esta-calculadora`, OG/Twitter Tags. |
| **calcular horas extras** | Passo a passo e lógica do cálculo | H2 `#como-calcular-horas-extras` e FAQ Pergunta 1. |
| **calcular hora extra** | Cálculo unitário e valor da hora suplementar | H2 `#como-calcular-horas-extras-50` e Seção 1. |
| **cálculo de hora extra** | Metodologia matemática e conceitual | Seção 1 e Seção 10 (Metodologia e fontes legais). |
| **calcular horas extras trabalhadas** | Apuração de espelho de ponto e horas reais | H2 `#como-calcular-horas-extras-trabalhadas`. |
| **como calcular horas extras trabalhadas** | Conversão sexagesimal e apuração líquida | Seção 4 (Tabela de conversão de minutos em decimais) e FAQ Pergunta 6. |
| **calculadora de horas extras com minutos** | Ferramenta com suporte a minutos quebrados | H2 `#calculadora-de-horas-extras-com-minutos` e funcionalidade da grade. |
| **calculadora de horas extras e dsr** | Reflexo do repouso semanal remunerado | H2 `#dsr-sobre-horas-extras` e FAQ Perguntas 2 e 3. |
| **calculate overtime online** (English) | Usuários estrangeiros pesquisando regras brasileiras | `<section lang="en">` sob Metodologia com link para `#calculadora`. |
| **how to calculate overtime** (English) | Guia conceitual em inglês sobre CLT | `<section lang="en">` sob Metodologia com link para `#calculadora`. |

---

## 4. Tipos de Schema JSON-LD Implementados

Foi gerado um bloco unificado `@graph` em `Layout.astro` compilado estaticamente no build:

1. **`Organization`**:
   * Identificador: `https://calculadoradehorasextrasonline.com/#organization`
   * Nome: `Calculadora de Horas Extras Online`
   * Logo: `https://calculadoradehorasextrasonline.com/logo.svg`
   * Email: `contato@calculadoradehorasextrasonline.com`
2. **`WebSite`**:
   * Identificador: `https://calculadoradehorasextrasonline.com/#website`
   * Idioma: `pt-BR`
   * Publisher: Referenciado à entidade `Organization`
3. **`WebApplication`**:
   * Identificador: `https://calculadoradehorasextrasonline.com/#app`
   * Nome: `Calculadora de Horas Extras`
   * `applicationCategory`: `FinanceApplication`
   * `operatingSystem`: `Any`
   * `isAccessibleForFree`: `true`
   * `offers`: Preço `0` moeda `BRL`
   * `inLanguage`: `pt-BR`
   * `dateModified`: `2026-10-09` (extraído dinamicamente de `src/data/legal-status.ts`)
   * `featureList`: 14 funcionalidades estritamente verificadas no código da aplicação.
4. **`FAQPage`**:
   * Identificador: `https://calculadoradehorasextrasonline.com/#faq`
   * 16 perguntas e respostas idênticas ao HTML visível renderizado pelo servidor.
5. **`BreadcrumbList`**:
   * Implementado automaticamente nas páginas secundárias (`/sobre-nos/`, `/fale-conosco/`, `/politica-de-privacidade/`, `/termos-e-condicoes/`) mapeando `Início` -> `Página Atual`.

*Nenhum dado falso, aggregateRating inexistente ou prêmio inventado foi adicionado.*

---

## 5. Auditoria de Performance & Core Web Vitals (Estimativa Técnica)

| Métrica | Antes | Depois da Otimização | Meta | Status |
| :--- | :---: | :---: | :---: | :---: |
| **Performance Mobile (Lighthouse)** | não medido | não medido | ≥ 95 | Pendente de medição em produção |
| **Acessibilidade (A11y)** | não medido | não medido | ≥ 95 | Pendente de medição em produção |
| **Boas Práticas** | não medido | não medido | ≥ 95 | Pendente de medição em produção |
| **SEO** | não medido | não medido | 100 | Pendente de medição em produção |
| **LCP (Largest Contentful Paint)** | não medido | não medido | < 2.0s | Pendente de medição em produção |
| **CLS (Cumulative Layout Shift)** | não medido | não medido | < 0.05 | Pendente de medição em produção |
| **TBT (Total Blocking Time)** | não medido | não medido | < 100ms | Pendente de medição em produção |
| **Peso Total de JavaScript** | 23 KB | 23 KB | < 100 KB | ✅ Excelente (< 25 KB) |

*Fatores determinantes implementados:*
* Fontes auto-hospedadas em WOFF2 com `font-display: swap` e preload crítico, sem requisições externas para o Google Fonts.
* Gráfico renderizado via Canvas nativo sem bibliotecas externas pesadas (Chart.js / Recharts).
* Exportação em PDF por janela de impressão CSS nativa (`window.print()`), eliminando bibliotecas de 500KB como jsPDF ou html2canvas.
* Correção de contraste de cores nos tokens CSS para atender ao padrão WCAG AA de 4.5:1.
* Inclusão de `aria-label` descritivos em português para todos os elementos interativos.

---

## 6. Lista de Alegações a Verificar ("Claims to Verify")

Recomendado para conferência final por um contador ou advogado trabalhista brasileiro:

1. **Dias Úteis e Sábados no DSR:**
   * *Status no código:* Padronizado para **26 dias úteis** e **4 repousos** (domingos e feriados). A jurisprudência consolidada do TST considera o sábado dia útil para efeito de cálculo do repouso semanal remunerado, mesmo em empresas com jornada compensada de segunda a sexta-feira.
2. **Divisor e Escala 12×36:**
   * *Status no código:* Corrigido! Foi removida qualquer menção de divisor 180 para jornada 12x36. O divisor 180 foi restrito à sua correta previsão legal: jornada de 36 horas semanais (ex: teleatendimento). Para a escala 12x36, adota-se o divisor 220 geral (art. 59-A da CLT e jurisprudência da SDI-1 do TST, ressalvada CCT). Nenhuma regra de divisor é atribuída à Súmula 444 do TST (que versa sobre validade da escala e feriados).
3. **Status da PEC da Redução da Jornada (Fim da 6x1):**
   * *Status no código:* Aprovada na Câmara dos Deputados em 27/05/2026 e na CCJ do Senado em 02/09/2026; aguarda Plenário do Senado (exige 49 votos em 2 turnos). **Não está em vigor.** A proposta estabelece transição escalonada para 42h (divisor 210) 2 meses após a promulgação e 40h (divisor 200) 1 ano após, sem redução salarial. A cópia e `src/data/legal-status.ts` deixam explícito que a jornada legal atual permanece em 44h (divisor 220).
4. **Trabalho em Domingos e Feriados (Súmula 146 do TST):**
   * *Status no código:* Mantida citação à Súmula 146 do TST ("O trabalho prestado em domingos e feriados, não compensado, deve ser pago em dobro, sem prejuízo da remuneração relativa ao repouso semanal") como base do adicional de 100%.
5. **Cumulação de Hora Extra Noturna:**
   * *Status no código:* Aplicada a regra combinada do Artigo 73 da CLT (hora noturna de 52min30s das 22h às 5h com adicional de 20%) multiplicada pelo adicional de hora extra de 50% (fator 1,80) ou 100% (fator 2,40).
6. **Incidência Tributária (IRRF e INSS):**
   * *Status no código:* Mantida explicação conceitual perene de que horas extras possuem natureza salarial estrita (incidem INSS e IRRF pela tabela progressiva oficial).

---

## 7. Proposta de Fase 2: Arquitetura de Topic Cluster (NÃO CONSTRUIR AGORA)

Para consolidar o domínio no Top 1 do Google Brasil e absorver tráfego informacional de cauda longa (*long-tail keywords*), propõe-se a seguinte estrutura modular de páginas internas na Fase 2:

```
                                [ / ]
                     (Calculadora Principal)
                                  │
         ┌──────────────┬─────────┴────────┬──────────────┬──────────────┐
         ▼              ▼                  ▼              ▼              ▼
[/como-calcular-  [/hora-extra-    [/calculadora-   [/adicional-   [/banco-de-horas]
  horas-extras]     50-e-100]        horas-extras-    noturno]
                                     com-minutos]
```

### Detalhamento das 6 Páginas do Cluster:

1. **`/como-calcular-horas-extras/`**
   * *Keyword Primária:* `como calcular horas extras` (Volume alto, intenção puramente educacional).
   * *Conteúdo:* Guia aprofundado com exemplos para horistas, mensalistas, comissionistas (Súmula 340 TST) e trabalhadores em regime de teletrabalho. Widget embutido ancorando na calculadora da home.
2. **`/hora-extra-50-e-100/`**
   * *Keyword Primária:* `hora extra 50 e 100` | `diferença hora extra 50 e 100`.
   * *Conteúdo:* Comparativo prático entre trabalho em dias úteis versus domingos e feriados. Tabela de regras de folga compensatória e convenções sindicais (60%, 70%, 100%).
3. **`/calculadora-horas-extras-com-minutos/`**
   * *Keyword Primária:* `calculadora de horas extras com minutos` | `calcular horas extras minutos quebrados`.
   * *Conteúdo:* Calculadora focada exclusivamente na conversão de cartão de ponto. Tabela completa de conversão minuto a minuto de 1 a 59 minutos para decimais.
4. **`/adicional-noturno/`**
   * *Keyword Primária:* `como calcular hora extra noturna` | `adicional noturno clt`.
   * *Conteúdo:* Explicação detalhada da hora noturna ficta (52min 30s), horário noturno urbano (22h às 5h) vs rural, e cálculo cumulativo da hora suplementar noturna.
5. **`/banco-de-horas/`**
   * *Keyword Primária:* `como funciona banco de horas` | `banco de horas clt`.
   * *Conteúdo:* Regras pós-Reforma Trabalhista (acordo individual de 6 meses vs convenção coletiva de 1 ano), rescisão contratual com saldo positivo/negativo de banco de horas e direitos do trabalhador.
6. **`/fim-da-escala-6x1-horas-extras/`**
   * *Keyword Primária:* `pec fim da escala 6x1 horas extras` | `jornada 40h divisor horas extras`.
   * *Conteúdo:* Página noticiosa perene com acompanhamento da tramitação no Senado, comparação de holerite entre 44h (divisor 220) e 40h (divisor 200) e simulações antecipadas.
