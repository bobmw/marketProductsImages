const popProductos = () => {
  let accProduct = "";
  popProducts.map((item) => {
    accProduct += `<section class="marketItems shadow m-1">
                    <img name="thumbnail" class="w-100 h-25" src="${ item.image }" />
                        <section class="text-center mt-3 lead">
                        <h4 name="title">${ item.name }</h4>
                            <p name="describe">${ item.describe }</p>
                            <p name="price"> Por: <strong class="text-danger">${ item.price }</strong></p>
                        </section>
                  </section>
                `;
  });
  document.getElementById("popProducts").innerHTML = accProduct;
}

const promocaoProduct = () => {
  let accPromocao = "";
  promocao.map((item) => {
    accPromocao += `<section class="marketItems bg-light shadow m-1">
                    <img name="thumbnail" class="w-100 h-25" src="${ item.image }" />
                        <section class="text-center mt-3 lead">
                        <h4 name="title">${ item.name }</h4>
                            <p name="describe">${ item.describe }</p>
                            <p>De: <s>99,99</s></p>
                            <p name="price"> Por: <strong class="text-danger">${ item.price }</strong></p>
                        </section>
                  </section>
                `;
  });
  document.getElementById("promocao").innerHTML = accPromocao;
}

window.onload = () => {
  popProductos();
  promocaoProduct();
}