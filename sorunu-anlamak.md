# Sorunu Anlamak:

1. 1 butonuna basılmasından, güncellenen değerimizin render edilmesine kadar olan uygulama adımları nelerdir?
   Her adım için kodun hangi bölümünün geçerli olduğunu listeleyin.

- Kullanıcı 1 butonuna tıkladı.
- Ve onClick metodu aktif edilerek clickHandler fonksiyonu tetiklendi.
- ClickHandler fonksiyonu içinde dispatch ile state değeri güncellendi.
- Gğncelleme işlemi için dispatch edilen addOne() actionuna ulaşıldı.
- addOne action'ı, type'ı ADD_ONE olarak tanımladı.
- type'dan gelen ADD_ONE durumuna/case'ine göre reducer'ın return ifadesi çalışır.Return edilen ifadeye göre state spread operatörü ile kopyalanır ve total değeri 1 eklenerek güncellenir.
- TotalDisplay total artı 1'i gösterdi.
