(function () {
  /**
   * @type { typeof import('../../src/languages/en').en }
   */
  const ericLangPack = selectedLangPack;

  /**
   * @type { import('axios').AxiosInstance }
   */
  const ax = axios;

  function setupDataTable() {
    const table = $('#eric-results');

    table.DataTable({
      serverSide: true,
      ajax: ({ columns, ...data }, cb) => {
        const order = data.order.map(({ column, dir }) => [columns[column].data, dir]);

        ax.post(
          '/data' +
            window.location.search +
            `&` +
            new URLSearchParams({ options: JSON.stringify({ ...data, order }) }),
        )
          .then(res => cb(res.data))
          .catch(err => console.error(err));
      },
      searching: false,
      columns: [
        {
          data: 'name',
          title: ericLangPack.text.name,
          render: (name, type, row) => {
            if (type === 'display') {
              return `<a class="link-light" href="https://habitica.com/challenges/${row.id}" target="_blank">${name}</a>`;
            }
            return name;
          },
        },
        {
          data: 'summary',
          title: ericLangPack.text.summary,
        },
        {
          data: 'prize',
          title: ericLangPack.text.gem_prize,
          render: data => `
            ${data}
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style="width: 20px"><g fill="none" fill-rule="evenodd"><path fill="#24CC8F" d="M0 9l5-7h14l5 7-12 13z"></path><path fill="#FFF" opacity=".25" d="M7 8.8L6 4h6zM17 8.8L18 4h-6z"></path><path fill="#FFF" opacity=".5" d="M7 8.8L12 4l5 4.8zM2.6 8.8L6 4l1 4.8z"></path><path fill="#34313A" opacity=".11" d="M21.4 8.8L18 4l-1 4.8zM2.6 8.8H7l5 10.3z"></path><path fill="#FFF" opacity=".5" d="M21.4 8.8H17l-5 10.3z"></path><path fill="#FFF" opacity=".25" d="M7 8.8h10l-5 10.3z"></path></g></svg>
          `,
        },
        {
          data: 'memberCount',
          title: ericLangPack.text.member_count,
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
          render: (groupName, type, challenge) => {
            if (!groupName) {
              return 'None';
            }
            if (type === 'display') {
              return `<a class="link-light" href="https://habitica.com/groups/guild/${challenge.group.id}" target="_blank">${groupName}</a>`;
            }
            return groupName;
          },
        },
        {
          data: 'group.langs',
          title: ericLangPack.text.group_langs,
          render: (data, t, challenge) => {
            if (challenge.group.langAll) {
              return 'All';
            }
            return data
              ? data.map(l => `${ericLangPack.langs[l.lang]}${l.primary ? `` : ` (Secondary)`}`)
              : 'None';
          },
        },
      ],
      dom: 'Btlip',
      buttons: ['colvis', 'copy', 'csv', 'excel', 'pdf'],
    });
  }

  setupDataTable();
})();
