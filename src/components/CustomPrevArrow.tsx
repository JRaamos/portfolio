function CustomPrevArrow({ style, ...props }: any) {
  return (<div
    { ...props }
    style={ {
      ...style,
      zIndex: 1,
      background: 'black',
      borderRadius: '50%',
    } }

  />);
}

export default CustomPrevArrow;
