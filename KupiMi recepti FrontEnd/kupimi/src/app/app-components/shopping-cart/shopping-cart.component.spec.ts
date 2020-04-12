import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingCartComponent } from './shopping-cart.component';

describe('ShoppingCartComponent', () => {
  let component: ShoppingCartComponent;
  let fixture: ComponentFixture<ShoppingCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppingCartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  var check = false;

function changeVal(el) {
  var qt = parseFloat(el.parent().children(".qt").html());
  var price = parseFloat(el.parent().children(".price").html());
  var eq = Math.round(price * qt * 100) / 100;

  el.parent()
    .children(".full-price")
    .html(eq + "€");

  changeTotal();
}

function changeTotal() {
  var price = 0;

  $(".full-price").each(function (index) {
    price += parseFloat($(".full-price").eq(index).html());
  });

  price = Math.round(price * 100) / 100;
  var tax = Math.round(price * 0.05 * 100) / 100;
  var shipping = parseFloat($(".shipping span").html());
  var fullPrice = Math.round((price + tax + shipping) * 100) / 100;

  if (price == 0) {
    fullPrice = 0;
  }

  $(".subtotal span").html(price.toString);
  $(".tax span").html(tax.toString);
  $(".total span").html(fullPrice.toString);
}

$(document).ready(function () {
  $(".remove").click(function () {
    var el = $(this);
    el.parent().parent().addClass("removed");
    window.setTimeout(function () {
      el.parent()
        .parent()
        .slideUp("fast", function () {
          el.parent().parent().remove();
          if ($(".product").length == 0) {
            if (check) {
              $("#cart").html(
                "<h1>The shop does not function, yet!</h1><p>If you liked my shopping cart, please take a second and heart this Pen on <a href='https://codepen.io/ziga-miklic/pen/xhpob'>CodePen</a>. Thank you!</p>"
              );
            } else {
              $("#cart").html("<h1>No products!</h1>");
            }
          }
          changeTotal();
        });
    }, 200);
  });

  $(".qt-plus").click(function () {
    $(this)
      .parent()
      .children(".qt")
      .html($(this).parent().children(".qt").html() + 1);

    $(this).parent().children(".full-price").addClass("added");

    var el = $(this);
    window.setTimeout(function () {
      el.parent().children(".full-price").removeClass("added");
      changeVal(el);
    }, 150);
  });
  var child: JQuery<HTMLElement>;
  $(".qt-minus").click(function () {
    child = $(this).parent().children(".qt");

    if (parseInt(child.html()) > 1) {
      child.html((parseInt(child.html()) - 1).toString);
    }

    $(this).parent().children(".full-price").addClass("minused");

    var el = $(this);
    window.setTimeout(function () {
      el.parent().children(".full-price").removeClass("minused");
      changeVal(el);
    }, 150);
  });

  window.setTimeout(function () {
    $(".is-open").removeClass("is-open");
  }, 1200);

  $(".btn").click(function () {
    check = true;
    $(".remove").click();
  });
});

});
