function CustomNextArrow({ style, ...props }: any) {
  return (<div
    { ...props }
    style={ {
      ...style,
      background: 'black',
      borderRadius: '50%',
    } }
  />);
}

export default CustomNextArrow;
