# Auditoria Técnica e Estratégica de SEO (SEO_AUDIT.md)

**Projeto:** Calculadora de Horas Extras Online  
**URL:** [https://calculadoradehorasextrasonline.com](https://calculadoradehorasextrasonline.com)  
**Mercado Alvo:** Brasil (pt-BR, google.com.br)  
**Data da Auditoria:** 09/10/2026  
**Auditor:** Senior Technical SEO, Native Brazilian-Portuguese Content Strategist & Astro Engineer  

---

## 1. Sumário Executivo & Diagnóstico Atual

A plataforma possui uma arquitetura técnica moderna baseada em **Astro v5 + Tailwind v4**, com execução 100% *client-side* (privacidade garantida, sem tráfego de dados salariais a servidores externos). Entretanto, sob o ponto de vista de SEO orgânico no Google Brasil e motores de resposta de IA (Google AI Overviews, Perplexity, ChatGPT Search), existem gargalos críticos de indexabilidade, intenção de busca, conformidade com a CLT e renderização técnica.

| Dimensão | Estado Atual | Avaliação | Impacto no Ranking |
| :--- | :--- | :---: | :--- |
| **Meta Title** | 67 caracteres (`Calculadora de Horas Extras Online Grátis - Calcular Hora Extra CLT (2026)`) | ⚠️ Truncado | Médio (perda de CTR no SERP) |
| **Meta Description** | 184 caracteres (excede 158 caracteres) | ⚠️ Truncada | Médio (perda de snippet e CTR) |
| **Heading Tree** | H1 único, mas presença de H3 isolado no componente da calculadora sem H2 pai; H2s do artigo genéricos | ⚠️ Inconsistente | Alto (dificulta extração de featured snippets) |
| **Schema JSON-LD** | Fragmentado em dois scripts (`Layout.astro` e `FAQ.astro`); sem `Organization`, sem `dateModified`, sem `featureList` | ⚠️ Incompleto | Alto (entidades soltas para o Knowledge Graph) |
| **Canonical & URLs** | Sem política explícita de `trailingSlash` configurada no Astro; canonical inconsistente entre páginas internas | ⚠️ Risco de duplicação | Alto |
| **pt-BR UX & Numéricos** | Inputs exibem `20.00` e `1.5` em formato anglo-saxão (`.`); stepper com labels abreviados (`SEG`) | ❌ Falha de UX local | Médio (fricção para o usuário brasileiro) |
| **Parâmetros DSR** | Componente já utiliza 26 dias úteis / 4 domingos, mas textos explicativos repetiam fórmulas com variações | ⚠️ Redundância | Médio |
| **PEC 6x1 / Regras 2026** | Menção dispersa a datas legislativas sem arquivo centralizado de controle de status | ⚠️ Risco de obsolescência | Alto (desalinhamento em AI answers) |
| **Acessibilidade (WCAG AA)** | Labels `.mono-eyebrow` (#8f8f8f em fundo claro tem contraste 3.38:1, abaixo de 4.5:1); inputs sem rotulagem semântica | ❌ Reprovado | Médio-Alto (penalidade técnica) |
| **Performance Web** | LCP rápido, mas dependência de Google Fonts externo sem preload crítico | ⚠️ Otimizável | Médio |

---

## 2. Auditoria Técnica Detalhada

### 2.1. Meta Tags & Snippet Optimization
* **Title Atual:** `Calculadora de Horas Extras Online Grátis - Calcular Hora Extra CLT (2026)` (67 chars).
  * *Problema:* No Google Desktop, o limite em pixels (~580px) corresponde a 55-60 caracteres. O título atual é cortado antes de exibir o sufixo de valor.
* **Meta Description Atual:** 184 caracteres.
  * *Problema:* O Google exibe entre 140 e 158 caracteres antes do corte no SERP móvel e desktop.
* **Open Graph / Twitter Card:**
  * Imagem estática `og-image.png` (1200x630) existe no `/public`.
  * `og:locale` está configurado como `pt_BR`.
  * `og:url` usa `Astro.url.href`, gerando inconsistência de barra final (`/`).

### 2.2. Árvore de Cabeçalhos (Heading Structure)
Atualmente na página inicial:
```
H1: Calculadora de Horas Extras
  H3: Ganhos Diários (dentro do Card de Gráfico - PULA NÍVEL H2!)
  H2: O Que É uma Calculadora de Horas Extras e Como Funciona?
  H2: Como Usar Nossa Calculadora de Horas Extras Online Grátis
  H2: Regras de Horas Extras no Brasil (CLT)
    H3: Hora Extra 50% vs 100%
    H3: DSR sobre Horas Extras (Cálculo Oficial)
  H2: PEC do Fim da Escala 6x1: O Que Muda no Cálculo de Horas Extras?
  H2: Tipos de Cálculos e Divisores de Salário Fixo
  H2: Por Que Escolher Nossa Calculadora de Horas Extras Online?
  H2: FAQ - Calculadora de Horas Extras
```
* **Diagnóstico de SEO:**
  1. O H3 `Ganhos Diários` na calculadora aparece antes de qualquer H2 da página, violando as boas práticas de hierarquia da W3C e WCAG.
  2. Os títulos H2 não correspondem diretamente às buscas exatas do cluster do Ahrefs Brasil (`como calcular horas extras`, `como calcular horas extras 50%`, `como calcular horas extras 100%`, `dsr sobre horas extras`).
  3. Faltam IDs nos H2s para links âncora internos e fragmentos de citação para IA.

### 2.3. Schema Markup (Dados Estruturados JSON-LD)
* **Estado Atual:** 
  * `Layout.astro` injeta um JSON-LD com `WebApplication` e `WebSite`.
  * `FAQ.astro` injeta outro bloco separado com `FAQPage`.
* **Problemas:**
  1. Dois blocos JSON-LD soltos em vez de um `@graph` unificado relacionando `WebSite` -> `WebApplication` -> `Organization` -> `FAQPage`.
  2. `WebApplication` está com `operatingSystem: "All"` (padrão schema.org é `"Any"` ou enum de SOs).
  3. Falta a propriedade obrigatória para frescor de conteúdo: `dateModified: "2026-10-09"`.
  4. Falta o array `featureList` especificando com precisão os recursos verificados da ferramenta.
  5. Entidade `Organization` ausente com atributos de marca, logotipo e canal de contato (`mailto:contato@calculadoradehorasextrasonline.com`).

### 2.4. Canônicas, Trailing Slashes & Sitemap
* `astro.config.mjs` possui `site: 'https://calculadoradehorasextrasonline.com'`, porém não define `trailingSlash: 'always'`.
* Links no rodapé e redirecionamentos utilizam barra no final (ex: `/sobre-nos/`, `/fale-conosco/`), enquanto links canônicos gerados via `Astro.url.href` podem variar dependendo do servidor web.
* `robots.txt` aponta corretamente para `https://calculadoradehorasextrasonline.com/sitemap-index.xml`.

### 2.5. Internacionalização & Hreflang
* A página define `<html lang="pt-BR">`.
* No `Layout.astro`, foram identificadas tags hreflang apontando para `pt`, `pt-BR` e `x-default`, todas para a raiz sem considerar páginas internas.
* Como o projeto não possui versão espelhada internacional sob a mesma lei (a legislação dos EUA difere substancialmente da CLT brasileira), **não deve existir hreflang cruzado para sites norte-americanos**.

### 2.6. Acessibilidade & Contraste (WCAG 2.1 AA)
* **Contraste de Cor:**
  * O token `--color-g-mute: #8f8f8f` aplicado sobre o fundo `--color-g-canvas: #fafafa` gera uma taxa de contraste de apenas **3.38:1**. A norma WCAG AA exige **4.5:1** para textos pequenos normais (< 18pt / 14pt bold).
  * O token `--color-g-faint: #a1a1a1` em avisos gera **2.4:1** (severamente reprovado).
* **Rotulagem Semântica & Teclado:**
  * Os botões de stepper na grade semanal possuem labels sintéticos como `aria-label="Aumentar 1h em SEG"`. O leitor de tela deve anunciar: `Aumentar horas de segunda-feira`.
  * O switch de DSR precisa ter estado `aria-checked` refletido com precisão e foco visível ao navegar por Tab.
  * O accordion de perguntas frequentes precisa garantir suporte nativo sem quebra de foco.

---

## 3. Lista de Alegações a Verificar ("Claims to Verify")

| Item | Afirmação / Parâmetro Encontrado | Verificação Jurídica / Numérica | Ação Corretiva Obrigatória |
| :---: | :--- | :--- | :--- |
| **01** | Inputs numéricos com ponto decimal (`20.00`, `1.5`) | Usuários brasileiros utilizam vírgula como separador decimal (`20,00`, `1,5`). O padrão HTML nativo rejeita vírgulas em alguns sistemas operacionais móveis. | Migrar inputs para `inputmode="decimal"`, aceitar vírgula e ponto via script e formatar saída com `Intl.NumberFormat('pt-BR')`. |
| **02** | Contagem padrão de DSR: 22 dias úteis / 8 domingos+feriados | **Incorreto pela Lei 605/1949 e TST.** O sábado é dia útil não trabalhado para fins de repouso remunerado, a menos que haja feriado. O mês comercial padrão possui **26 dias úteis e 4 domingos**. | Padronizar valores padrão para **26 dias úteis** e **4 repousos** no componente e em todos os exemplos textuais. |
| **03** | Divisor 180 para escala 12×36 | **Incorreto.** A jurisprudência da SDI-1 do TST e o art. 59-A da CLT adotam o divisor **220** para a escala 12x36 (ressalvada previsão mais favorável em CCT). A Súmula 444 do TST trata da validade da jornada 12x36 e da remuneração em dobro nos feriados, não de fixação de divisores. O divisor 180 aplica-se à jornada padrão de 36h semanais (6h diárias). | Remover qualquer alegação de divisor 180 para 12x36 e não atribuir regra de divisor à Súmula 444. Manter 220 como padrão geral e associar 180 à jornada de 36h. |
| **04** | Status da PEC do fim da escala 6x1 | Aprovada na Câmara dos Deputados em dois turnos em 27/05/2026 e na CCJ do Senado em 02/09/2026; aguarda Plenário do Senado. Não está em vigor. Proposta reduz jornada de 44h para 42h (2 meses após) e depois 40h (1 ano após). Não extingue hora extra. | Isolar dados em `src/data/legal-status.ts` com data de revisão `09/10/2026` e exibir claramente que a matéria **não está em vigor**, fornecendo simulações de 42h e 40h. |
| **05** | Suporte a minutos quebrados | Alegação presente no texto anterior. **Verificação no código:** Implementado! O componente possui campos `day-min-input` (0-59 min) integrados ao cálculo decimal da hora. | Manter a alegação e destacar a funcionalidade como diferencial competitivo verificável. |
| **06** | Entrada por salário mensal bruto | Alegação presente no texto anterior. **Verificação no código:** Implementado! Modo alternável com divisores 220, 210, 200, 180 e 150. | Manter a alegação e explicar a fórmula do salário-hora no artigo. |
| **07** | Alíquotas de INSS e IRRF sobre horas extras | Horas extras têm natureza estritamente salarial (remuneração). Incidem INSS, IRRF (tabela progressiva), FGTS, reflexos em 13º e férias. | Manter o esclarecimento conceitual perene sem fixar tabelas provisórias sem fonte oficial. |
| **08** | Súmula 172 do TST | Computam-se no cálculo do repouso remunerado as horas extras habitualmente prestadas. | Citação formal correta mantida na seção de fontes legais. |
| **09** | Súmula 264 do TST | A remuneração do serviço suplementar é composta do valor da hora normal integrado por parcelas de natureza salarial e acrescido do adicional. | Adicionar citação na seção explicativa e no FAQ adaptado. |
| **10** | Súmula 146 do TST | O trabalho prestado em domingos e feriados, não compensado, deve ser pago em dobro, sem prejuízo da remuneração relativa ao repouso semanal. | Mantida na fundamentação do adicional legal de 100% para trabalho em feriados e repousos não compensados. |

---

## 4. Plano Priorizado de Implementação

1. **Fase B - On-Page & Conteúdo Estratégico:**
   * Selecionar e aplicar Title (≤ 60 chars) e Meta Description (140-158 chars).
   * Estruturar H1 único com introdução *answer-first* rica nos primeiros 100 termos.
   * Redigir artigo completo (1.800 a 2.500 palavras) estruturado em H2s mapeados com as intenções de busca do Ahrefs, exemplos matemáticos verificados e tabela comparativa honesta.
   * Montar FAQ completo com 16 perguntas em HTML semântico no servidor (`<details><summary>`), respondendo direto ao ponto em 50-120 palavras.
   * Seção em inglês isolada (`<section lang="en">`) com 2-3 frases objetivas direcionadas ao público internacional com busca no Brasil.

2. **Fase C - Technical SEO, Acessibilidade & Performance:**
   * Criar arquivo de controle `src/data/legal-status.ts` centralizando data de revisão (`09/10/2026`) e status legislativo da PEC 6x1.
   * Gerar `@graph` JSON-LD unificado em `Layout.astro` contendo `Organization`, `WebSite`, `WebApplication` e `FAQPage`.
   * Corrigir contraste das cores cinza (`--color-g-mute`, `--color-g-faint`) para atingir conformidade WCAG AA (mínimo 4.5:1).
   * Refatorar labels de acessibilidade (`aria-label`) dos botões de stepper por dia por extenso em português.
   * Ajustar inputs do calculador para aceitar vírgula e ponto com formatação pt-BR nativa.
   * Garantir links âncora funcionais (`#calculadora`) no header e footer.
   * Validar build do Astro sem erros.
