const fetchMirrorData = async () => {
  const res = await fetch("http://newmirrors.zju.edu.cn/api/mirrors");
  const data = await res.json();
  return {
    mirrorInfo: data.mirrors,
    releaseInfo: data.info,
  };
};

export { fetchMirrorData };
