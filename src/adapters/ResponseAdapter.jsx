class ResponseAdapter {
  static FactoryAll(response) {
    response.status.apis = response.status.apis.map((api) => {
      const [{ days, title, current_status }] = Object.values(api);
      const average = Math.round(days.reduce((a, b) => a + b) / days.length);

      return { days, title, current_status, average };
    });

    response.status.overall = response.status.apis.reduce(
      (overall, api, _, array) => {
        overall.average30d += api.average / array.length;
        overall.average24h += api.days.slice(-1)[0] / array.length;
        const arra7d = api.days.slice(Math.max(api.days.length - 7, 1));
        overall.average7d += arra7d.reduce((a, b) => a + b) / 7 / array.length;
        return overall;
      },
      {
        average24h: 0,
        average7d: 0,
        average30d: 0,
      }
    );
    return response;
  }
}

export default ResponseAdapter;
