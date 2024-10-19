export const removeEmpty = obj => {
  let newObj = {};
  Object.keys(obj).forEach(key => {
    if (obj[key] === Object(obj[key])) newObj[key] = removeEmpty(obj[key]);
    else if (obj[key] !== undefined) newObj[key] = obj[key];
  });
  return newObj;
};

export const removeEmptyNotArray = obj => {
  let newObj = {};
  Object.keys(obj).forEach(key => {
    if (obj[key] !== undefined) newObj[key] = obj[key];
  });
  return newObj;
};

export const get = (object, keys, defaultVal) => {
  keys = Array.isArray(keys) ? keys : keys.split(".");
  object = object?.[keys?.[0]];
  if (object && keys.length > 1) {
    return get(object, keys.slice(1), defaultVal);
  }
  return object === undefined ? defaultVal : object;
};

export const set = (obj, path, value) => {
  if (Object(obj) !== obj) return obj; // When obj is not an object
  // If not yet an array, get the keys from the string-path
  if (!Array.isArray(path)) path = path.toString().match(/[^.[\]]+/g) || [];
  path.slice(0, -1).reduce(
    (
      a,
      c,
      i // Iterate all of them except the last one
    ) =>
      Object(a[c]) === a[c] // Does the key exist and is its value an object?
        ? // Yes: then follow that path
          a[c]
        : // No: create the key. Is the next key a potential array-index?
          (a[c] =
            Math.abs(path[i + 1]) >> 0 === +path[i + 1]
              ? [] // Yes: assign a new array object
              : {}), // No: assign a new plain object
    obj
  )[path[path.length - 1]] = value; // Finally assign the value to the last key
  return obj; // Return the top-level object to allow chaining
};

const FormDateReference = process.browser ? window?.FormData : () => {};

export const toFormData = (f => f(f))(h => f => f(x => h(h)(f)(x)))(
  f => fd => pk => d => {
    if (d instanceof Object) {
      Object.keys(d).forEach(k => {
        const v = d[k];
        if (pk) k = `${pk}[${k}]`;
        if (
          v instanceof Object &&
          !(v instanceof Date) &&
          !(v instanceof File)
        ) {
          return f(fd)(k)(v);
        } else {
          fd.append(k, v);
        }
      });
    }
    return fd;
  }
)(process.browser ? new FormDateReference() : () => {})();
