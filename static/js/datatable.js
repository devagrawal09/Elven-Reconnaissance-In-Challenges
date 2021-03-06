(function () {
  /**
   * @type { typeof import('../../src/languages/en').en }
   */
  const ericLangPack = selectedLangPack;

  /**
   * @param { import('../../src/models/challenge.model').IChallenge[] } data
   */
  function setupDataTable(data) {
    const table = $('#eric-results');

    table.DataTable({
      data,
      searching: false,
      columns: [
        { data: 'name', title: ericLangPack.text.name },
        {
          data: 'summary',
          title: ericLangPack.text.summary,
        },
        {
          data: 'prize',
          title: ericLangPack.text.gem_prize,
          render: data =>
            `${data} <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style="width: 20px"><g fill="none" fill-rule="evenodd"><path fill="#24CC8F" d="M0 9l5-7h14l5 7-12 13z"></path><path fill="#FFF" opacity=".25" d="M7 8.8L6 4h6zM17 8.8L18 4h-6z"></path><path fill="#FFF" opacity=".5" d="M7 8.8L12 4l5 4.8zM2.6 8.8L6 4l1 4.8z"></path><path fill="#34313A" opacity=".11" d="M21.4 8.8L18 4l-1 4.8zM2.6 8.8H7l5 10.3z"></path><path fill="#FFF" opacity=".5" d="M21.4 8.8H17l-5 10.3z"></path><path fill="#FFF" opacity=".25" d="M7 8.8h10l-5 10.3z"></path></g></svg>`,
        },
        {
          data: 'created',
          title: ericLangPack.text.created,
          render: (data, type) => {
            if (type === 'display') {
              return dayjs(data).format('MMM D, YYYY');
            }
            return data;
          },
        },
        {
          data: 'updated',
          title: ericLangPack.text.last_updated,
          render: (data, type) => {
            if (type === 'display') {
              return dayjs(data).format('MMM D, YYYY');
            }
            return data;
          },
        },
        {
          data: 'official',
          title: ericLangPack.text.habitica_official_challenge,
          render: data => (data ? 'Yes' : 'No'),
        },
        {
          data: 'group.name',
          title: ericLangPack.text.group,
          render: data => (data ? data : 'None'),
        },
      ],
    });
  }

  /**
   * @type { import('axios').AxiosInstance }
   */
  const ax = axios;

  const loadingText = $('#loading-text');

  ax.get('/data' + window.location.search)
    .then(res => {
      loadingText.hide();
      setupDataTable(res.data);
    })
    .catch(err => {
      console.error(err);
    });
})();
