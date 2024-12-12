# Majority Element Fonksiyon Dokümantasyonu

Bu `Majority Element` fonksiyonu, bir dizide en çok tekrar eden elemanı bulmak için tasarlanmıştır. Bu çözüm, LINQ kullanılarak yazılmıştır ve hem okunabilir hem de etkili bir yapıya sahiptir. Zaman karmaşıklığı **O(n + k log k)**, uzay karmaşıklığı ise **O(k)** olarak değerlendirilir, burada `n` toplam eleman sayısını, `k` ise benzersiz elemanların sayısını ifade eder.

## Fonksiyon Açıklaması

```csharp
if (nums.Length == 1)
{
    return nums[0];
}

return nums.GroupBy(x => x)
           .OrderByDescending(g => g.Count())
           .First()
           .Key;
```

### Fonksiyon Adımları:
1. **Tek Elemanlı Dizi Kontrolü:** Eğer dizinin uzunluğu 1 ise, dizideki tek eleman döndürülür.
2. **Gruplama:** `GroupBy(x => x)` her elemanı gruplar, böylece aynı değerlere sahip elemanlar bir araya getirilir.
3. **Sıralama:** `OrderByDescending(g => g.Count())`, grupları eleman sayısına (frekanslarına) göre azalan sırada sıralar.
4. **İlk Grup ve Anahtar:** `First().Key` en çok tekrar eden elemanın değerini döndürür.

---

## Karmaşıklık Analizi

### **Zaman Karmaşıklığı: O(n + k log k)**
- **Gruplama (GroupBy):** Diziyi bir kez dolaşır ve gruplar oluşturur (**O(n)**).
- **Sıralama (OrderByDescending):** Benzersiz `k` elemanı sıralar (**O(k log k)**).
- **Sonuç Bulma (First):** En fazla tekrar eden elemanı almak sabit bir işlemdir (**O(1)**).
- Genel olarak: **O(n + k log k)**.

### **Uzay Karmaşıklığı: O(k)**
- `GroupBy` her benzersiz eleman için bir grup oluşturur ve grupları bellekte tutar.
- Dolayısıyla, uzay karmaşıklığı benzersiz eleman sayısına bağlıdır (**O(k)**).

---

## Örnek Kullanım

### Örnek 1:
```csharp
int[] nums1 = { 1, 2, 2, 3, 1, 2 };
Console.WriteLine(Majority Element(nums1)); // Çıktı: 2
```

### Örnek 2:
```csharp
int[] nums2 = { 4, 1, 2, 1, 2, 2 };
Console.WriteLine(Majority Element(nums2)); // Çıktı: 2
```

### Örnek 3:
```csharp
int[] nums3 = { 5, 5, 5, 3, 3 };
Console.WriteLine(Majority Element(nums3)); // Çıktı: 5
```

---

## Ana Noktalar
- LINQ kullanılarak yazılan bu çözüm, hem kısa hem de okunabilir bir yapı sunar.
- Daha büyük giriş boyutları üzerinde de çalışabilecek şekilde optimize edilmiştir.
- Zaman karmaşıklığı, sıralama adımından dolayı benzersiz eleman sayısına bağlıdır.


### Küçük Bir Not:
Eğer bu çözümü daha optimize etmek isterseniz, bir `Dictionary` kullanarak frekansları manuel olarak takip edebilir ve sıralama adımını kaldırarak **O(n)** zaman karmaşıklığı elde edebilirsiniz.
