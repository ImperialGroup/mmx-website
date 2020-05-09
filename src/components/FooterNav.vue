<template>
  <nav class="footer-nav">
    <div class="footer-content">
      <p class="normalFont">Meld Gold Pty Ltd</p>
      <p class="normalFont">5/576 Kingsford Smith Drive, Hamilton, QLD, 4007. Australia.</p>
    </div>
    <div class="footer-content">
      <p>Services: Physical and digital Gold and Silver</p>
      <p>Transactions will be conducted in $AUD</p>
      <p>Customer service: <a href="mailto:aj@meldgold.com?subject=Meld Website Enquiry">aj@meldgold.com</a></p>
    </div>
    <div class="footer-content">
      <p>Shipping and Delivery Policy: We deliver products using Australian Post Couriers. Shipping costs are influenced by the size and weight of the product and your location. Exact shipping costs are calculated in the shopping cart and will be added  to the order total before checkout. Orders are dispatched within (3) business days. Shipping times are estimated at between (5) and (7) business days depending on your location.</p>
    </div>
    <div class="footer-content">
      <p>Shipping / Delivery charges cannot be quantified at the time of ordering, prices for Gold &amp; Silver will be spot prices taken from Kitco, GST will be included, shipping/delivery costs will be standard or express prices from Australian Post</p>
    </div>
    <div class="footer-content">
      <p>All purchase will require KYC/AML checks in line with AUSTRAC requirements </p>
      <p><a href="https://drive.google.com/file/d/1nARpESxl1udgxr2bTe0JKIBZa1yjUKxz/view" target="_blank">Privacy Policy</a></p>
    </div>
    <div class="footer-content">
      <p>Refund policy: Please choose carefully. We do not normally give refunds if you simply change your mind or make a wrong decision. You can choose between a refund, exchange or credit where goods are faulty, have been wrongly described, are different to the product purchased on the website or don’t perform as advertised.</p>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'FooterNav'
}
</script>

<style lang="scss" scoped>
$mrseaves: "mrs-eaves", 'Times New Roman', Times, serif;

.footer-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.normalFont {
  font-size: 0.8rem;
}

p {
  font-family: $mrseaves;
  font-size: 0.6rem;
  line-height: percentage(22 / 16);
  text-align: left;
  padding-right: 20px;
}

p > a {
  position: relative;
  display: inline-block;
  color: inherit;
  text-decoration: none;

  &::after {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 1px;
    border-bottom: solid 1px #fff;
    opacity: 0;
    transform: translateY(2px);
    transition: opacity .2s, transform .2s ease-out;
    content: '';
  }

  &:hover::after {
    opacity: 1;
    transform: translateY(0px);
  }
}

img {
  margin-left: 1rem;
}
</style>
