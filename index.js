import LLMS from '../static/llms.txt';
import LLMS_FULL from '../static/llms-full.txt';

export default {
  async fetch(request) {
    const url = new URL(request.url);
    const path = url.pathname;

    if (path === '/llms.txt') {
      return new Response(LLMS, {
        status: 200,
        headers: {
          'Content-Type': 'text/plain; charset=utf-8',
          'Cache-Control': 'public, max-age=86400',
        },
      });
    }

    if (path === '/llms-full.txt') {
      return new Response(LLMS_FULL, {
        status: 200,
        headers: {
          'Content-Type': 'text/plain; charset=utf-8',
          'Cache-Control': 'public, max-age=86400',
        },
      });
    }

    return fetch(request);
  },
};
