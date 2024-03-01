

const Footer = () => {
    const date = new Date();
const year = date.getFullYear();
  return (
      <div>
          <p>Bachelor Zone</p>
          <p> &#169; {year }</p>
    </div>
  )
}

export default Footer