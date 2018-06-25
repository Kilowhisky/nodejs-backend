import config from '../app/config/config';

/**
 * Constructs a testable URL from the URL segment requested
 * @param  {String} component API relative URL to construct
 * @return {String}           Full path URL
 */
export function constructUrl(segment){
  return `http://127.0.0.1:${config.port}${config.rootUrl}${segment}`;
}
