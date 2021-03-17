import * as Sentry from '@sentry/vue';
import { Integrations } from '@sentry/tracing';
import { version } from '../../package.json';

export const initSentry = (Vue) => {
  const date = new Date().toLocaleDateString().replace(/[/-]/g, '');
  Sentry.init({
    Vue,
    dsn:
      'https://f01cf1a099e1482e8b53e792e930097f@o548476.ingest.sentry.io/5671069',
    integrations: [new Integrations.BrowserTracing()],
    tracesSampleRate: 1.0,
    environment: process.env.NODE_ENV,
    release: version + '-' + date,
    beforeSend(event, hint) {
      return event;
    },
  });

  // 记录日志
  // Sentry.captureMessage(msg, level)

  // 记录错误与异常
  // Sentry.captureException(err)

  // 捕捉自定义事件
  // Sentry.captureEvent({ message: key, stacktrace: [value] })
  return Sentry;
};

export default Sentry;
