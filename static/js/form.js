(function () {
  /**
   * @type { import('../../src/dtos').SearchConfig }
   */
  const ericConfig = config;

  /**
   * @type { import('../../src/dtos').SearchParams }
   */
  const ericQuery = query;

  /**
   * @type { typeof import('../../src/languages/en').en }
   */
  const ericLangPack = selectedLangPack;

  function advancedSearchSetup() {
    let advancedSearch = false;

    const advancedSearchButton = $('#advanced-search-toggle');
    const advancedSearchButtonText = $('#advanced-search-toggle .on-shown');
    const simpleSearchButtonText = $('#advanced-search-toggle .on-hidden');

    const advancedSearchForm = $('#advanced-search');

    advancedSearchButtonText.hide();

    advancedSearchButton.on('click', function () {
      if (advancedSearch) {
        advancedSearchButtonText.hide();
        simpleSearchButtonText.show();
        advancedSearchForm.collapse('hide');
        advancedSearch = false;
      } else {
        advancedSearchButtonText.show();
        simpleSearchButtonText.hide();
        advancedSearchForm.collapse('show');
        advancedSearch = true;
      }
    });
  }

  function prizeRangeInputSetup() {
    const minPrizeInput = $('input[name="min-prize"]');
    const maxPrizeInput = $('input[name="max-prize"]');
    const minPrizeLabel = $('#min-prize-value');
    const maxPrizeLabel = $('#max-prize-value');

    minPrizeInput.on('change', function () {
      minPrizeLabel.text(minPrizeInput.val());
      maxPrizeInput.attr('min', minPrizeInput.val());
    });

    maxPrizeInput.on('change', function () {
      maxPrizeLabel.text(maxPrizeInput.val());
      minPrizeInput.attr('max', maxPrizeInput.val());
    });
  }

  function memberRangeInputSetup() {
    const minMemberInput = $('input[name="min-members"]');
    const maxMemberInput = $('input[name="max-members"]');
    const minMemberLabel = $('#min-members-value');
    const maxMemberLabel = $('#max-members-value');

    minMemberInput.on('change', function () {
      minMemberLabel.text(minMemberInput.val());
      maxMemberInput.attr('min', minMemberInput.val());
    });

    maxMemberInput.on('change', function () {
      maxMemberLabel.text(maxMemberInput.val());
      minMemberInput.attr('max', maxMemberInput.val());
    });
  }

  function guildClassOptions() {
    const guildClassSelect = $('select[name="guild-class"]');
    const guildSubclassSelect = $('select[name="guild-subclass"]');

    const selectedClass = ericQuery['guild-class'];

    const guildClassOpts = Object.keys(ericConfig.guildClassMap);
    guildClassOpts.forEach(opt => {
      guildClassSelect.append(`
      <option value="${opt}" ${selectedClass === opt ? 'selected' : ''}>
        ${ericLangPack.classification[opt] || opt}
      </option>
    `);
    });

    if (selectedClass) {
      const subclassOpts = ericConfig.guildClassMap[selectedClass];
      guildSubclassOptions(subclassOpts);
    }

    guildClassSelect.on('change', () => {
      /**
       * @type { keyof typeof ericConfig.guildClassMap }
       */
      const selectedClass = guildClassSelect.val();

      const subclassOpts = ericConfig.guildClassMap[selectedClass];
      guildSubclassOptions(subclassOpts);
    });

    function guildSubclassOptions(subclassOpts) {
      const selectedSubclass = ericQuery['guild-subclass'];

      guildSubclassSelect.empty();
      if (subclassOpts) {
        subclassOpts.forEach(opt => {
          guildSubclassSelect.append(`
          <option
            value="${opt}" ${selectedSubclass === opt ? 'selected' : ''}
            data-bs-toggle="tooltip" data-bs-delay='{"show":0,"hide":150}'
            title="${ericLangPack.classification[opt.replace(/^./, 'sumS')] || ''}"
          >
            ${ericLangPack.classification[opt] || opt}
          </option>
        `);
        });
      } else {
        guildSubclassSelect.append(`
        <option selected disabled>Sub Classification (select classification first)</option>
      `);
      }
    }
  }

  function guildLangOptions() {
    const langSelect = $('select[name="guild-lang"]');
    const langOpts = ericConfig.langs;

    const selectedOpt = ericQuery['guild-lang'];

    langOpts.forEach(opt => {
      langSelect.append(`
      <option value="${opt}" ${selectedOpt === opt ? 'selected' : ''}>
        ${ericLangPack.langs[opt] || opt}
      </option>
    `);
    });
  }

  advancedSearchSetup();
  prizeRangeInputSetup();
  memberRangeInputSetup();
  guildClassOptions();
  guildLangOptions();
})();
