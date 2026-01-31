const { test, expect } = require('@playwright/test');

// Configuration
const CONFIG = {
  url: 'https://www.swifttranslator.com/',
  timeouts: {
    pageLoad: 2000,
    afterClear: 1000,
    translation: 3000,
    betweenTests: 2000
  },
  selectors: {
    inputField: 'Input Your Singlish Text Here.',
    outputContainer: 'div.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap'
  }
};

// Test Data - Completely New Test Cases
const TEST_DATA = {
  positive: [
    // Simple Sentences
    {
      tcId: 'Pos_Fun_0001',
      name: 'Nested Narrative Quotes',
      input: 'kamal kivvaa heta ennam kiyala, eeth mata eeka vishvaasa karanna amaaruyi',
      expected: 'කමල් කිව්වා හෙට එන්නම් කියල, ඒත් මට ඒක විශ්වාස කරන්න අමාරුයි',
      category: 'Word combination / phrase pattern',
      grammar: 'Complex sentence',
      length: 'M'
    },
    {
      tcId: 'Pos_Fun_0002',
      name: 'Past Perfect Continuous Intent',
      input: 'mama iiyee udhee idhalama oyaata kathaa karanna uthsaaha karamin amaaruyi',
      expected: 'මම ඊයේ උදේ ඉදලම ඔයාට කතා කරන්න උත්සාහ කරමින් අමාරුයි',
      category: 'Daily language usage',
      grammar: 'Past tense',
      length: 'M'
    },
    {
      tcId: 'Pos_Fun_0003',
      name: 'Compound Future Probability',
      input: 'vaessa naethoth api heta udhee paandhara nuvara eliya yanna balaaporoththu venavaa',
      expected: 'වැස්ස නැතොත් අපි හෙට උදේ පාන්දර නුවර එලිය යන්න බලාපොරොත්තු වෙනවා',
      category: 'Daily language usage',
      grammar: 'Compound sentence',
      length: 'M'
    },
    {
      tcId: 'Pos_Fun_0004',
      name: 'Double Negation Logic',
      input: 'oyaa nodhannavaa nemei mama nodhannavaa',
      expected: 'ඔයා නොදන්නවා නෙමේ මම නොදන්නවා',
      category: 'Word combination / phrase pattern',
      grammar: 'Negation (negative form)',
      length: 'M'
    },
    {
      tcId: 'Pos_Fun_0005',
      name: 'Mixed Language Business Request',
      input: 'karunaakaralaa me report eka check karala mata feedback ekak dhenna puluvandha?',
      expected: 'කරුනාකරලා මෙ report එක check කරල මට feedback එකක් දෙන්න පුලුවන්ද?',
      category: 'Mixed Singlish + English',
      grammar: 'Interrogative (question)',
      length: 'M'
    },
    {
      tcId: 'Pos_Fun_0006',
      name: 'Mixed Script Parenthetical',
      input: 'api heta Kandy koochchiyen yamu',
      expected: 'අපි හෙට Kandy කෝච්චියෙන් යමු',
      category: 'Mixed Singlish + English',
      grammar: 'Future tense',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_0007',
      name: 'Complex Conditional Clause',
      input: 'oyaa enavaanam mama innam kaeema laeesthi karannam',
      expected: 'ඔයා එනවානම් මම ඉන්නම් කෑම ලෑස්ති කරන්නම්',
      category: 'Daily language usage',
      grammar: 'Complex sentence',
      length: 'M'
    },
    {
      tcId: 'Pos_Fun_0008',
      name: 'Polite Interrogative Request',
      input: 'karunaakaralaa mata eeka kiyala dhenna puluvandha?',
      expected: 'කරුනාකරලා මට ඒක කියල දෙන්න පුලුවන්ද?',
      category: 'Greeting / request / response',
      grammar: 'Interrogative (question)',
      length: 'M'
    },
    {
      tcId: 'Pos_Fun_0009',
      name: 'Plural Subject Agreement',
      input: 'guruvaru saha lamayin okkoma paasalata giyaa',
      expected: 'ගුරුවරු සහ ලමයින් ඔක්කොම පාසලට ගියා',
      category: 'Daily language usage',
      grammar: 'Plural form',
      length: 'M'
    },
    {
      tcId: 'Pos_Fun_0010',
      name: 'Direct Imperative Command',
      input: 'ikmanata gihin potha aragena enna',
      expected: 'ඉක්මනට ගිහින් පොත අරගෙන එන්න',
      category: 'Daily language usage',
      grammar: 'Imperative (command)',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_0011',
      name: 'Past Tense Reflexive',
      input: 'mama iiye raathriyee nidhaaganna giyaa',
      expected: 'මම ඊයෙ රාත්‍රියේ නිදාගන්න ගියා',
      category: 'Daily language usage',
      grammar: 'Past tense',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_0012',
      name: 'Mixed Currency Identification',
      input: 'badu valata Rs. 1500k gevanna veyi',
      expected: 'බඩු වලට Rs. 1500ක් ගෙවන්න වෙයි',
      category: 'Punctuation / numbers',
      grammar: 'Future tense',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_0013',
      name: 'Time-Specific Question',
      input: 'veelaava kiiyadha kiyanna puluvandha?',
      expected: 'වේලාව කීයද කියන්න පුලුවන්ද?',
      category: 'Daily language usage',
      grammar: 'Interrogative (question)',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_0014',
      name: 'Multi-Pronoun Dialogue',
      input: 'api eyaalath ekka heta udhee yamu',
      expected: 'අපි එයාලත් එක්ක හෙට උදේ යමු',
      category: 'Daily language usage',
      grammar: 'Pronoun variation (I/you/we/they)',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_0015',
      name: 'Technical English Integration',
      input: 'mata computer eka restart karanna veyi',
      expected: 'මට computer එක restart කරන්න වෙයි',
      category: 'Mixed Singlish + English',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_0016',
      name: 'Inability Negation',
      input: 'mata heta udhee eheta yanna baee',
      expected: 'මට හෙට උදේ එහෙට යන්න බෑ',
      category: 'Daily language usage',
      grammar: 'Negation (negative form)',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_0017',
      name: 'Compound Logical Connection',
      input: 'mama kaeema kaeevaa saha vathura bivvaa',
      expected: 'මම කෑම කෑවා සහ වතුර බිව්වා',
      category: 'Word combination / phrase pattern',
      grammar: 'Compound sentence',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_0018',
      name: 'Location Preservation',
      input: 'ampaarata yanna paeyak vagee yayi',
      expected: 'අම්පාරට යන්න පැයක් වගේ යයි',
      category: 'Names / places / common English words',
      grammar: 'Future tense',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_0019',
      name: 'Formal Response Pattern',
      input: 'ov, mama eeka dhaenatath dhannavaa',
      expected: 'ඔව්, මම ඒක දැනටත් දන්නවා',
      category: 'Greeting / request / response',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_0020',
      name: 'Soft Command Variation',
      input: 'poddak methana vaadivenna',
      expected: 'පොඩ්ඩක් මෙතන වාඩිවෙන්න',
      category: 'Daily language usage',
      grammar: 'Imperative (command)',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_0021',
      name: 'Present Continuous Habit',
      input: 'mama nithara poth kiyavanavaa',
      expected: 'මම නිතර පොත් කියවනවා',
      category: 'Daily language usage',
      grammar: 'Present tense',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_0022',
      name: 'Punctuation Emphasis',
      input: 'meeka niyamayi!!! nedha?',
      expected: 'මේක නියමයි!!! නේද?',
      category: 'Punctuation / numbers',
      grammar: 'Interrogative (question)',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_0023',
      name: 'Nested Phrase Pattern',
      input: 'api dhennaa ekathu velaa kaeema hadhamu',
      expected: 'අපි දෙන්නා එකතු වෙලා කෑම හදමු',
      category: 'Word combination / phrase pattern',
      grammar: 'Future tense',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_0024',
      name: 'Long Narrative Stress',
      input: 'parana kathaava kiyanna giyoth godaak velaa yaavi. eeth mama hithannee oyaa eeka dhaenatath dhannavaa aethi kiyalaa mama visvaasa karanavaa.',
      expected: 'පරන කතාව කියන්න ගියොත් ගොඩාක් වෙලා යාවි. ඒත් මම හිතන්නේ ඔයා ඒක දැනටත් දන්නවා ඇති කියලා මම විස්වාස කරනවා.',
      category: 'Daily language usage',
      grammar: 'Complex sentence',
      length: 'L'
    }
  ],
  
  negative: [
    {
    tcId: 'Neg_Fun_0001',
      name: 'Zero-Space Phonetic Run-on',
      input: 'mamagedharainnee',
      expected: 'මම ගෙදර ඉන්නේ',
      category: 'Typographical error handling',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_0002',
      name: 'Abnormal Vowel Stacking',
      input: 'aaaaieeeouuu',
      expected: 'aaaaieeeouuu',
      category: 'Typographical error handling',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_0003',
      name: 'Excessive White Space Padding',
      input: 'mama     yanava  gedhara',
      expected: 'මම යනවා ගෙදර',
      category: 'Formatting (spaces / line breaks / paragraph)',
      grammar: 'Simple sentence',
      length: 'M'
    },
    {
      tcId: 'Neg_Fun_0004',
      name: 'Paragraph Indentation Stress',
      input: '\t\tmama yanava\n\t\toyath enavada?',
      expected: 'මම යනවා\nඔයත් එනවාද?',
      category: 'Formatting (spaces / line breaks / paragraph)',
      grammar: 'Interrogative (question)',
      length: 'M'
    },
    {
      tcId: 'Neg_Fun_0005',
      name: 'CamelCase Input Stress',
      input: 'MamaGedaraYanawaAda',
      expected: 'මමගෙදරයනවාඅද',
      category: 'Formatting (spaces / line breaks / paragraph)',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_0006',
      name: 'Phonetic Recursion Stress',
      input: 'maaaaamaaaaa gaaaaedharaaaaa yaaaaannaaaaavaaadaaaaa?',
      expected: 'මාමා ගෙදර යනවාද?', // Testing if the engine collapses repeated vowels or fails
      category: 'Typographical error handling',
      grammar: 'Interrogative (question)',
      length: 'M',
    },
   {
      tcId: 'Neg_Fun_0007',
      name: 'Double Aspirated Cluster Crash',
      input: 'shrasthra-shasthra dharshanaya',
      expected: 'ශ්‍රාස්ත්‍ර-ශාස්ත්‍ර දර්ශනය',
      actual: 'ශ්රස්ත්ර-ශස්ත්ර දර්ශනය', // System fails to render the Hal-kirima correctly on complex clusters
      category: 'Daily language usage',
      grammar: 'Simple sentence',
      length: 'M',
      qualityFocus: 'Accuracy validation (FAIL)'
    },
    {
      tcId: 'Neg_Fun_0008',
      name: 'Vowel-Sign Conflict Failure',
      input: 'rUpa rEkhA rOga rUpa', 
      expected: 'රූප රේඛා රෝග රූප',
      actual: 'රඋප රඑඛා රඔග රඋප', // System fails to attach signs, treats vowels as independent characters
      category: 'Typographical error handling',
      grammar: 'Simple sentence',
      length: 'M',
    },
    {
      tcId: 'Neg_Fun_0009',
      name: 'Case Sensitivity Logic Failure',
      input: 'mama yanawa ADA RATHRI',
      expected: 'මම යනවා අද රාත්‍රී',
      actual: 'මම යනවා ඒඩීඒ ආර්ඒටීඑච්ආර්අයි', // FAIL: All-caps input causes the engine to spell out letters individually
      category: 'Typographical error handling',
      grammar: 'Simple sentence',
      length: 'M',
      qualityFocus: 'Robustness validation (FAIL)'
    },
    {
      tcId: 'Neg_Fun_0010',
      name: 'Contextual Word-Breaking Failure',
      input: 'apiyanava kavadadhaenne',
      expected: 'අපි යනවා කවදාද එන්නේ',
      actual: 'අපියනවා කවදාදැන්නෙ', // FAIL: System fails to separate run-on Singlish and garbles the ending sounds
      category: 'Typographical error handling',
      grammar: 'Interrogative (question)',
      length: 'M',
      qualityFocus: 'Robustness validation (FAIL)'
    },
  ],
  
  ui: [{
    tcId: 'Pos_UI_001',
    name: 'Real-time translation updates as typing',
    input: 'mama kaeema kannavaa',
    expected: 'මම කෑම කන්නවා',
    category: 'Usability flow',
    grammar: 'Present tense',
    length: 'S'
  },
  {
      tcId: 'UI_Fun_002',
      name: 'Clear Button State Reset',
      input: 'api heta yanavaa',
      expected: 'අපි හෙට යනවා',
      category: 'Empty/cleared input handling',
      grammar: 'Future tense',
      length: 'M',
    },
]
};

// Helper Functions
class TranslatorPage {
  constructor(page) {
    this.page = page;
  }

  async navigateToSite() {
    await this.page.goto(CONFIG.url);
    await this.page.waitForLoadState('networkidle');
    await this.page.waitForTimeout(CONFIG.timeouts.pageLoad);
  }

  async getInputField() {
    return this.page.getByRole('textbox', { name: CONFIG.selectors.inputField });
  }

  async getOutputField() {
    return this.page
      .locator(CONFIG.selectors.outputContainer)
      .filter({ hasNot: this.page.locator('textarea') })
      .first();
  }

  async clearAndWait() {
    const input = await this.getInputField();
    await input.clear();
    await this.page.waitForTimeout(CONFIG.timeouts.afterClear);
  }

  async typeInput(text) {
    const input = await this.getInputField();
    await input.fill(text);
  }

  async waitForOutput() {
    await this.page.waitForFunction(
      () => {
        const elements = Array.from(
          document.querySelectorAll('.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap')
        );
        const output = elements.find(el => {
          const isInputField = el.tagName === 'TEXTAREA' || el.getAttribute('role') === 'textbox';
          return !isInputField && el.textContent && el.textContent.trim().length > 0;
        });
        return output !== undefined;
      },
      { timeout: 10000 }
    );
    await this.page.waitForTimeout(CONFIG.timeouts.translation);
  }

  async getOutputText() {
    const output = await this.getOutputField();
    const text = await output.textContent();
    return text.trim();
  }

  async performTranslation(inputText) {
    await this.clearAndWait();
    await this.typeInput(inputText);
    await this.waitForOutput();
    return await this.getOutputText();
  }
}

// Test Suite
test.describe('SwiftTranslator - Singlish to Sinhala Conversion Tests', () => {
  let translator;

  test.beforeEach(async ({ page }) => {
    translator = new TranslatorPage(page);
    await translator.navigateToSite();
  });

  // Positive Functional Tests
  test.describe('Positive Functional Tests', () => {
    for (const testCase of TEST_DATA.positive) {
      test(`${testCase.tcId} - ${testCase.name}`, async () => {
        const actualOutput = await translator.performTranslation(testCase.input);
        expect(actualOutput).toBe(testCase.expected);
        await translator.page.waitForTimeout(CONFIG.timeouts.betweenTests);
      });
    }
  });

  // Negative Functional Tests
  test.describe('Negative Functional Tests', () => {
    for (const testCase of TEST_DATA.negative) {
      test(`${testCase.tcId} - ${testCase.name}`, async () => {
        const actualOutput = await translator.performTranslation(testCase.input);
        expect(actualOutput).toBe(testCase.expected);
        await translator.page.waitForTimeout(CONFIG.timeouts.betweenTests);
      });
    }
  });

  // UI Test
  test.describe('UI Functionality Tests', () => {
    test(`${TEST_DATA.ui.tcId} - ${TEST_DATA.ui.name}`, async ({ page }) => {
      const translator = new TranslatorPage(page);
      const input = await translator.getInputField();
      const output = await translator.getOutputField();

      await translator.clearAndWait();
      
      // Type partial input
      await input.pressSequentially(TEST_DATA.ui.partialInput, { delay: 150 });
      
      // Wait for partial output
      await page.waitForTimeout(1500);
      
      // Verify partial translation appears
      let outputText = await output.textContent();
      expect(outputText.trim().length).toBeGreaterThan(0);
      
      // Complete typing
      await input.pressSequentially(TEST_DATA.ui.input.substring(TEST_DATA.ui.partialInput.length), { delay: 150 });
      
      // Wait for full translation
      await translator.waitForOutput();
      
      // Verify full translation
      outputText = await translator.getOutputText();
      expect(outputText).toBe(TEST_DATA.ui.expectedFull);
      
      await page.waitForTimeout(CONFIG.timeouts.betweenTests);
    });
  });
});
